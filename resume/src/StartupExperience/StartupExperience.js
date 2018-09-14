import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


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


{
  /*
        <Startup
          desc="Student Consulting Firm"
          logo={<img src={mmtmLogo}/>}
          experience={
          }

        />
        */
}
      </Grid>
    );
  }
}

export default StartupExperience;
