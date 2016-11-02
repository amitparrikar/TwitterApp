# Twitter Application

#### Introduction
##### This is a Twitter application which lists the tweets from the accounts which are configured.
Some of the App features are:

    - Filter panel to set the Tweet count, Date filters, Theme selector, Add/Delete Twitter ScreenNames.
    - Drag and Reorder list columns to new position.
    - Use of LocalStorage to save settings.
    - Mobile first approach.
    - Material Design CSS.
    - Select dropdown to navigate to the list.


#### Technologies used
    - Angular 2
    - Typescript
    - ES6
    - NodeJS
    - Material Design
    - JQuery
    - HTML5
    - Angular CLI
    - Webpack
    - ExpressJS

#### Application Installation:
##### Go to `server/config/config.js` file and set the `twitterConfig: { }` object with your Twitter Secret Keys
##### Project setup
```sh
    Install Nodejs v6.9.1LTS
    $ npm install -g angular-cli
    $ npm install -g webpack
    $ git clone https://github.com/amitparrikar/TwitterApp.git `or download zip https://github.com/amitparrikar/TwitterApp/archive/master.zip`
    $ cd TwitterApp
    $ npm run setup
```
##### To run application in development mode:
```sh
    $ npm run build-dev
    $ npm start
    Navigate to http://localhost:4000
```
##### To run application in production mode:
```sh
    $ npm run build-prod
    $ npm start
    Navigate to http://localhost:4000
```


###### The App was build on Mac. Windows user please watchout!