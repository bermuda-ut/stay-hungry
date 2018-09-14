import React, { Component } from 'react';

import './Resume.css';

import Logo from '../component/Logo';
import SummaryCards from '../SummaryCards/SummaryCards';
import WorkExperience from '../WorkExperience/WorkExperience';
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
    style.work = {
      padding: "0 17%"
    }

    return (
      <div className="App">

        <header className="App-header">
          <div className="App-logo">
            <a href="/">
              <Logo colour="white" />
            </a>
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
        <div style={style.work}>
          <WorkExperience />
        </div>

        <h1>Programming and Frameworks</h1>
        <div style={style.work}>
          <ProgrammingExperience />
        </div>

        <h1>Hackaton Achivements</h1>
        <div style={style.work}>
          <HackatonAwards />
        </div>

        <h1>Education and Awards</h1>
        <div style={style.work}>
          <EducationAwards />
        </div>

        <h1>Other Awards</h1>
        <div style={style.work}>
          <OtherAwards />
        </div>

        <footer>
          <div>
            <p>
              Some icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
