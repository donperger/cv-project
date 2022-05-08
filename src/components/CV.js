import React, { Component } from 'react';
import editIcon from '../images/edit-svgrepo-com.svg';
import '../styles/CV.css';

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
      </div>
    );
  }
}

export default Cv;
