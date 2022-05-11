import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Cv from './components/CV';
import uniqid from 'uniqid';
import AddEduExp from './components/AddEduExp';
import UpdateEduExp from './components/UpdateEduExp';
import AddWorkExp from './components/AddWorkExp';
import UpdateWorkExp from './components/UpdateWorkExp';
import gitHubIcon from './images/icons8-github.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showGeneralInfoForm: true,
      generalInfo: [
        {
          fieldName: 'Name',
          fieldValue: '',
          id: uniqid(),
        },
        {
          fieldName: 'E-mail',
          fieldValue: '',
          id: uniqid(),
        },
        {
          fieldName: 'Phone Number',
          fieldValue: '',
          id: uniqid(),
        },
      ],
      showAddEduExpForm: true,
      isEduExpUpdate: false,
      eduExpToUpdate: {},
      eduExp: [
        {
          id: uniqid(),
          schoolName: '',
          titleOfStudy: '',
          dateOfStudy: {
            start: new Date(),
            end: new Date(),
          },
        },
      ],
      showAddWorkExpForm: true,
      isWorkExpUpdate: false,
      workToUpdate: {},
      practicalExp: [
        {
          id: uniqid(),
          companyName: '',
          position: '',
          mainTask: '',
          date: {
            start: new Date(),
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

  displayUpdateWorkExpForm = (e) => {
    this.setState({ isWorkExpUpdate: !this.state.isWorkExpUpdate });
    const workToEdit = this.getWorkExp(e.currentTarget.id)[0];
    this.setState({ workToUpdate: workToEdit });
  };

  getWorkExp = (id) => {
    return this.state.practicalExp.filter((item) => item.id === id);
  };

  updateWorkExp = (workExpInfo) => {
    const practicalExp = this.state.practicalExp;
    let updatedPracticalExp;

    if (workExpInfo) {
      workExpInfo.id = this.state.workToUpdate.id;

      updatedPracticalExp = practicalExp.map((workExp) => {
        if (workExp.id === workExpInfo.id) {
          return workExpInfo;
        } else {
          return workExp;
        }
      });
    } else {
      updatedPracticalExp = practicalExp.filter((workExp) => {
        if (workExp.id !== this.state.workToUpdate.id) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.setState({ practicalExp: updatedPracticalExp });
  };

  hideWorkForm = () => {
    this.setState({ isWorkExpUpdate: !this.state.isWorkExpUpdate });
    this.setState({ workToUpdate: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="app-name">Create you CV</div>
        </header>

        <div className="app-content">
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
            {this.state.isWorkExpUpdate && (
              <UpdateWorkExp
                companyName={this.state.workToUpdate.companyName}
                position={this.state.workToUpdate.position}
                mainTask={this.state.workToUpdate.mainTask}
                date={this.state.workToUpdate.date}
                updateWork={this.updateWorkExp}
                hideForm={this.hideWorkForm}
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
            displayUpdateWorkForm={this.displayUpdateWorkExpForm}
          />
        </div>

        <footer className="footer-container">
          by
          <a className="github-link" href="https://github.com/donperger">
            DonPerger
          </a>
          <img className="github-icon" src={gitHubIcon} alt="GitHub icon" />
        </footer>
      </div>
    );
  }
}

export default App;
