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
  };

  updatePosition = (e) => {
    this.setState({ position: e.target.value });
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
      comanyName: this.state.comanyName,
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
        <legend>Add work experiance</legend>
        <div className="company-name">
          <label>
            Name of company
            <input
              type="text"
              id="comanyName"
              onChange={this.updateCompanyName}
            />
          </label>
        </div>

        <div className="job-title">
          <label>
            Position
            <input type="text" id="position" onChange={this.updatePosition} />
          </label>
        </div>

        <div className="main-task">
          <label>
            Main task
            <input type="text" id="mainTask" onChange={this.updateTask} />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
        />
        <div className="study-date"></div>
        <button
          className="submit-study-btn"
          onClick={this.submitWorkExperiance}
        >
          Add practical experiance
        </button>
      </form>
    );
  }
}

export default AddWorkExp;
