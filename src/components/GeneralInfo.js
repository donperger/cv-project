/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="general-info-form">
        <legend>General information</legend>
        <div className="name-cont">
          <label>
            Name
            <input type="text" id="name" />
          </label>
        </div>

        <div className="email-cont">
          <label>
            E-mail
            <input type="text" id="email" />
          </label>
        </div>

        <div className="phone-cont">
          <label>
            Phone Number
            <input type="text" id="phone" />
          </label>
        </div>

        <button>Add info</button>
      </form>
    );
  }
}

export default GeneralInfo;
