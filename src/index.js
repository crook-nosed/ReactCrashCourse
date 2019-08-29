// This index.js file serves as the entry point to our app
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css' we removed index.css;
import App from './App';
// import * as serviceWorker from './serviceWorker';

// Here we are telling the app component to render at the place which has id root that is our div element in the index.html file.
// This App component loaded is App.js so head over there..
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); service worker are for pwa and offline content so we dont need that
