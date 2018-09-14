import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './OtherAwards.css';

import dotaLogo from './dota.png';
import battlecup from './battlecup.png';

class OtherAwards extends Component {
  render() {
    return (
      <Grid container spacing={8} className="OtherAwards">
        <Grid item xs={12}>
          <div>
            <img src={dotaLogo} className="dota"/><br/>
            <img src={battlecup} className="battlecup"/>
          </div>
        </Grid>

        <Grid item xs={12}>
          <h1>Dota 2 Battle Cup Champion</h1>
          <h2>SEA Division - Tier 4</h2>
        </Grid>
        <Grid item xs={12}>
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
