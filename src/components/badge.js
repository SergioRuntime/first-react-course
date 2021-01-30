import React from "react";

import "./styles/styles.css";
import confLogo from "../images/logo-website-cropped-website-logo-header-vreference-29.png"; // En el inspect de Google, si lo inspecionamos con React, en el nombre de la imagen nos aparece un número, es el HASH.

class Badge extends React.Component {
  render() {

    return (
      <div className="badge">
        <div className="badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge__section-name">
            <img className="badge__avatar" src={this.props.avatarUrl} alt="Avatar"></img>
          <h1>
            {this.props.firstName}  
          <br />
            {this.props.lastName}
          </h1> 
        </div>
        <div className="badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.twitter}</div>
        </div>
        <div className="badge__footer">
           #PractiseREACT
        </div>
      </div>
    );
  }
}

export default Badge;

// Comentario en JSX --> /* ........ */
// Comentario en Javascript --> //


//POSIBLE SOLUCIÓN PARA NO ESCRIBIR TANTAS VECES "this.props..."

/* POSIBLE PREGUNTA DAVID 

Hmmmm… Si y no, porque estás construyendo un objeto dentro de una clase 
y no le estás definiendo el constructor a Badge. por ende, cuando el componente 
Badge sea hererado (por ejemplo) no podrás hacer usos de sus propiedades (usando super), 
entonces tendrías que definir las propiedades de esa nueva clase.

/*
class Badge extends React.Component {
  render() {
    const {
	firstName,
	lastName,
	avatarUrl,
	jobTitle,
	twitter
    } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={avatarUrl}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
*/

// TEORIA ATRIBUTOS

/*
Lo que se conoce como atributos en HTML, se llama propiedades en JSX. 
Los atributos son los que ayudan a personalizar las etiquetas HMTL mediante cierta información adicional llamada atributo, existen diferentes tipos de atributos, como lo son:

Atributos básicos: Se pueden utilizar prácticamente en todas las etiquetas HTML. Los atributos básicos son: id, class, style y title.

Atributos para internacionalización: Son utilizados por las paginas que muestran su contenido en varios idiomas. lang, xml:lang y dir.

Atributos de eventos: Sólo se utilizan en las paginas web dinamicas en donde su hace uso de JavaScript. Algunos de estos atributos son: onchange, onclick, onfocus, onkeypress.

Atributos de focos: Relacionado principalmente con la accecibilidad de los sitios web, estoso son: accesskey, tabindex y onfocus.
*/