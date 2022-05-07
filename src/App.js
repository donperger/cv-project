import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      generalInfo: {
        name: 'Jacob Gipsz',
        email: 'jack.gipsz@example.com',
        phoneNumber: '+36234568945'
      },
      eduExp: [{
        schoolName: 'University of Technology',
        titleOfStudy: 'Computer science',
        dateOfStudy: {
          start: new Date(2016, 9),
          end: new Date(2020, 6)
        }
      }],
      practicalExp: [{
        companyName: 'IT Giants',
        position: 'Junior web developer',
        mainTask: 'Create new web applications',
        date: {
          start: new Date(2020, 8),
          end: new Date()
        }
      }]
    }
  }

  render() {
    return (
      <div className="App">
        Hello from App!
      </div>
    );
  }
}


export default App;
