import React, { Component } from 'react';
import MonthPicker from './MonthPicker';

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
    if (e.target.validity.valueMissing) {
      e.target.classList.add('invalid-field');
    } else {
      e.target.classList.remove('invalid-field');
    }
  };

  updateTitleOfStudy = (e) => {
    this.setState({ titleOfStudy: e.target.value });
    if (e.target.validity.valueMissing) {
      e.target.classList.add('invalid-field');
    } else {
      e.target.classList.remove('invalid-field');
    }
  };

  setStartDate = (date) => {
    this.setState({ startDate: date });
  };

  setEndDate = (date) => {
    this.setState({ endDate: date });
  };

  submitStudies = (e) => {
    e.preventDefault();
    this.props.addStudy(
      this.state.nameOfSchool,
      this.state.titleOfStudy,
      this.state.startDate,
      this.state.endDate
    );

    this.props.hideForm();
  };

  render() {
    return (
      <form
        className="educational-experience-form"
        onSubmit={this.submitStudies}
      >
        <legend>
          Add educational experience
          <span className="required-text">*required</span>
        </legend>
        <div className="school-name">
          <label>
            <div>Name of school*</div>

            <input
              type="text"
              id="schoolName"
              required
              onChange={this.updateSchoolName}
            />
          </label>
        </div>

        <div className="study-name">
          <label>
            <div>Title of study*</div>

            <input
              type="text"
              id="titleOfStudy"
              required
              onChange={this.updateTitleOfStudy}
            />
          </label>
        </div>
        <MonthPicker
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
        />
        <button className="add-study-btn">Add study</button>
      </form>
    );
  }
}

export default AddEduExp;
