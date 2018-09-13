import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateFormat(d) {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid item xs={12}>
        <ExpansionPanel expanded={this.state.expanded} onChange={() => this.setState({expanded: !this.state.expanded})}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h1>{this.props.title}</h1>
            <p>{`${dateFormat(this.props.startDate)} - ${this.props.endDate ? dateFormat(this.props.endDate) : "current"}`}</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.props.desc}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    )
  }
}

class ExperienceGroup extends Component {
  render() {
    return(
      <Grid container item xs={12}>
        <Grid item xs={3}>
          {this.props.icon}
          {this.props.company}
        </Grid>
        <Grid item xs={9}>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

class WorkExperience extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <ExperienceGroup icon={<i>TestIcon</i>} company="Bosch Australia">
          <Experience
            title="IoT Software Engineer"
            desc={<p>Wow much work</p>}
            startDate={new Date("Dec 2017")}
            endDate={undefined}/>

          <Experience
            title="Student IoT Engineer"
            desc={<p>Wow much work</p>}
            startDate={new Date("Jan 2017")}
            endDate={new Date("Dec 2017")}/>
        </ExperienceGroup>

        <ExperienceGroup icon={<i>TestIcon</i>} company="University of Melbourne">
          <Experience
            title="Tutor"
            desc={<p>Wow much work</p>}
            startDate={new Date("Feb 2016")}
            endDate={undefined}/>
        </ExperienceGroup>

        <ExperienceGroup icon={<i>TestIcon</i>} company="Clear Bridge Group">
          <Experience
            title="Fullstack Developer"
            desc={<p>Wow much work</p>}
            startDate={new Date("Jan 2016")}
            endDate={new Date("Dec 2015")}/>

          <Experience
            title="IT and Marketing Assistant"
            desc={<p>Wow much work</p>}
            startDate={new Date("Dec 2015")}
            endDate={new Date("July 2015")}/>
        </ExperienceGroup>

      </Grid>
    );
  }
}

export default WorkExperience;
