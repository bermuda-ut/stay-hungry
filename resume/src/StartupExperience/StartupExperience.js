import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import mmtmLogo from "./mmtm.png";
import mssLogo from "./mss.png";

class Startup extends Component {
  render() {
    return (
      <Grid container item spacing={8} xs={6}>
        <div>
          {this.props.logo}
          <h1>{this.props.name}</h1>
          <h2>{this.props.desc}</h2>
          <div>
            {this.props.experience}
          </div>
        </div>
      </Grid>
    )
  }
}

class StartupExperience extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Startup
          name="mirrorstairstudio"
          url="https://mirrorstairstudio.com"
          desc="Indie Game Development Studio"
          logo={<img src={mssLogo} style={{backgroundColor: "black"}}/>}
          experience={
            <p>My dream of having my own indie-game studio kind-of formulated to reality during university.
              It was a great excuse for me to attened hackathons with the team and grow various skills, both technical and non-technical.
              Casual game development contiued throughout university, making games for fun.
              However after graduation, I wanted to take the studio to next-level and looked out for contract works.
              In 2018, the studio successfully worked and completed a client game project.
            </p>
          }
        />
        <Startup
          name="Momentium Consulting"
          url="http://momentiumconsulting.com"
          desc="Student Consulting Firm"
          logo={<img src={mmtmLogo}/>}
          experience={
            <p>Got je-baited into joining and building a fresh startup from scratch, ended up being the most valuable experience ever.
              With guidance and help from an industry professional, my friend and I worked on a start-up student consulting company.
              The goals was to provide affordable and quality solutions to the clients and provide real-life work to university students and prepare them for graduation.
              I handled every technology engagements, identifying customer’s needs, developing a solution and forming a team for implementation.</p>
          }
        />
      </Grid>
    );
  }
}

export default StartupExperience;
