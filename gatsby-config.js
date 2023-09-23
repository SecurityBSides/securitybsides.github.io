/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
   siteMetadata: {
      title: `Security BSides`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      { resolve: `gatsby-plugin-sitemap` },
      { resolve: `gatsby-plugin-sass` },
      { resolve: `gatsby-plugin-sharp` },
      {
         resolve: `gatsby-plugin-mdx`,
         extensions: [".mdx", ".md"],
         options: {
            gatsbyRemarkPlugins: [
               // { resolve: `remark-gfm` },
               { resolve: `gatsby-remark-images`, options: { maxWidth: 1200 } },
            ],
         },
      },
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/images/bsides_icon.png",
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
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: "global",
            path: `${__dirname}/src/global/`,
         },
         __key: "global",
      },
   ],
};
