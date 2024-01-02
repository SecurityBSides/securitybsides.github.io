## Global Site Updates

Global Site Content migration from pbwiki is currently a work in progress. A script to auto-migrate a number of pages is being developed, the current blocker is getting that script to create and add frontmatter to the output mdx files :(

Either the script will get fixed, or that portion of the migration will need to be done by hand.

### Adding Global Site Content

-  Create a new file in `./src/global`
-  Add the proper frontmatter / meta at the top of the file
-  Add in your content
-  PR your changes to the main repository

Please us mdx files, which are like md files except you can put jsx content in them if you really want (React and Javascript).

Example:
(Also feel free to look at any of the other files in global to see format)

```yaml
---
originalFile: contact update form.html
globalPage: contact update form
convertDate: 2023-09-28 09:09
nav:
   head: TBD
   title: contact update form
   priority: 0
---
# Page title

Content
```

##### Fields:

-  originalFile - optional, hopefully written by the migration script so we can compare to the original pbwiki file if needed. unused.
-  convertDate - optional, when the originalFile was transferred. unused.
-  globalPage - What will the page title be, and how will the slug get generated
-  nav - defines where in the navigation this page will go
   -  head: Top level header this page goes under
   -  text: the nav text to get to this page
   -  priority: what order under the heading does this page receive (0 is the top, more positive is further down)

## Automated Conversion (via script)

There is a generic conversion script to turn a global page from HTML markdown to MDX.

Script is: ./scripts/convertGlobal.mjs
Usage is

After you've done the conversion with the script, you may also need to do the following, if you get errors on your newly created files.

Manually: Escape any { characters found in the input file, which are not being used for `{/*` comment markers
Manually: Rewrite `<URL>` to `[URL](URL)` format (this is a known Gatsby/MDXv2 issue)

Finally, decide what header it belongs under, and perhaps which order it should be in the navigation.
Update the nav portion of the header, and verify everything ended where you expected.

### Notes

##### Linking between global pages

In your mdx file you want to link to another global page. In order to do this, you might think doing something like `[page](location)` would be the way to go. However, pages go through a slugification process to create their path. To make the reference end up where you want it, you should use `Link to={./File} />`. When you do this Gatsby should do the magic to figure out where that file ended up. (This needs testing and better documentation if wrong.)
