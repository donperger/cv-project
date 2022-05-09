import React, { Component } from 'react';
import MonthPicker from './DatePicker';

class AddEduExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfSchool: '',
      titleOfStudy: '',
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  updateSchoolName = (e) => {
    this.setState({ nameOfSchool: e.target.value });
  };

  updateTitleOfStudy = (e) => {
    this.setState({ titleOfStudy: e.target.value });
  };

  setStartDate = (date) => {
    this.setState({ startDate: date });
  };

  setEndDate = (date) => {
    this.setState({ endDate: date });
  };

  submitStudies = (e) => {
    e.preventDefault();
    if (!this.props.isUpdate) {
      this.props.addStudy(
        this.state.nameOfSchool,
        this.state.titleOfStudy,
        this.state.startDate,
        this.state.endDate
      );
    }
    this.props.hideForm();
  };

  render() {
    return (
      <form
        className="educational-experience-form"
        onSubmit={this.submitStudies}
      >
        <legend>Educational experience</legend>
        <div className="school-name">
          <label>
            Name of school
            <input
              type="text"
              id="schoolName"
              onChange={this.updateSchoolName}
            />
          </label>
        </div>

        <div className="study-name">
          <label>
            Title of study
            <input
              type="text"
              id="titleOfStudy"
              onChange={this.updateTitleOfStudy}
            />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
        />
        <div className="study-date"></div>
        <button className="submit-study-btn">Add study</button>
      </form>
    );
  }
}

export default AddEduExp;
