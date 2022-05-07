import React, { Component } from "react";
import editIcon from '../images/edit-svgrepo-com.svg';
import '../styles/GeneralInfo.css';
import uniqid from 'uniqid';

class GeneralInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      generalInfo: [
        {
          fieldName: 'Name',
          fieldValue: 'Jacob Gipsz',
          id: uniqid()
        },
        {
          fieldName: 'E-mail',
          fieldValue: 'jack.gipsz@example.com',
          id: uniqid()
        },
        {
          fieldName: 'Phone Number',
          fieldValue: '+36234568945',
          id: uniqid()
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>General Info
          <button>
            <img className="edit-img" src={editIcon} alt='Edit icon' />
          </button>
        </ul>
        {this.state.generalInfo.map((info) => {
          return <li key={info.id}>{info.fieldName}: {info.fieldValue}</li>
        })}
      </div>
    )
  }
}

export default GeneralInfo