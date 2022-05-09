import React, { Component } from 'react';
import MonthPicker from './MonthPicker';

class UpdateEduExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfSchool: this.props.school,
      titleOfStudy: this.props.study,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
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

    const updatedStudy = {
      schoolName: this.state.nameOfSchool,
      titleOfStudy: this.state.titleOfStudy,
      dateOfStudy: {
        start: this.state.startDate,
        end: this.state.endDate,
      },
    };

    this.props.updateStudy(updatedStudy);

    this.props.hideForm();
  };

  render() {
    return (
      <form
        className="educational-experience-form"
        onSubmit={this.submitStudies}
      >
        <legend>Edit educational experience</legend>
        <div className="school-name">
          <label>
            Name of school
            <input
              type="text"
              id="schoolName"
              defaultValue={this.state.nameOfSchool}
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
              defaultValue={this.state.titleOfStudy}
              onChange={this.updateTitleOfStudy}
            />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
        />
        <div className="study-date"></div>
        <button className="submit-study-btn">Update study</button>
      </form>
    );
  }
}

export default UpdateEduExp;
