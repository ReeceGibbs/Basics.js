import React from 'react';
import ReactDOM from 'react-dom'; // this is recommended 
import App from './components/App/App';

//here we plug our main app component into the root element of our DOM
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);