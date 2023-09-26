import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { NavDropdown } from "react-bootstrap";

// Controls the soring for the top of the navbar.
// Update this to change what's across the navbar.
// NOTE: Any headers not in this list will show up after it in alpha order
// NOTE: Events will always be to the far right, unless changed in layout.jsx
const navHead = ["General", "Contact", "How To"];

function navSort(a, b) {
   // we are comparing frontmatter, reduce for readability of logic
   let left = a.frontmatter.nav;
   let right = b.frontmatter.nav;

   // Sorting Logic:
   //   If the head is the same, return priority order.
   //   If neither is in the headers list, return alphabetical order.
   //   If only 1 isn't in the list, return 1/-1 to indicate which is already a know header.
   //   If both are in the list, return the order from header array.
   if (left.head === right.head) {
      return left.priority - right.priority;
   }
   /* 
      ToDo: If the heading is not in the header list alpha sort after the named headers
    */
   if (!navHead.includes(left.head) && !navHead.includes(right.head)) {
      // neither head is in our list, return alpha order
      return [left.head, right.head].sort();
   } else if (!navHead.includes(left.head)) {
      // left is not in our list, positive for right lesser
      return 1;
   } else if (!navHead.includes(right.head)) {
      // right is not in our list, negative for left lesser
      return -1;
   }
   // both are in our list, index math to the rescue
   return navHead.indexOf(left.head) - navHead.indexOf(right.head);
}

const GlobalNav = () => {
   const data = useStaticQuery(navQuery);
   let headings = new Set(navHead);
   let items = data.allMdx.nodes.sort(navSort);

   items.forEach((item) => {
      headings.add(item.frontmatter.nav.head);
   });

   return (
      <>
         {Array.from(headings).map((header) => {
            return (
               <NavDropdown title={header} id="basic-navbar-nav" key={header}>
                  {items
                     .filter((item) => {
                        return header === item.frontmatter.nav.head;
                     })
                     .map((entry) => {
                        return (
                           <NavDropdown.Item key={header + entry.id}>
                              <Link to={entry.gatsbyPath}>
                                 {entry.frontmatter.nav.text}
                              </Link>
                           </NavDropdown.Item>
                        );
                     })}
               </NavDropdown>
            );
         })}
      </>
   );
};

export const navQuery = graphql`
   query navQuery {
      allMdx(filter: { frontmatter: { globalPage: { ne: null } } }) {
         nodes {
            gatsbyPath(filePath: "/{mdx.frontmatter__globalPage}")
            internal {
               contentFilePath
            }
            frontmatter {
               globalPage
               nav {
                  head
                  priority
                  text
               }
            }
            id
         }
      }
   }
`;

export default GlobalNav;
