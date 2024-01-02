import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import { dump } from "js-yaml";
import strftime from "strftime";
import fs from "fs";

// import { readSync, writeSync } from "to-vfile";
// import { matter } from "vfile-matter";

// import remarkComment from "remark-comment";
// import { parseDocument } from "yaml";

const addFrontmatter = () => {
   let local = process.argv[3];
   let frontmatter = {};
   frontmatter.originalFile = local.replace(/.*\//, "");
   frontmatter.globalPage = local.replace(/.*\//, "").replace(/\..*$/, "");
   frontmatter.convertDate = strftime("%Y-%m-%d %H:%M:%S", new Date());
   frontmatter.nav = {};
   frontmatter.nav.priority = 0;
   frontmatter.nav.head = "TBD";
   frontmatter.nav.title = local.replace(/.*\//, "").replace(/\..*$/, "");

   return (tree, file) => {
      visit(tree, "root", (node, index, parent) => {
         node.children.unshift({
            type: "yaml",
            value: dump(frontmatter, { indent: 3 }),
            position: {},
         });
      });
   };
};

const mdxCommentHtml = () => {
   // HTML comments are stripped out, and marking these
   // areas a 'comment' in the hast tree gets them removed
   // since we want to keep this data, wrap the html comments
   // in mdx style comments
   return (tree) => {
      // process.stderr.write("+++ converting HTML comments...\n");
      visit(tree, "html", (node, index, parent) => {
         // we should check for the <!-- and --> of an html comment
         // but everything with this in the files we're processing
         // only uses the html node type for these html comments
         node.value = String("{/* " + node.value + " */}");
      });
      // ToDo: Check for multiple html elements with /* at the start and combine them into a single text element
      //       this is to reduce extra newlines in the output but has no practical value
   };
};

const logTree = (tree) => {
   return (tree, file) => {
      // process.stdout.write(
      //    `\nfile.data:\n-------\--\n${JSON.stringify(file.data, null, 3)}\n\n`
      // );
      visit(tree, (node, index, parent) => {
         process.stdout.write(`${JSON.stringify(node)}\n`);
      });
   };
};

if (process.argv.length !== 4) {
   process.stderr.write(
      "Usage: " + process.argv[1] + "<inputfile> <outputfile>"
   );
   process.exit(0);
}

// console.log("args: ", JSON.stringify(process.argv));
process.stdout.write(String("input: " + process.argv[2] + "\n"));
process.stdout.write(String("output: " + process.argv[3] + "\n\n"));

// --- these items cause problems with automatic importing of results into Gatsby
// --- fixed manually in the initial import of files, these are problems to check on broken files
// ToDo: Escape any { characters found in the input file
// ToDo: Rewrite <URL> to [URL](URL) format (this is a known Gatsby/MDXv2 issue)
//
let output = unified()
   .use(rehypeParse)
   .use(rehypeRemark)
   .use(mdxCommentHtml)
   .use(addFrontmatter)
   .use(remarkFrontmatter, ["yaml"])
   .use(remarkGfm)
   .use(remarkStringify)
   // .use(logTree)
   .processSync(fs.readFileSync(process.argv[2], "utf-8"));

fs.writeFileSync(process.argv[3], String(output), { flag: "w" }, (err) => {});
