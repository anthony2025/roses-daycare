![Rose's Daycare](/public/logo.png?raw=true)

[![forthebadge](http://forthebadge.com/images/badges/made-with-crayons.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

A responsive and data-driven marketing website made for Rose's Daycare LLC powered by React, Redux and Styled-Components. The site is live at: [https://rosesdaycare.center](https://rosesdaycare.center)

## Table of Contents
- [Technologies](#technologies)
- [Screenshot](#screenshot)
- [Motivation](#motivation)
- [Future](#future)
- [Prerequisites](#prerequisites)
- [Development](#development)
- [License](#license)

## Technologies
<div id='technologies'/>

* [React] and [React-Router] allow us to code in components, which forces us towards code reusability and design consistency.
* [Redux] plus some help from Local Storage let us hydrate and cache the page with updated content.
* [Firebase] and [Zapier] gives us serverless backend solutions. Firebase is used as a very minimal CMS until a more complex solution is needed, as well as for SPA hosting. We use Zapier with a webhook to notify us via email when a new question arrives.
* [Styled-Components] and [Native CSS Variables] gives us local scoped css, easy theming, conditional styling, and all the power of a **CSS-in-JS** solution.
* The new **Flexbox** and **Grid** standards provide a fully responsive and consistent layout system.
* CSS3 **Transitions** and **Animations** help us add a touch of interactivity and playfulness. It's a kids business after all.
* ~~NWB babel and webpack configuration~~ moved the project to create-react-app.
* ~~CSS Modules~~ moved the project to styled-components.

## Screenshot
<div id='screenshot'/>

![Screenshot](/public/screenshot.png?raw=true)


## Motivation
<div id='motivation'/>

Rose's daycare is an small family business but from time to time one of their little rascals goes away. They needed a site to help them find a new client quickly when this happens.

They wanted to share contact information, a bit of story of themselves and staff, plus a way for people to ask questions with email notifications.

The page should also serve to keep parents in the loop of what their children are up to. At the moment the News page serves as a short outlet for snippets and photos of what is going on during the week. An addition of a more involved blog is planned.

## Future
<div id='future'/>

The blog extension is expected for next year, to host more of their day to day activities :steam_locomotive::train::train::train::train::train: This will require a more robust CMS solution and refactoring the codebase a bit. We will be working on the later until confirmed. Others smaller issues include:
* The redux store needs to be further unit tested.
* Currently modals are being handled with React component state. We might move this to Redux for the sake of organization.
* react-modal might probably be replaced with a custom made modal following [react-modal-dialog] ideas
* We will be improving the design, starting with that lazy looking contact page.


## Prerequisites
<div id='prerequisites'/>

* [Node] >= 6.x.x must be installed.
* [Yarn] >= 0.20.x must be installed.
* [Firebase] a database on the free tier.
* [Zapier] a free zap with a catch webhook (optional, for email notifications).

For the project to run the following environment variables should be available. You can either add them into .env, or create a .env.local file in the root folder of the project (recommended), following this structure:
```makefile
NODE_PATH=src/
REACT_APP_REPOSITORY=https://link_to_YOUR_project_repository.com
REACT_APP_DEV_EMAIL=yourEmail@gmail.com
REACT_APP_DATABASE_URL=https://anEmptyFirebaseDatabase.firebaseio.com/
REACT_APP_EMAIL_HOOK=https://hooks.zapier.com/hooks/catch/thisOneIsOptional/YouCanIncludeAZapierCatchHookHere/
```


## Development
<div id='development'/>

This project currently uses [create-react-app], look at their incredible documentation if more advanced configuration is needed.
* `$ yarn install` in the app's root directory will install everything needed for development.
* `$ yarn start` will run the app's development server.
* `$ yarn build` creates an optimized production build.
* `$ yarn deploy` will build and deploy to firebase (previous firebase configuration will be required).


## License
<div id='license'/>

Thanks to the generosity of the folks at Rose's, this project is dedicated to the public domain, with a CC0 license. No attribution is required and no warranties are provided: use as you wish.

The libraries used are property of their respective authors.

![cc0 badge](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)

[react-modal-dialog]: https://github.com/qimingweng/react-modal-dialog
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
