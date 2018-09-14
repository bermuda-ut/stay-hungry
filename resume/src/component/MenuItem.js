import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class MenuItem extends Component {
  render() {
    return (
      <Grid item container xs={12}>
        <Grid xs={9}>
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            <h3>{this.props.desc}</h3>
          </div>
        </Grid>

        <Grid xs={3}>
          <h3>{this.props.time}</h3>
        </Grid>
      </Grid>
    );
  }
}

export default MenuItem;
