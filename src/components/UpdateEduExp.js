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

    if (e.target.className === 'submit-study-btn') {
      const updatedStudy = {
        schoolName: this.state.nameOfSchool,
        titleOfStudy: this.state.titleOfStudy,
        dateOfStudy: {
          start: this.state.startDate,
          end: this.state.endDate,
        },
      };

      this.props.updateStudy(updatedStudy);
    } else {
      this.props.updateStudy(false);
    }

    this.props.hideForm();
  };

  render() {
    return (
      <form className="educational-experience-form">
        <legend>
          Edit educational experience
          <span className="required-text">*required</span>
        </legend>
        <div className="school-name">
          <label>
            <div>Name of school*</div>

            <input
              type="text"
              id="schoolName"
              required
              defaultValue={this.state.nameOfSchool}
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
        <div className="btn-container">
          <button className="submit-study-btn" onClick={this.submitStudies}>
            Update
          </button>
          <button className="delete-study-btn" onClick={this.submitStudies}>
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default UpdateEduExp;
