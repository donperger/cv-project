import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Cv from './components/CV';
import uniqid from 'uniqid';
import AddEduExp from './components/AddEduExp';
import UpdateEduExp from './components/UpdateEduExp';
import AddWorkExp from './components/AddWorkExp';

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
      eduExpToUpdate: {},
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
      showAddWorkExpForm: false,
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

  displayEditEduExpForm = (e) => {
    this.setState({ isEduExpUpdate: !this.state.isEduExpUpdate });
    const eduToEdit = this.getEduExp(e.currentTarget.id)[0];
    this.setState({ eduExpToUpdate: eduToEdit });
  };

  hideEditEduExpForm = () => {
    this.setState({ isEduExpUpdate: !this.state.isEduExpUpdate });
    this.setState({ eduExpToUpdate: '' });
  };

  getEduExp = (id) => {
    return this.state.eduExp.filter((item) => item.id === id);
  };

  updadateEduExp = (eduInfo) => {
    const eduExpArray = this.state.eduExp;
    let updatedExoEduArray;

    if (eduInfo) {
      eduInfo.id = this.state.eduExpToUpdate.id;

      updatedExoEduArray = eduExpArray.map((eduExp) => {
        if (eduExp.id === this.state.eduExpToUpdate.id) {
          return eduInfo;
        } else {
          return eduExp;
        }
      });
    } else {
      updatedExoEduArray = eduExpArray.filter((eduExp) => {
        if (eduExp.id !== this.state.eduExpToUpdate.id) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.setState({ eduExp: updatedExoEduArray });
  };

  displayAddWorkForm = () => {
    this.setState({ showAddWorkExpForm: !this.state.showAddWorkExpForm });
  };

  addWork = (workExpInfo) => {
    workExpInfo.id = uniqid();
    this.setState({ practicalExp: [...this.state.practicalExp, workExpInfo] });
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
          {this.state.isEduExpUpdate && (
            <UpdateEduExp
              school={this.state.eduExpToUpdate.schoolName}
              study={this.state.eduExpToUpdate.titleOfStudy}
              startDate={this.state.eduExpToUpdate.dateOfStudy.start}
              endDate={this.state.eduExpToUpdate.dateOfStudy.end}
              updateStudy={this.updadateEduExp}
              hideForm={this.hideEditEduExpForm}
            />
          )}
          {this.state.showAddWorkExpForm && (
            <AddWorkExp
              addWork={this.addWork}
              hideForm={this.displayAddWorkForm}
            />
          )}
        </div>

        <Cv
          generalInfo={this.state.generalInfo}
          editGenInfo={this.displayGenInfoForm}
          eduInfo={this.state.eduExp}
          displayAddEduExpForm={this.displayAddEduExpForm}
          displayEditEduExpForm={this.displayEditEduExpForm}
          workExp={this.state.practicalExp}
          displayAddWorkFrom={this.displayAddWorkForm}
        />
      </div>
    );
  }
}

export default App;
