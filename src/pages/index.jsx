import * as React from "react";

import { Layout } from "../components";

const IndexPage = () => {
   return (
      <Layout>
         <h1>Welcome to Security BSides</h1>
         <main>
            <p>This page needs content</p>
            <p>It should come from the wiki Frontpage content</p>
            <p>
               We will likely want to have all of the other global content
               included from <strong>src/globals</strong> by using a similar
               method to events, but with an addition of including many of the
               pages in the navbar using a <strong>nav</strong> frontmatter.
            </p>

            {/* We have dynamically created content!  */}
         </main>
      </Layout>
   );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
