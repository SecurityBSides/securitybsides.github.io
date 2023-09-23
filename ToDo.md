# ToDo Items for SecurityBSides

These are all of the current known tasks, broken into areas for timing to be able to migrate from pbwiki
to a new site.

## Pre-migration tasks to be done

-  [ ] Figure out mdx processing to utilize GFM (github flavored markdown)
-  [ ] Figure out of there's a way to add the year via a parsing of eventDate to remove "eventYear"
   -  References:
      -  [Gatsby File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
      -  [gatsby-plugin-mdx]()
      -  [Gatsby Node API]()
-  [ ] Create a map of all event locations
   -  ideally this should be generated from the mdx files using frontmatter info
   -  some map generation / geolocation library options
      -  [OpenLayers](https://www.npmjs.com/package/ol)
      -  [rlayers](https://www.npmjs.com/package/rlayers)
      -  [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
-  [ ] Create calendar views of upcoming events
   -  [] Create a "calendar" style view of BSides events
   -  [] Create an "agenda" style view of all BSides events
-  [ ] Verify group ownership of CDN - no single person / account points of failure
-  [ ] Determine which (if any) events are going to be migrated automatically
   -  See: Event Migration Notes
-  [ ] Convert main pages for the global organization
-  [ ] Define and utilize a style w/ navigation
   -  [x] Installed bootstrap / react-bootstrap and use components
   -  [ ] Figure out why \_variables.scss isn't being utilized
   -  [x] Pull style out of index.jsx
-  [ ] Define file naming conventions and document
-  [ ] Create documentation for adding an event to the site
   -  [x] Create an example event
   -  [x] Allow multiple pages per event+year
   -  [x] Figure out why Markdown image inclusion doesn't work
   -  [ ] Github Flavored Markdown isn't being honored, need to fix with mdx
-  [ ] Create documentation for adding global site content
-  [ ] Create "development" documentation
   -  walk through the main principles of the site generator
   -  Any code standards we want to utilize
   -  PR template
-  [ ] Create the navigation from the the frontmatter in src/global
   -  an idea on how to do it is in `src/global/contact update form.mdx`
-  [ ] Create event navigation from the frontmatter in src/events

##### Completed

-  [x] Create gh-pages publishing
-  [x] Figure out the slugify renaming of the path vs the eventName
   -  ideally we'd prefer `/events/<eventName>/<year>`
   -  References:
      -  [Gatsby File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
      -  [Slugigy used to alter eventName](https://github.com/sindresorhus/slugify)

#### Notes about the migration (may be duplication)

These files are desired for the global organization (per Jack):

### Global Files to migrate

-  [ ] Front page http://www.securitybsides.com/w/page/12194156/FrontPage
-  [ ] Event History http://www.securitybsides.com/w/page/131065302/EventHistory
-  [ ] EventHistory.html
-  [ ] Organize a BSides http://www.securitybsides.com/w/page/12194160/OrganizeALocalBSides
-  [ ] BSides Groups and Social Media http://www.securitybsides.com/w/page/138691470/Groups%20and%20Social%20Media%20page
-  [ ] History of BSides http://www.securitybsides.com/w/page/50746315/BSidesHistory
-  [ ] What BSides Means http://www.securitybsides.com/w/page/87930010/What%20BSides%20Means
-  [ ] BSides Stories http://www.securitybsides.com/w/page/147978987/BSides%20Stories
-  [ ] CPEs http://www.securitybsides.com/w/page/65438306/CPEs
-  [ ] What is BSides http://www.securitybsides.com/w/page/12194138/BSides
-  [ ] Event Details_forsecuritybsideswiki.html
-  [ ] Event Quick Start Guide.html
-  [ ] EventRoles.html
-  [ ] FAQ.html
-  [ ] Friday FireTalk Abstracts.html
-  [ ] FrontPage.html
-  [ ] Groups and Social Media page.html
-  [ ] Guidelines.html
-  [ ] HowToGetStarted.html
-  [ ] InfoSecAndTheLaw.html
-  [ ] Media.html
-  [ ] More information.html
-  [ ] OrganizeALocalBSides.html
-  [ ] Past Events.html
-  [ ] BackChannel.html
-  [ ] SideBar.html
-  [ ] SiteMaintainers.html
-  [ ] SponsorPitch.html
-  [ ] Sponsoring.html
-  [ ] Studio-in-a-Box.html
-  [ ] Twitter and Mastodon Lists.html
-  [ ] UsingTheBSidesWiki.html
-  [ ] Videos.html
-  [ ] What BSides Means.html
-  [ ] WhatToExpect.html
-  [ ] contact update form.html

#### Event Migration notes

-  Notes for Automation

   -  [ ] Wrap all pbwiki comments in `{/* */}`
   -  [ ] Strip / Replace all `style="..."` with valid MDX (needs to be a JS object)
   -  [ ] Add frontmatter to each file
      -  automate adding values for fields`eventName`, `eventYear`
         -  this can likely come from filenames / filesystem, may also be a huge PITA
      -  automate adding value for `eventDate`
         -  this will definitely be a huge PITA

-  Events to migrate:
   -  [ ] BSidesSF (since Ricky is working on this transition he'll migrate these event pages)

## "Migration Day" tasks

DNS:

-  [ ] before TTL time frame - update DNS to lower TTL for site name to 5 mins
-  [ ] GH Verify domain
-  [ ] Create CNAME(s) in GH? CDN? Both?
-  [ ] Update CNAME(s) in DNS
-  [ ] Verify changes have taken affect
-  [ ] return TTL to normal operating size

Site:

-  [ ] Verify proper publishing of site via GH and CDN (Cloudflare?)
-  [ ] monitor for outage

Community:

-  [ ] Make any necessary announcements pre-flip
-  [ ] Make announcement at flip
-  [ ] Make post-flip

## Additions (not needed for migration)

-  [ ] Internationalization of the full site
-  [ ] Determine approval team for PRs (may be the migration team + others)
-  [ ] PR and Build/Deploy messages to Slack
-  [ ] Create a page to show `src/events` md{x} files and the results of a set of checks on them to help events debug issues with their pages
