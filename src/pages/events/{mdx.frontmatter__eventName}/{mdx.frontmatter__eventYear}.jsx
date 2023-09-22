import * as React from "react";
import { graphql } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";

const EventPage = ({ data, children }) => {
   console.log("EventPage (data): ", data);
   console.log("EventPage (children): ", children);

   return (
      <div>
         <h1>
            {data.mdx.frontmatter.eventName} {data.mdx.frontmatter.eventYear}{" "}
         </h1>
         {children}
      </div>
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
            year: eventDate(formatString: "YYYY")
         }
         id
         body
      }
   }
`;

export const Head = ({ data }) => {
   <title>
      {data.site.siteMetadata.title} - {data.mdx.frontmatter.eventName} -{" "}
      {data.mdx.frontmatter.eventYear}
   </title>;
};

export default EventPage;
