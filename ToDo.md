# ToDo Items for SecurityBSides

These are all of the current known tasks, broken into areas for timing to be able to migrate from pbwiki
to a new site.

## Pre-migration tasks to be done

-  [] Create gh-pages publishing
-  [] Figure out the slugify renaming of the path vs the eventName
   -  ideally we'd prefer `/events/<eventName>/<year>`
   -  References:
      -  [Gatsby File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
      -  [Slugigy used to alter eventName](https://github.com/sindresorhus/slugify)
-  [] Figure out of there's a way to add the year via a parsing of eventDate so we don't have to duplicate
   -  References:
      -  [Gatsby File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
      -  [gatsby-plugin-mdx]()
      -  [Gatsby Node API]()
-  [] Create a map of all event locations
   -  ideally this should be generated from the mdx files using a new frontmatter label
   -  some map generation / geolocation library
      -  [OpenLayers](https://www.npmjs.com/package/ol)
      -  [rlayers](https://www.npmjs.com/package/rlayers)
      -  [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
-  [] Create calendar views of upcoming events
   -  [] Create a "calendar" style view of BSides events
   -  [] Create an "agenda" style view of all BSides events
-  [] Verify group ownership of CDN - no single person / account points of failure

-  [] Determine which (if any) events are going to be migrated automatically
   -  See: Event Migration Notes
-  [] Convert main pages for the global organization
-  [] Define and utilize a style w/ navigation
   -  Pull style out of index.jsx
-  [] Define file naming conventions and document
-  [] Create documentation for adding an event to the site
-  [] Create documentation for adding global site content
-  [] Create "development" documentation
   -  walk through the main principles of the site generator
   -  Any code standards we want to utilize
   -  PR template

#### Notes about the migration (may be duplication)

ToDo: deduplicate this from the list above

These files are desired for the global organization (per Jack):

-  Front page http://www.securitybsides.com/w/page/12194156/FrontPage
-  Event History http://www.securitybsides.com/w/page/131065302/EventHistory
-  Organize a BSides http://www.securitybsides.com/w/page/12194160/OrganizeALocalBSides
-  BSides Groups and Social Media http://www.securitybsides.com/w/page/138691470/Groups%20and%20Social%20Media%20page
-  History of BSides http://www.securitybsides.com/w/page/50746315/BSidesHistory
-  What BSides Means http://www.securitybsides.com/w/page/87930010/What%20BSides%20Means
-  BSides Stories http://www.securitybsides.com/w/page/147978987/BSides%20Stories

The following might also be of interest to carry over in close to their current form:

-  BSides http://www.securitybsides.com/w/page/12194138/BSides

** Notes from Slack where there was a post of all of he html files in the directory **
Reference: [Slack File to understand these numbers](https://securitybsides.slack.com/files/U04CBKDKLQY/F054PGW7ZJL/bsidespagelist)
371-374 - BSidesHistory (several pages) - Seems important and interesting
947 - CPEs - A lot of people will want to keep track of this one, we get questions every event about them
956-971 - All global content related pages

881 - BackChannel - Not sure, but seems like it could be important?

978 - 987 - definitely generic content
990 - contact update form.html

#### Event Migration notes

-  [] Wrap all pbwiki comments in `{/* */}`
-  [] Strip / Replace all `style="..."` with valid MDX (needs to be a JS object)
-  [] Add frontmatter to each file
   -  automate adding values for fields`eventName`, `eventYear`
      -  this can likely come from filenames / filesystem, may also be a huge PITA
   -  automate adding value for `eventDate`
      -  this will definitely be a huge PITA

## "Migration Day" tasks

DNS:

-  beyond TTL time frame - update DNS to lower TTL for site name to 5 mins
-  GH Verify domain
-  Create CNAME(s) in GH? CDN? Both?
-  Update CNAME(s) in DNS
-  Verify changes have taken affect
-  return TTL to normal operating size

Site:

-  Verify proper publishing of site via GH and CDN (Cloudflare?)
-  monitor for outage

Community:

-  Make any necessary announcements pre-flip
-  Make announcement at flip
-  Make post-flip

## Additions (not needed for migration)

-  Internationalization of the full site
