import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import android from './android.svg';
import haskell from './haskell.svg';
import machine from './machine.svg';
import phone from './phone.svg';
import rails from './rails.svg';
import react from './react.svg';
import node from './node.svg';
import spring from './spring.svg';
import tensorflow from './tensorflow.svg';
import terminal from './terminal.svg';
import unity from './unity.png';
import unreal from './unreal.svg';

class Framework extends Component {
  render() {
    return (
      <Grid item xs={this.props.size ? this.props.size : 3}>
        <div>
          {this.props.logo}
          <p>
            {this.props.name}
          </p>
        </div>
      </Grid>
    )
  }
}

class ProgrammingExperience extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <h2>I get Paid to do</h2>
          </Grid>
          <Framework logo={<img src={tensorflow} />} />
          <Framework logo={<img src={react} />} />
          <Framework logo={<img src={node} />} />
          <Framework logo={<img src={spring} />} />
          <Framework logo={<img src={unity} />} />
          <Framework logo={<img src={machine} name="C/embedded system" />} />
          <Framework logo={<img src={terminal} name="Bash Script" />} />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <h2>I am confident with</h2>
          </Grid>
          <Framework logo={<img src={haskell} />} />
          <Framework logo={<img src={phone} name="React Native" />} />
          <Framework logo={<img src={android} />} />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <h2>I have played around with</h2>
          </Grid>
          <Framework logo={<img src={unreal} />} />
          <Framework logo={<img src={rails} />} />
        </Grid>
      </Grid>
    );
  }
}

export default ProgrammingExperience;
