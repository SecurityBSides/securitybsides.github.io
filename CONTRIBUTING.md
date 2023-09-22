# How to Contribute to our site:

Note: This is a work in progress

## Event Addition(s)

ToDo: Write the details of how to add an event

## General Notes

ToDo: Write the details of general notes about this site

-  We're using Gatsby, so feel free to use all of the documents
   -  In Gatsby, we are using v5, which also means gatsby-plugin-mdx NOT allRemarkDown or others so use that as a filter to what you study about Gatsby

## Global Site Updates

ToDo: Write how to set up environment, test, and PR changes for the global org

# Setting up dev environment

-  Use nvm, and install and use the node version found in .nvmrc

### Common Problems

-  Use the right version of node. `nvm use` in the top level directory of look at .nvmrc and confirm it matches `node --version`.

> ⠙ compile gatsby files
> /var/folders/02/5mjm648d0qb9pds9vfl37xmw0000gn/T/yarn--1694998202944-0.17981192331085394/node: line 3: 69903 Segmentation fault: 11 "/Users/luwenth/.nvm/versions/node/v18.17.1/bin/node" "$@"

This usually mans there are some " where there should be ``` in your gatsby-config.js. Check whatever you just added before the segmentation fault started.

## Notes

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

### Page Component

3 things for a Page component (see Part 2):

1. Create the file in /src/pages
1. Import `import * as React from 'react'`
1. Define component
1. Export component
