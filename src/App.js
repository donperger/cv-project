import './App.css';
import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Cv from './components/CV';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    return (
      <div className="App">
        <GeneralInfo />
        <Cv generalInfo={this.state.generalInfo} />
      </div>
    );
  }
}

export default App;
