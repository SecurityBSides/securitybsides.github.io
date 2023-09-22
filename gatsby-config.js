/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
   siteMetadata: {
      title: `Security BSides`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      `gatsby-plugin-sitemap`,
      {
         resolve: `gatsby-plugin-mdx`,
         extensions: [".mdx", ".md", ".html"],
         options: {
            mdxOptions: {
               remarkPlugins: [],
               rehypePlugins: [],
            },
         },
      },
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/images/icon.png",
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: "pages",
            path: `${__dirname}/src/pages/`,
         },
         __key: "pages",
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: "events",
            path: `${__dirname}/src/events/`,
         },
         __key: "events",
      },
   ],
};
