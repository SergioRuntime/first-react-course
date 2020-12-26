// const element = document.createElement("h1");
// element.innerText = "heeey";

// const container = document.getElementById("app");

// container.appendChild(element);

//Analogo a create.Element
import React from "react";
//Analogo a appendChild
import ReactDOM from "react-dom";

const element = <h1>Heeey!!! YO, whats up</h1>;

const container = document.getElementById("root");

// ReactDOM.render(__qué__, __dónde__); <--Pseudocodigo es como se llama a comentar codigo que no se utiliza.
ReactDOM.render(element, container);










/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/