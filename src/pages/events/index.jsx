import * as React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../../components";

const Events = ({ data }) => {
   console.log("Events (data): ", data);
   return (
      <Layout>
         <h1>
            All Events - eventDate Ordered (most recent / furthest future at the
            top)
         </h1>
         <ul>
            {data.allMdx.nodes.map((node) => {
               return (
                  <li key={node.id}>
                     <Link to={node.url}>
                        {node.frontmatter.eventName} /{" "}
                        {node.frontmatter.eventYear}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </Layout>
   );
};

export const query = graphql`
   query eventPageQuery {
      allMdx(
         filter: {
            frontmatter: {
               eventName: { nin: ["", null] }
               eventPage: { eq: null }
            }
         }
         sort: { frontmatter: { eventDate: DESC } }
      ) {
         nodes {
            frontmatter {
               eventDate(formatString: "MMMM D, YYYY")
               eventName
               eventYear
            }
            id
            body
            url: gatsbyPath(
               filePath: "/events/{mdx.frontmatter__eventName}/{mdx.frontmatter__eventYear}"
            )
         }
      }
   }
`;

export default Events;
