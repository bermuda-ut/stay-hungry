import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import logo from './sanmu.svg';
import './Resume.css';

import SummaryCards from '../SummaryCards/SummaryCards';
import WorkExperience from '../WorkExperience/WorkExperience';
import StartupExperience from '../StartupExperience/StartupExperience';
import HackatonAwards from '../HackatonAwards/HackatonAwards';
import ProgrammingExperience from '../ProgrammingExperience/ProgrammingExperience';
import EducationAwards from '../EducationAwards/EducationAwards';
import OtherAwards from '../OtherAwards/OtherAwards';

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

        <h1>Work History</h1>
        <WorkExperience/>

        <h1>Startup Experience</h1>
        <StartupExperience/>

        <h1>Programming and Frameworks</h1>
        <ProgrammingExperience/>

        <h1>Hackaton Achivements</h1>
        <HackatonAwards/>

        <h1>Education and Awards</h1>
        <EducationAwards/>

        <h1>Other Awards</h1>
        <OtherAwards/>
      </div>
    );
  }
}

export default App;
