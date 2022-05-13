import React, { Component } from 'react';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name.fieldValue,
      email: this.props.email.fieldValue,
      phone: this.props.phoneNum.fieldValue,
    };
  }

  handleChange = (e) => {
    if (e.target.id === 'name') {
      this.setState({ name: e.target.value });
      if (e.target.validity.valueMissing) {
        e.target.classList.add('invalid-field');
      } else {
        e.target.classList.remove('invalid-field');
      }
    } else if (e.target.id === 'email') {
      this.setState({
        email: e.target.value,
      });
      if (e.target.validity.typeMismatch || e.target.validity.valueMissing) {
        e.target.classList.add('invalid-field');
      } else {
        e.target.classList.remove('invalid-field');
      }
    } else if (e.target.id === 'phone') {
      this.setState({
        phone: e.target.value,
      });
    }
  };

  updateInfo = (e) => {
    e.preventDefault();
    this.props.updateGenInfo(
      this.state.name,
      this.state.email,
      this.state.phone
    );
    this.props.hideForm();
  };

  render() {
    const { name, email, phoneNum } = this.props;

    return (
      <form className="general-info-form" onSubmit={this.updateInfo}>
        <legend>
          General information
          <span className="required-text">*required</span>
        </legend>

        <div className="name-cont">
          <label>
            <div>Name*</div>
            <input
              type="text"
              id="name"
              required
              placeholder="John"
              defaultValue={name.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="email-cont">
          <label>
            <div>E-mail*</div>
            <input
              type="email"
              id="email"
              required
              placeholder="john.doe@example.com"
              defaultValue={email.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="phone-cont">
          <label>
            <div>Phone Number</div>
            <input
              type="text"
              id="phone"
              placeholder="+36117045896"
              defaultValue={phoneNum.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button>Update</button>
      </form>
    );
  }
}

export default GeneralInfo;
