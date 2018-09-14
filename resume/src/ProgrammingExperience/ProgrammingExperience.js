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

import './ProgrammingExperience.css';

class Framework extends Component {
  render() {
    return (
      <Grid item xs={this.props.size ? this.props.size : 2}>
        <div className="framework">
          {this.props.logo}
          <p>{this.props.name}</p>
        </div>
      </Grid>
    )
  }
}

class ProgrammingExperience extends Component {
  render() {
    return (
      <Grid container spacing={8} className="ProgrammingExperience">
        <Grid container item xs={12} justify="center" spacing={8}>
          <Grid item xs={12}>
            <h2>I get Paid to do</h2>
          </Grid>
          <Framework logo={<img src={tensorflow} />} name="Tensorflow" />
          <Framework logo={<img src={react} />} name="React" />
          <Framework logo={<img src={node} style={{ backgroundColor: "#333" }} />} name="Node.js" />
          <Framework logo={<img src={spring} />} name="Spring" />
          <Framework logo={<img src={unity} />} name="Unity" />
          <Framework logo={<img src={machine} />} name="C/embedded system" />
          <Framework logo={<img src={terminal} />} name="Bash Script" />
        </Grid>

        <Grid container item xs={12} justify="center" spacing={8}>
          <Grid item xs={12}>
            <h2>I am Confident with</h2>
          </Grid>
          <Framework logo={<img src={haskell} />} name="Haskell" />
          <Framework logo={<img src={phone} name="React Native" />} name="React Native" />
          <Framework logo={<img src={android} />} name="Native Android"/>
        </Grid>

        <Grid container item xs={12} justify="center" spacing={8}>
          <Grid item xs={12}>
            <h2>I have Played Around with</h2>
          </Grid>
          <Framework logo={<img src={unreal} />} name="Unreal" />
          <Framework logo={<img src={rails} />} name="Ruby on Rails"/>
        </Grid>
      </Grid>
    );
  }
}

export default ProgrammingExperience;
