import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../../../components";

const EventPage = ({ data, children }) => {
   console.log("EventPage (data): ", data);
   console.log("EventPage (children): ", children);

   return (
      <Layout>
         <h1>
            {data.mdx.frontmatter.eventName} {data.mdx.frontmatter.year}{" "}
            {data.mdx.frontmatter.eventPage}
         </h1>
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
            eventDate(formatString: "MMMM D, YYYY")
            eventName
            eventYear
            eventPage
            year: eventDate(formatString: "YYYY")
         }
         id
      }
   }
`;

export const Head = ({ data }) => {
   <title>
      {data.site.siteMetadata.title} - {data.mdx.frontmatter.eventName} -{" "}
      {data.mdx.frontmatter.year}
   </title>;
};

export default EventPage;
