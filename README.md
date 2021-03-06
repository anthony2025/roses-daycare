![Rose's Daycare](/public/logo.png?raw=true)

[![forthebadge](http://forthebadge.com/images/badges/made-with-crayons.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

A responsive and data-driven marketing website made for Rose's Daycare LLC powered by React, Redux, Firebase, and Styled-Components.

## Table of Contents
- [Technologies](#technologies)
- [Screenshot](#screenshot)
- [Motivation](#motivation)
- [Prerequisites](#prerequisites)
- [Scripts](#scripts)

## Technologies
<div id='technologies'/>

* [React] and [React-Router] allow us to code in components, which forces us towards code reusability and design consistency.
* [Redux] plus some help from Local Storage let us hydrate and cache the page with updated content.
* [Firebase] serves us our serverless backend. Database is used as a CMS for all content, Hosting gives us SPA hosting, Storage is a CDN for all our assets, and we use Functions to notify us via email when a new question arrives.
* [Styled-Components] and [Native CSS Variables] gives us local scoped css, easy theming, conditional styling, and the power of a **CSS-in-JS** solution. Also their ThemeProvider allow us to change the theme programatically.
* The new **Flexbox** and **Grid** standards provide a fully responsive and solid layout system.
* CSS3 **Transitions** and **Animations** help us add a touch of interactivity and playfulness.
* ~~NWB babel and webpack configuration~~ moved the project to create-react-app.
* ~~CSS Modules~~ moved the project to styled-components.

## Screenshot
<div id='screenshot'/>

![Screenshot](/public/screenshot.png?raw=true)


## Motivation
<div id='motivation'/>

Rose's Daycare is a small family business. They needed a site to help them find a new client quickly when this happens.

They wanted to share contact information, a bit of story of themselves and staff, plus a way to receive email notifications when people ask questions.

The page should also serve to keep parents in the loop of what their children are up to. At the moment the News page serves as a short outlet for snippets and photos of what is going on during the week. They might need a blog extension to host more of their day to day activities :steam_locomotive::train::train::train::train::train:

## Prerequisites
<div id='prerequisites'/>

* [Node] >= 6.x.x
* [Yarn] >= 0.20.x
* [Firebase] empty NoSQL database

To setup optional features you need to change these environment variables. Either add them to .env, or create a .env.local file in the root folder of the project (recommended).
```
# Github Repo, used in fork octicat corner
REACT_APP_REPOSITORY
# Email in mailto links, used in footer
REACT_APP_DEV_EMAIL
# Sentry url for errors logging in production
REACT_APP_RAVEN_URL
# Firebase database root url, for all content
REACT_APP_DATABASE_URL
# Google Maps API Key, for contact map
REACT_APP_GAPI_KEY
```

To change the content of the project you must create a key "content" in your Firebase database with values following the structure in store/initialState.js

To setup email notifications via Firebase Functions you must have a gmail account with 2-step verification activated, then add an application password. The readme at [gmail-send] goes into more detail if you get stuck. Finally run this command in the root folder of the project to setup required environment variables.
```bash
$ firebase functions:config:set gmail.user="user@gmail.com" gmail.pass="password"
```

## Scripts
<div id='scripts'/>

This project uses [create-react-app], look at their incredible documentation if more advanced configuration is needed.
* `$ yarn install` in the app's root directory will install all the necessary dependencies.
* `$ yarn start` will run the app's development server.
* `$ yarn build` creates an optimized production build.
* `$ yarn test` will run Jest in watch mode.
* `$ yarn deploy` will build and deploy to firebase, including functions.
* `$ yarn analyse` will show a size visualization of our production bundle.
* `$ yarn format` will run Prettier on the whole codebase.

[react-modal-dialog]: https://github.com/qimingweng/react-modal-dialog
[gmail-send]: https://github.com/alykoshin/gmail-send
[react]: https://github.com/facebook/react
[redux]: https://github.com/reactjs/redux
[zapier]: https://zapier.com/
[create-react-app]: https://github.com/facebookincubator/create-react-app
[react-router]: https://github.com/ReactTraining/react-router
[nwb]: https://github.com/insin/nwb
[firebase]: https://firebase.google.com/docs/reference/rest/database/
[styled-components]: https://github.com/styled-components/styled-components/
[Native CSS Variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
