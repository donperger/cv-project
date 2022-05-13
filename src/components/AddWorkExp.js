import React, { Component } from 'react';
import MonthPicker from './MonthPicker';

class AddWorkExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      position: '',
      mainTask: '',
      date: {
        start: new Date(),
        end: new Date(),
      },
    };
  }

  updateCompanyName = (e) => {
    this.setState({ companyName: e.target.value });
    if (e.target.validity.valueMissing) {
      e.target.classList.add('invalid-field');
    } else {
      e.target.classList.remove('invalid-field');
    }
  };

  updatePosition = (e) => {
    this.setState({ position: e.target.value });
    if (e.target.validity.valueMissing) {
      e.target.classList.add('invalid-field');
    } else {
      e.target.classList.remove('invalid-field');
    }
  };

  updateTask = (e) => {
    this.setState({ mainTask: e.target.value });
  };

  setStartDate = (date) => {
    this.setState({
      date: {
        start: date,
        end: this.state.date.end,
      },
    });
  };

  setEndDate = (date) => {
    this.setState({
      date: {
        start: this.state.date.start,
        end: date,
      },
    });
  };

  submitWorkExperiance = (e) => {
    e.preventDefault();

    const workInfo = {
      companyName: this.state.companyName,
      position: this.state.position,
      mainTask: this.state.mainTask,
      date: this.state.date,
    };
    this.props.addWork(workInfo);

    this.props.hideForm();
  };

  render() {
    return (
      <form className="educational-experience-form">
        <legend>
          Add work experiance
          <span className="required-text">*required</span>
        </legend>
        <div className="company-name">
          <label>
            <div>Name of company*</div>

            <input
              type="text"
              id="comanyName"
              required
              onChange={this.updateCompanyName}
            />
          </label>
        </div>

        <div className="job-title">
          <label>
            <div>Position*</div>

            <input
              type="text"
              id="position"
              required
              onChange={this.updatePosition}
            />
          </label>
        </div>

        <div className="main-task">
          <label>
            <div>Main task</div>

            <input type="text" id="mainTask" onChange={this.updateTask} />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
        />
        <button className="add-study-btn" onClick={this.submitWorkExperiance}>
          Add practical experiance
        </button>
      </form>
    );
  }
}

export default AddWorkExp;
