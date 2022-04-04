# React SPA Starter

A React SPA with all the cool things you need.

To scaffold this project I used [Vite](https://vitejs.dev/).

You can check out a production build of the template in [here](https://awesome-thompson-832865.netlify.app/), in case you want to test it before using it.

## Setup
First of all, make a copy of this project by clicking on **"Use this template"**.

Now that you have your own repository, clone it and install its dependencies:
```bash
yarn install # npm install
```

If your app will make use of an external API, create a .env file:
```
cp .env.example .env.local
```
and add its base url.

Finally, run your app:
```bash
yarn dev # npm run dev
```
and visit http://localhost:3000 (you can change the port by adding the `PORT` variable to your .env file).

## Tools and packages
This template comes with different tools that you will definetly love:
* [Cypress](https://www.cypress.io/) to develop end to end tests.
* [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) to check for syntax errors and enforce a common code style.
* [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) to facilitate forms management and validation.
* [Material UI](https://mui.com/) to be able to use some awesome predesigned components and an incredible design system.
* [React Router](https://reactrouter.com/) to navigate through different components.
* [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
* [Redux persist](https://github.com/rt2zz/redux-persist) to persist state managed by redux.
* [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) to make API requests (I know this is included with Redux Toolkit, but it's such and amazing tool, that I had to give it its own mention).

## Deploy
To facilitate the deploying process, you can use [Netlify](https://www.netlify.com/). For this a **\_redirects** file has already been added to the **public** directory.

If you use this tool, not only every commit to the master branch will automatically be deployed, but also a deploy preview will be created with every pull request that you create.

## CI
This project is configured with [GitHub Actions](https://github.com/features/actions) so that each pull request is checked for eslint offenses and to run the tests.
