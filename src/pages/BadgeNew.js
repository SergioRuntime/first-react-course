import React from "react";

import Navbar from "../components/Navbar";
import header from "../images/logo-website-cropped-website-logo-header-vreference-29.png";
import "../components/styles/Navbar.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm"; //Formulario - Enlazando eventos

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = (e) => {
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Sergio"
                lastName="Martin"
                twitter="SergioRuntime"
                jobTitle="Jr. FrontEnd"
                avatarUrl="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
