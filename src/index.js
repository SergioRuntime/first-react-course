// const element = document.createElement("h1");
// element.innerText = "heeey";

// const container = document.getElementById("app");

// container.appendChild(element);

//Analogo a create.Element
import React from "react";
//Analogo a appendChild
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew"; // IMPORTANTE "COMPONENTES EN MAYÚSCULAS" !!!!!!!
//import Badge from "./components/badge";

//Se llama JSX, tener html sin ser string. En cada archivo que utilicemos JSX hay que hacer el import from React.
// {} --> Esto se llama props o properties, que son los atributos en React.

/*
const jsx = <h1>Heeey!!! YO, whats up</h1>;
const element = React.createElement(
  "a",
  { href: "https://www.google.es" },
  "Ir a google.es."
);
*/

//const name = "Sergio";
// const sum = () => 2 + 2;

//Acordarse que si metemos una variable, las comillas cambian a comillas simples de lado.
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);

// {} No solo son variables si no también expresiones que se van a evaluar.
// const jsx = <h1>Hola soy, {sum()} </h1>;

// Utilización de JSX.
/*
const element = (
  <div>
    <h1>Hola, soy Sergio</h1>
    <p>Soy Jr. Front-end.</p>
  </div>
);
*/

// Lo mismo que JSX utilizando JavaScript y lo que haces es llamar a una function con argumentos, con createElement y dentro con argumentos,
// al final obtienes los mismos resultados que utilizando JSX.
/*
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola soy Sergio"),
  React.createElement("p", {}, "Soy Jr. Front-end.")
);
*/
const container = document.getElementById("root");

// ReactDOM.render(__qué__, __dónde__); <-- Pseudocodigo es como se llama para omitir seciones de codigo o para dar una explicación.
ReactDOM.render(
  /*<Badge
    firstName="Duque"
    lastName="Martin"
    jobTitle="Jr. Front-end"
    twitter="SergioRuntime"
    avatarUrl="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
  />*/
  <BadgeNew />,
  container
);

// AZÚCAR SINTÁCTICO "JSX"
/*
El azúcar sintáctico es un término acuñado por Peter J. Landin en 1964 
para referirse a la adición de un diseño de sintaxis en un lenguaje de programación 
que nos permite hacer algunas construcciones más fáciles codear, expresar y leer.
/*


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

// **************** APORTE DE LUIS CORDERO EN LA CLASE 7 PLATZI ****************

// Clase 7
//-> Lección 1
/*
import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');
ReactDOM.render(jsx, container);
*/
//-> Lección 2
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'a',
    {
        href: 'https://google.com'
    },
    'Ir a Google'
);

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 3
/*
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'luiscordero29';
const element = React.createElement(
    'h1',
    {},
    `Hola soy, ${name}`
)

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 4
/*
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'luiscordero29';
const element = <h1>Soy, {name}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 5
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>La suma de 2 + 9 = {2 + 9}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 6
/*
import React from 'react';
import ReactDOM from 'react-dom';

const sumar = () => 2 + 9;
const element = <h1>La suma de 2 + 9 = {sumar()}</h1>

const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
//-> Lección 7
/*
import React from 'react';
import ReactDOM from 'react-dom';

const jsx = (
    <div>
      <h1>Hola, soy Luis Cordero</h1>
      <p>Soy ingeniero en informática.</p>
    </div>
  );

const container = document.getElementById('app');
ReactDOM.render(jsx, container);
*/
//-> Lección 8
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Luis Cordero'),
    React.createElement('p', {}, 'Soy ingeniero en informática.')
);
const container = document.getElementById('app');
ReactDOM.render(element, container);
*/
