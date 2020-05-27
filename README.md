# react-boilerplate

A React.js boilerplate template based on `create-react-app`, with a usable file structure and added functionality.

**_You can use this template to create a new repo and project, rather than traditional forking._**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Most of the original content on this page is obviously from the `create-react-app` `README`. Over time it will likely morph to contain info more relevant to this project, so please refer to the original as well.

## Additions

The good thing about a boilerplate is you get extra functionality that you don't get right away from `create-react-app`. I use this boilerplate for the foundation of my projects, so as I build onto them, I come back and add things to this boilerplate. That means with this boilerplate you get extra packages and features I find myself using the majority of the time.

### Pages

While `create-react-app` uses a single component, this boilerplate imports pages into the `App` component to allow multiple pages easily. It includes a `Home` (displays as the `App` component of `cra`) and a `NotFound` 404 page.

### Code Splitting (Lazy Loading)

`create-react-app` supports code splitting, this boilerplate implements it, via the `Pages/index.js`. Code splitting allows you to break your app into smaller pieces of what would normally be a single chunk. This improves overall app performance.

### Suspense Fallback (Loading)

While a chunk is loading, a loading component displays to prevent static time before page loads. There is also a separate `Loading` component that can be used while data is loading.

### Redux

Some pieces of `react-redux` are implemented, but not used by default. In the future I may remove those pieces and offer a separate `react-redux-boilerplate`. I've left it included for now.

### SASS

Styling is implemented with SASS, using the `index.scss` and `/sass` folder. It's imported into the main `index.js` file.

### Bootstrap / Bootswatch

Implements Boostrap by using the `react-bootstrap` and `bootstrap` packages. The `bootswatch` package is also inlcuded and used by default.

### Fontawesome

Icons are loaded using a library in `icons.js`

### Header / Footer

`Header` and `Footer` components are provided and used by default.

### Breadcrumbs

A `Breadcrumbs` component is provided, by not used by default. It allows a standardized breadcrumb to be used across pages.

## Tests (or lack there of)

When I started this boilerplate I created tests, but it changed so often I removed them. It is slowly maturing now, so I will create all of the tests in the near future. The only thing holding me back for now is deciding if I want to break this out into a separate `react-redux-boilerplate` project. A universal boilerplate is difficult to maintain and tends to lead to removing a lot of unused features when someone actually uses it. I am leading toward making this template for static sites and a separate template for sites that require `Redux`.

## .env Variables

- This project has changed the PORT environment variable to `3006`.
- REACT_APP_HTML_TITLE sets the HTML `<title>` tag (using Helmet).
  - Note: In development mode (`npm start`), the server has to be restarted for this to take effect.
- See [here](https://create-react-app.dev/docs/advanced-configuration) and [here](https://create-react-app.dev/docs/adding-custom-environment-variables) for more details regarding .env variables and usage.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
