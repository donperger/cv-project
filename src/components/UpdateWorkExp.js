import React, { Component } from 'react';
import MonthPicker from './MonthPicker';

class UpdateWorkExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: this.props.companyName,
      position: this.props.position,
      mainTask: this.props.mainTask,
      date: this.props.date,
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

    if (e.target.className === 'submit-work-btn') {
      const workInfo = {
        companyName: this.state.companyName,
        position: this.state.position,
        mainTask: this.state.mainTask,
        date: this.state.date,
      };
      this.props.updateWork(workInfo);
    } else {
      this.props.updateWork(false);
    }

    this.props.hideForm();
  };

  render() {
    return (
      <form className="educational-experience-form">
        <legend>
          Edit work experience
          <span className="required-text">*required</span>
        </legend>
        <div className="company-name">
          <label>
            <div>Name of company*</div>

            <input
              type="text"
              id="comanyName"
              required
              defaultValue={this.state.companyName}
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
              defaultValue={this.state.position}
              onChange={this.updatePosition}
            />
          </label>
        </div>

        <div className="main-task">
          <label>
            <div>Main task</div>

            <input
              type="text"
              id="mainTask"
              defaultValue={this.state.mainTask}
              onChange={this.updateTask}
            />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
          startDate={this.state.date.start}
          endDate={this.state.date.end}
        />
        <div className="btn-container">
          <button
            className="submit-work-btn"
            onClick={this.submitWorkExperiance}
          >
            Update
          </button>
          <button
            className="delete-work-btn"
            onClick={this.submitWorkExperiance}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default UpdateWorkExp;
