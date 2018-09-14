import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../component/Card';

class Startup extends Component {
  render() {
    return (
      <Grid container item spacing={8} xs={6}>
        <div>
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
          experience={
            <p>Lol much fun</p>
          }
        />
        <Startup
          name="Momentium Consulting"
          url="http://momentiumconsulting.com"
          desc="Student Consulting Firm"
          experience={
            <p>Lol much fun</p>
          }
        />
      </Grid>
    );
  }
}

export default StartupExperience;
