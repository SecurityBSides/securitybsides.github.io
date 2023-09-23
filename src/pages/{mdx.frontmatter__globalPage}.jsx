import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";

const EventPage = ({ data, children }) => {
   console.log("EventPage (data): ", data);
   console.log("EventPage (children): ", children);

   return (
      <Layout>
         <h1>{data.mdx.frontmatter.globalPage}</h1>
         {children}
      </Layout>
   );
};

export const eq = graphql`
   query q($id: String!) {
      site {
         siteMetadata {
            title
         }
      }
      mdx(id: { eq: $id }) {
         frontmatter {
            globalPage
         }
         id
         body
         url: gatsbyPath(filePath: "/{mdx.frontmatter__globalPage}")
      }
   }
`;

export const Head = ({ data }) => {
   <title>
      {data.site.siteMetadata.title} - {data.mdx.frontmatter.globalPage}
   </title>;
};

export default EventPage;
