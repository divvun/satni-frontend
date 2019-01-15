# Satni.org frontend

This is a frontend for the Divvun eXist rest api.

[![Build Status](https://travis-ci.org/divvun/satni-frontend.svg?branch=master)](https://travis-ci.org/divvun/satni-frontend)

* Search queries: ```http://satni.uit.no:8080/exist/restxq/satni/search?query=<query>```
* Article queries: ```http://satni.uit.no:8080/exist/restxq/satni/article/<existing term>```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app is developed using the javascript frameworks [React](https://reactjs.org/) and [Redux](https://redux.js.org/).

Individual UI components and screens are developed using [Storybook](https://storybook.js.org).

For those new to these frameworks, these are fine starting points for

* React
  * [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
* Redux
  * [Getting started with Redux](https://egghead.io/series/getting-started-with-redux)
  * [Building react applications with idiomatic Redux](https://egghead.io/series/building-react-applications-with-idiomatic-redux)
* Storybook
  * [Storybook tutorial](https://www.learnstorybook.com/)

Install all dependencies
`npm install`

Start up the app:
`yarn start`

A browser with the app will appear, the url is http://localhost:3000

Start up the testing framework
`yarn test`

You will see the test results in the terminal window

Start up Storybook:
`yarn run storybook`

The storybook is available at http://localhost:6006

All code lives in `src`. `src/components` contains UI elements,
`src/containers` contain UI glued to Redux.

Tests are found in `*.test.js`, code that makes UI elements appear in the
storybook is found in `*.stories.js`
