import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Cv from './components/CV';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showGeneralInfoForm: false,
      generalInfo: [
        {
          fieldName: 'Name',
          fieldValue: 'Jacob Gipsz',
          id: uniqid(),
        },
        {
          fieldName: 'E-mail',
          fieldValue: 'jack.gipsz@example.com',
          id: uniqid(),
        },
        {
          fieldName: 'Phone Number',
          fieldValue: '+36234568945',
          id: uniqid(),
        },
      ],
      eduExp: [
        {
          schoolName: 'University of Technology',
          titleOfStudy: 'Computer science',
          dateOfStudy: {
            start: new Date(2016, 9),
            end: new Date(2020, 6),
          },
        },
      ],
      practicalExp: [
        {
          companyName: 'IT Giants',
          position: 'Junior web developer',
          mainTask: 'Create new web applications',
          date: {
            start: new Date(2020, 8),
            end: new Date(),
          },
        },
      ],
    };
  }

  displayGenInfoForm = () => {
    this.setState({ showGeneralInfoForm: !this.state.showGeneralInfoForm });
  };

  updateGenInfo = (name, email, phoneNum) => {
    this.setState({
      generalInfo: [
        {
          fieldName: 'Name',
          fieldValue: name,
          id: this.state.generalInfo[0].id,
        },
        {
          fieldName: 'E-mail',
          fieldValue: email,
          id: this.state.generalInfo[1].id,
        },
        {
          fieldName: 'Phone Number',
          fieldValue: phoneNum,
          id: this.state.generalInfo[2].id,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showGeneralInfoForm && (
          <GeneralInfo
            name={this.state.generalInfo[0]}
            email={this.state.generalInfo[1]}
            phoneNum={this.state.generalInfo[2]}
            updateGenInfo={this.updateGenInfo}
            hideForm={this.displayGenInfoForm}
          />
        )}
        <Cv
          generalInfo={this.state.generalInfo}
          editGenInfo={this.displayGenInfoForm}
        />
      </div>
    );
  }
}

export default App;
