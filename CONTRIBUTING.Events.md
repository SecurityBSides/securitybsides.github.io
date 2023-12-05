## Event Addition(s)

[ ] ToDo: Write the details of how to add an event
[ ] ToDo: Create a method for events to have a "global" page at SecurityBSides.org/events/<Event>

## Prerequisites

1. Nodejs v. 20+

   Ideally, you should use nvm to install and switch between node versions. This repository invlies a .nvmrc to tell nvm what version of node to run

2.

#### Adding an event

See `./src/BSides Example/` if you'd like an example of a lot of what you can do.

-  Path: ./src//events/
-  SubPath: Organization
-  SubPath: Year

### Notes

-  Use nvm, and install and use the node version found in .nvmrc
-  node install to get the rest of your environment set up

### Common Problems (and their solutions)

---

#### Nothing works! It just blows up when I try to run `yarn run develop`

-  Use the right version of node. `nvm use` in the top level directory of look at .nvmrc and confirm it matches `node --version`.

---

#### I'm getting Segmentation Faults when I try to test!

> ⠙ compile gatsby files
> /var/folders/02/5mjm648d0qb9pds9vfl37xmw0000gn/T/yarn--1694998202944-0.17981192331085394/node: line 3: 69903 Segmentation fault: 11 "/Users/luwenth/.nvm/versions/node/v18.17.1/bin/node" "$@"

1. This sometimes means there are some " where there should be ```in your gatsby-config.js. Check whatever you just added before the segmentation fault started.  If you haven't touched`gatsby-config.js` then see #2.

2. For some reason, running `yarn run clean` fixes this if it's happening repeatedly.
3. I have no idea why, also running it as `yarn run devlop --verbose` also makes it work.
4. And sometimes just re-running the same command after it has been successful a couple times causes it to keep working.
