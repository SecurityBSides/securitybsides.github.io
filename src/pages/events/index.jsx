import * as React from "react";
import { graphql, Link } from "gatsby";

const Events = ({ data }) => {
   return (
      <div>
         <h1>
            All Events - eventDate Ordered (most recent / furthest future at the
            top)
         </h1>
         <ul>
            {data.allMdx.nodes.map((node) => {
               console.log(
                  "Events node.frontmatter: ",
                  JSON.stringify(node.frontmatter)
               );
               console.log(
                  "Events node.frontmatter.eventYear: ",
                  JSON.stringify(node.frontmatter.eventYear)
               );
               return (
                  <li key={node.id}>
                     <Link
                        to={
                           "/events/" +
                           node.frontmatter.eventName +
                           "/" +
                           node.frontmatter.eventYear
                        }
                     >
                        {node.frontmatter.eventName} /{" "}
                        {node.frontmatter.eventYear}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export const query = graphql`
   query eventPageQuery {
      allMdx(
         filter: { frontmatter: { eventName: { nin: ["", null] } } }
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
         }
      }
   }
`;

export default Events;
