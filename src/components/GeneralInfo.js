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
    } else if (e.target.id === 'email') {
      this.setState({
        email: e.target.value,
      });
      console.log(e.target.value);
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
  };

  render() {
    const { name, email, phoneNum } = this.props;

    return (
      <form className="general-info-form" onSubmit={this.updateInfo}>
        <legend>General information</legend>
        <div className="name-cont">
          <label>
            Name
            <input
              type="text"
              id="name"
              defaultValue={name.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="email-cont">
          <label>
            E-mail
            <input
              type="text"
              id="email"
              defaultValue={email.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="phone-cont">
          <label>
            Phone Number
            <input
              type="text"
              id="phone"
              defaultValue={phoneNum.fieldValue}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button>Add</button>
      </form>
    );
  }
}

export default GeneralInfo;
