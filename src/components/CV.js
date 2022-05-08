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
          </ul>
          {this.props.generalInfo.map((info) => {
            return (
              <li key={info.id}>
                {info.fieldName}: {info.fieldValue}
              </li>
            );
          })}
        </div>

        <div className="edu-exp-info">
          <ul>
            Education
            <button>
              <img className="add-img" src={addIcon}></img>
            </button>
          </ul>
          {this.props.eduInfo.map((info) => {
            return (
              <li key={info.id}>
                <div className="school-name">
                  {info.schoolName}
                  <button>
                    <img className="edit-img" src={editIcon}></img>
                  </button>
                </div>
                <div className="school-info">
                  <span>{info.titleOfStudy}</span>
                  <span>
                    {format(info.dateOfStudy.start, 'MMMM, y')} -
                    {format(info.dateOfStudy.end, 'MMMM, y')}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cv;
