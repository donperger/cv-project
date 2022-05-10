import React, { Component } from 'react';
import editIcon from '../images/edit-svgrepo-com.svg';
import addIcon from '../images/add-svgrepo-com.svg';
import '../styles/CV.css';
import format from 'date-fns/format';

class Cv extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv">
        <div className="cv-general-info">
          <ul>
            General Info
            <button onClick={this.props.editGenInfo}>
              <img className="edit-img" src={editIcon}></img>
            </button>
            {this.props.generalInfo.map((info) => {
              return (
                <li key={info.id}>
                  {info.fieldName}: {info.fieldValue}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="edu-exp-info">
          <ul>
            Education
            <button
              className="add-btn"
              onClick={this.props.displayAddEduExpForm}
            >
              <img className="add-img" src={addIcon}></img>
            </button>
            {this.props.eduInfo.map((info) => {
              if (info.schoolName) {
                return (
                  <li key={info.id}>
                    <div className="school-name">
                      {info.schoolName}
                      <button
                        className="edit-btn"
                        id={info.id}
                        onClick={this.props.displayEditEduExpForm}
                      >
                        <img className="edit-img" src={editIcon}></img>
                      </button>
                    </div>
                    <div className="school-info">
                      <span>{info.titleOfStudy}</span>
                      {' - '}
                      <span>
                        {format(info.dateOfStudy.start, 'MMMM, y')} -
                        {format(info.dateOfStudy.end, 'MMMM, y')}
                      </span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="work-exp-info">
          <ul>
            Practical experience
            <button className="add-btn" onClick={this.props.displayAddWorkFrom}>
              <img className="add-img" src={addIcon}></img>
            </button>
            {this.props.workExp.map((workPlace) => {
              if (workPlace.companyName) {
                return (
                  <li key={workPlace.id}>
                    <div className="company-info">
                      <span className="company-name">
                        {workPlace.companyName}
                      </span>
                      {' - '}
                      <span className="positon">{workPlace.position}</span>
                      <button
                        className="edit-btn"
                        id={workPlace.id}
                        onClick={this.props.displayUpdateWorkForm}
                      >
                        <img className="edit-img" src={editIcon}></img>
                      </button>
                    </div>
                    <div className="task">{workPlace.mainTask}</div>
                    <div className="time-interval">
                      {format(workPlace.date.start, 'MMMM, y')}
                      {' - '}
                      {format(workPlace.date.end, 'MMMM, y')}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cv;
