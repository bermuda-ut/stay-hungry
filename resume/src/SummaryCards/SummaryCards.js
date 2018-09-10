import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../component/Card';

class SummaryCards extends Component {
  render() {
    return (
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <Card
            title="Agile to the Bones"
            icon={<i>TestIcon</i>}
            desc={<p>Long-time agile developer. Strong discipline and organization skills. Download more agile</p>}
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="Node.js Minimalist"
            icon={<i>TestIcon</i>}
            desc={<p>From typical fullstack web projects to dev-ops tools to IoT gateways. Minimal work required for updates. Fast-performing and dev-experience-oriented project setup, naturally making things minmial.</p>}
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="AI and ML"
            icon={<i>TestIcon</i>}
            desc={<p>Not just a buzzword</p>}
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            title="Code that scales in Prod and Tests"
            icon={<i>TestIcon</i>}
            desc={<p>Combined with strong passion for well-infrastructured dev-ops, enthusiast at developing software that scales and testing it</p>}
          />
        </Grid>
        <Grid item xs={6}>
          <Card
            title="Length Matters"
            icon={<i>TestIcon</i>}
            desc={<p>Keeping my passion alive since primary school. Check out my old blog.</p>}
          />
        </Grid>
        <Grid item xs={12}>
          <Card
            title="Work rights in AU and KR"
            icon={<i>TestIcon</i>}
            desc={<p>Work rights in AU until 2020, applying for PR at the end of the 2018 with 70 points, Korean citizen</p>}
          />
        </Grid>
      </Grid>
    );
  }
}

export default SummaryCards;
