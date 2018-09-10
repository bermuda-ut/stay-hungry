import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import logo from './sanmu.svg';
import './App.css';

import SummaryCards from '../SummaryCards/SummaryCards';
import WorkExperience from '../WorkExperience/WorkExperience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="App-logo">
          fucking logo plz {logo}
        </p>
        </header>

        <h1>
          Max Lee<br/>
          <small>IoT Software Engineer at Bosch</small><br/>
          <small>Tutor at the University of Melbourne</small>
        </h1>

        <h1>Summary</h1>
        <SummaryCards/>

        <h1>WorkExperience</h1>
        <WorkExperience/>
      </div>
    );
  }
}

export default App;
