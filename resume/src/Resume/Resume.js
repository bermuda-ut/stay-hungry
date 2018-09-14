import React, { Component } from 'react';

import './Resume.css';

import Logo from '../component/Logo';
import SummaryCards from '../SummaryCards/SummaryCards';
import WorkExperience from '../WorkExperience/WorkExperience';
import StartupExperience from '../StartupExperience/StartupExperience';
import HackatonAwards from '../HackatonAwards/HackatonAwards';
import ProgrammingExperience from '../ProgrammingExperience/ProgrammingExperience';
import EducationAwards from '../EducationAwards/EducationAwards';
import OtherAwards from '../OtherAwards/OtherAwards';

class App extends Component {
  render() {
    let style = {};
    style.summary = {
      padding: "0 10%"
    };

    return (
      <div className="App">

        <header className="App-header">
          <div className="App-logo">
            <Logo colour="white" />
          </div>
        </header>

        <div className="me">
          <h1>
            Max Lee
          </h1>
          <p>
            IoT Software Engineer at Bosch
          </p>
          <p>
            Tutor at the University of Melbourne
          </p>
        </div>

        <h1>Summary</h1>
        <div style={style.summary}>
          <SummaryCards />
        </div>

        <h1>Work History</h1>
        <WorkExperience />

        <h1>Startup Experience</h1>
        <StartupExperience />

        <h1>Programming and Frameworks</h1>
        <ProgrammingExperience />

        <h1>Hackaton Achivements</h1>
        <HackatonAwards />

        <h1>Education and Awards</h1>
        <EducationAwards />

        <h1>Other Awards</h1>
        <OtherAwards />
      </div>
    );
  }
}

export default App;
