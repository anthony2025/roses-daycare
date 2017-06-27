## What is this?
A responsive marketing website made for Rose's Daycare LLC powered by React, Redux and Styled-Components.


## Where is the site?
The site is live at: [https://rosesdaycare.center](https://rosesdaycare.center)

![Screenshot](/public/screenshot.png?raw=true)

## What technologies are used?
* [React] and [react-router] allow us to code in components, which forces us towards code reusability and design consistency.
* The new **Flexbox** and **Grid** specifications provide a consistent and solid layout system.
* CSS3 **Transitions** and **Animations** provide a touch of interactivity and playfulness.
* [Styled-Components] and [Native CSS Variables] gives us encapsulation, conditional styling, and all the power of a **CSS-in-JS** solution.
* [Firebase] and [Zapier] gives us serverless backend solutions. [Firebase] is used as a very minimal CMS until a more complex solution is needed, as well as for SPA hosting. We use [Zapier] with a webhook to notify us via email when a new question arrives.
* ~~NWB boilerplate~~ moved the whole project to create-react-app.
* ~~CSS Modules~~ moved the whole project to styled-components.

## Why was all this needed?
Rose's daycare is an small company
* To further marketing efforts and have
* To handle ocassional questions from possible future clients.
* To have an outlet for short articles, photos, and snippets of what is going on during the week.

## Where will this go?
A blog extension is expected in the next year, all those daily stories with the kids gotta go somewhere! This will require a more robust CMS solution and refactoring the codebase a bit. We will be working on the later until confirmed. Others smaller issues include:
* Currently modals are being handled with React component state. We might move this to Redux for the sake of organization.
* react-modal will probably be replaced with a custom made modal following [react-modal-dialog] ideas
* We will be changing the design, starting with that lazy contact page.

## Prerequisites
* [Node] >= 6.x.x must be installed.
* [Yarn] >= 0.20.x must be installed.
<br />
<br />
* [Firebase] a database on the free tier (if you are making your own version).
* [Zapier] a free zap with a catch webhook (if you are making your own version).

For the project to run a file named '.env' should be created in the root folder of the project, with the following structure:
```bash
REPOSITORY=https://link_to_YOUR_project_repository.com
DATABASE_URL=https://anEmptyFirebaseDatabase.firebaseio.com/
EMAIL_HOOK=https://hooks.zapier.com/hooks/catch/youCanIncludeAZapierCatchHookHere/
DEV_EMAIL=yourEmail@gmail.com

```

## Development
This project currently uses [create-react-app], look at their incredible documentation for more details.
* `$ yarn install` in the app's root directory will install everything needed for development.
* `$ yarn start` will run the app's development server.
* `$ yarn build` creates an optimized production build.
* `$ yarn deploy` will build and deploy to firebase (previous [firebase] configuration will be required).

## License
Thanks to the great folks at Rose's, this project is dedicated to the public domain, with a CC0 license. No attribution is required and no warranties are provided: use as you wish.

The libraries used are property of their respective authors.

[react-modal-dialog]: https://github.com/qimingweng/react-modal-dialog
[react]: https://github.com/facebook/react
[zapier]: https://zapier.com/
[create-react-app]: https://github.com/facebookincubator/create-react-app
[react-router]: https://github.com/ReactTraining/react-router
[nwb]: https://github.com/insin/nwb
[firebase]: https://firebase.google.com/docs/reference/rest/database/
[styled-components]: https://github.com/styled-components/styled-components/
[Native CSS Variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[node]: http://nodejs.org/
[yarn]: http://yarnpkg.com/
