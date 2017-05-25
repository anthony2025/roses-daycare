A responsive website made for Rose's Daycare LLC powered by React and CSS Modules.

## Live at
[roses-daycare.firebaseapp.com](https://roses-daycare.firebaseapp.com)

## Technologies
  * [React] and [react-router]
  * [CSS Modules][css-modules] and native CSS variables for encapsulated styles
  * Layout purely in Flexbox
  * Webpack config powered by an [nwb] boilerplate
  * [Firebase] for a serverless backend and single page hosting

![Screenshot](/public/screenshot.png?raw=true)

## Future
  * Replace react-modal with a custom made modal following [react-modal-dialog] ideas

## Prerequisites
[Node] >= 6.x.x must be installed.
<br />
[Yarn] >= 0.20.x must be installed.

## Development
- `$ yarn install` in the app's root directory will install everything needed for development.
- `$ yarn start` will run the app's development server at <http://localhost:3000> with hot module reloading.

## Production
- `$ yarn build` creates a production build by default.
   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.
- `$ yarn run clean` will delete built resources.

[react-modal-dialog]: https://github.com/qimingweng/react-modal-dialog
[react]: https://github.com/facebook/react
[react-router]: https://github.com/ReactTraining/react-router
[nwb]: https://github.com/insin/nwb
[firebase]: https://firebase.google.com/docs/reference/rest/database/
[css-modules]: https://github.com/css-modules/css-modules
[postcss-modules-values]: https://github.com/css-modules/postcss-modules-values
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
