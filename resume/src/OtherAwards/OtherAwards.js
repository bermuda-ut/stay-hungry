import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../component/Card';

class OtherAwards extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid xs={2}>
          Dota 2 Battle Cup Champion
          SEA Division - Tier 4
        </Grid>
        <Grid xs={5}>
          trophy
        </Grid>
        <Grid xs={2}>
          <p>Participated and won a Dota 2 online tournament with a team of friends.
            We demonstrated pinnacle of teamwork, made concrete strategic decisions and
            outperformed our opponents with tactical plans as a team.
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default OtherAwards;
