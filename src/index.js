/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import './index.css';
import Page from './Page';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';
import AwsCerts from './AwsCerts';
import React from "react"
import ReactDOM from "react-dom"

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/



const certs = ['/aws-prac.png', '/aws-dev.png']; // Paths to the images in the public folder

ReactDOM.render(<AwsCerts certs={certs} />, document.getElementById('AWSCerts'));
ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.render(<Resume />, document.getElementById("Resume"))
// AWSCerts