import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Cv from './components/CV';
import uniqid from 'uniqid';
import AddEduExp from './components/AddEduExp';

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
      showAddEduExpForm: false,
      isEduExpUpdate: false,
      editEducationId: undefined,
      eduExp: [
        {
          id: uniqid(),
          schoolName: 'University of Technology',
          titleOfStudy: 'Computer science',
          dateOfStudy: {
            start: new Date(2016, 8),
            end: new Date(2020, 5),
          },
        },
      ],
      practicalExp: [
        {
          id: uniqid(),
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

  displayAddEduExpForm = () => {
    this.setState({ showAddEduExpForm: !this.state.showAddEduExpForm });
  };

  addEduExp = (school, study, startDate, endDate) => {
    const newEduExp = {
      id: uniqid(),
      schoolName: school,
      titleOfStudy: study,
      dateOfStudy: {
        start: startDate,
        end: endDate,
      },
    };
    this.setState({ eduExp: [...this.state.eduExp, newEduExp] });
  };

  render() {
    return (
      <div className="App">
        <div className="forms">
          {this.state.showGeneralInfoForm && (
            <GeneralInfo
              name={this.state.generalInfo[0]}
              email={this.state.generalInfo[1]}
              phoneNum={this.state.generalInfo[2]}
              updateGenInfo={this.updateGenInfo}
              hideForm={this.displayGenInfoForm}
            />
          )}
          {this.state.showAddEduExpForm && (
            <AddEduExp
              addStudy={this.addEduExp}
              hideForm={this.displayAddEduExpForm}
            />
          )}
        </div>

        <Cv
          generalInfo={this.state.generalInfo}
          editGenInfo={this.displayGenInfoForm}
          eduInfo={this.state.eduExp}
          displayAddEduExpForm={this.displayAddEduExpForm}
        />
      </div>
    );
  }
}

export default App;
