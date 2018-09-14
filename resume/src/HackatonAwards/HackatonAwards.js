import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import codebrew from './codebrewaward.png';
import startupwk from './startupweekendaward.png';
import spaceapps from './spaceappsaward.png';
import unihack from './unihackaward.png';
import unihack2017 from './unihack-2017.png';
import unihack2018 from './unihack-2018.png';

class HackathonAwards extends Component {
  render() {
    return (
      <Grid container spacing={40} justify="center">
        <Grid item xs={6} md={3}>
          <img src={codebrew} alt="CodeBrew 2016"/>
        </Grid>

        <Grid item xs={6} md={3}>
          <img src={startupwk} alt="Startup Weekend 2017"/>
        </Grid>

        <Grid item xs={6} md={3}>
          <img src={spaceapps} alt="Space Apps 2017"/>
        </Grid>

        <Grid item xs={6} md={3}>
          <img src={unihack} alt="UNIHACK 2016"/>
        </Grid>

        <Grid item xs={6} md={3}>
          <img src={unihack2017} alt="UNIHACK 2017 Mentor"/>
        </Grid>

        <Grid item xs={6} md={3}>
          <img src={unihack2018} alt="UNIHACK 2018 Judge / Sponsor Representative / Mentor"/>
        </Grid>
      </Grid>
    );
  }
}

export default HackathonAwards;
