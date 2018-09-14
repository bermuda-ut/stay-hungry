import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../component/Card';

import nodeIcon from './stick.svg';
import aiIcon from './ai.svg';
import agileIcon from './running.svg';
import designIcon from './sketch.svg';
import hackIcon from './award.svg';
import workRightIcon from './passport.svg';

import './SummaryCards.css';

class SummaryCards extends Component {
  render() {
    return (
      <Grid container spacing={16} className="SummaryCards" justify="center" style={this.props.style}>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            title="Agile to the Bones"
            icon={<img src={agileIcon} />}
            desc={<p>Long-time agile developer praticing sprint planning and self/team management. Skills amplified by solid discipline and organization skills.</p>}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            title="Node.js Minimalist"
            icon={<img src={nodeIcon} />}
            desc={<p>Node for all - typical fullstack web projects, dev-ops tools and IoT gateways. My motto is minimal work (for both machines and hoomans) for maximum effect - in long term.</p>}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            title="Hackathon Enthusiast"
            icon={<img src={hackIcon} />}
            desc={<p>Participated in countless hackathons? Check. Won 4 hackathons? Check. Mentored in hackathons? Check. Hackathon Judge and Sponsor Representative? Check. Passion and Love for next-generation of hackers? CHECK!</p>}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card
            title="AI and ML"
            icon={<img src={aiIcon} />}
            desc={<p>Not-Just-A-Buzzword&trade;<br />From analysing the problem space to development, I work closely with the customer to optimize their business with intelligent systems. This solution often includes advanced AI (ie. some fun graph traversals) and ML (ie. I find features, computer optimize model). Dev-ops and automation have huge emphasis in my solutions.</p>}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card
            title="Code that scales in Prod and Tests"
            icon={<img src={designIcon} />}
            desc={<p>In architecture design, automated and large-scale testing is one of the priorities. Functional-OO hybrid design is practiced in my software design, keeping thing minimal (easy to understand) or scalable when required.</p>}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <Card
            title="Work rights in AU and KR"
            icon={<img src={workRightIcon} />}
            desc={<p>Work rights in Australia until 2020 and will be applying for Permament Residence at the end of the 2018 with 70 points. Holding citizenship of South Korea.</p>}
          />
        </Grid>
      </Grid>
    );
  }
}

export default SummaryCards;
