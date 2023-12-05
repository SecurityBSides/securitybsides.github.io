# How to Contribute:

## General Information

-  We're using Gatsby v5, with some customized pages
-  We're using NodeJS v20.\*
-  Events are all created from `./src/events`
-  Global site pages are created from `./src/global`
-  Site generation, major changes to structure, etc is created from `./src/pages`

#### Notes

-  Since we are using Gatsby v5, this also means we're using gatsby-plugin-mdx. Be careful when looking at documentation as the previous method of gatsby-plugin-allRemarkDown (or similar) is quite different.
-  We're using NodeJS version 20+, it's in the .nvmrc file for nvm users. Otherwise make sure you are using the right version of NodeJS or there will be a lot of errors.

## Development Pattern

This pattern should be used for all updates to the site, whether it is adding new events or updating the global pages. There will be some access provided to core site maintainers who may PR directly from this repository.

-  fork this repo (if you haven't already)
-  clone from your fork
-  verify node version 20.\*
-  yarn install
-  yarn run develop
-  make and view changes in the local development site
-  commit and push changes to your fork, ideally squashed (discrete, small, atomic changes are faster to review)
-  PR to the main repository

Please see the relevant Contributing sub-page for the types of updates you want to:

-  Adding your event(s) to the site, please see [Contributing.Events](CONTRIBUTING.Events.md)
-  Updating the global site pages and information, please see [Contribting.Global](CONTRIBUTING.Global.md)

## Below this point is only for altering how the site is created

If you are working on how the site is generated, the following information is for you.

### Creating a new Page - extending the site

1. Create the file in /src/pages
1. Import `import * as React from 'react'`
1. Define component
1. Export component
1. Use component

The main philosophy of Gatsby is that all of the content, frontmatter and mdx bodies, is imported into the gatsby graphql.
This means you can use the development \_\_graphql playground to query anything that gatsby has found and included.

### Useful Queries:

Top level Event directories:

```graphql
query MyQuery {
   allDirectory(filter: { relativeDirectory: { eq: "" } }) {
      nodes {
         name
         sourceInstanceName
         relativePath
         relativeDirectory
         dir
         base
      }
   }
}
```
