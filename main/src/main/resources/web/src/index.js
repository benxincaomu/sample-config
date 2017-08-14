import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import registerServiceWorker from './registerServiceWorker';
import './index.css'
ReactDOM.render(
   <Main/>
    , document.getElementById('root'));
registerServiceWorker();