import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class ProgrammingExperience extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <div className="igetpaid">
            <p>Python/ML/Tensorflow</p>
            <p>Frontend/React</p>
            <p>Backend/Javascript/Typescript/Node.js</p>
            <p>Java/Spring</p>
            <p>c#/gamedev/Unity</p>
            <p>C/embedded system</p>
            <p>Haskell/functional</p>
            <p>Prolog/functional</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="confident">
            <p>Java/Android App Development</p>
            <p>App Development/React Native</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="playedaround">
            <p>c++/gamedev/Unreal</p>
            <p>Ruby on Rails</p>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default ProgrammingExperience;
