import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import boschLogo from './bosch.png';
import unimelbLogo from './unimelb.svg';
import clearbridgeLogo from './clearbridge.png';

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
        <ExpansionPanel expanded={this.state.expanded} onChange={() => this.setState({ expanded: !this.state.expanded })}>
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
    return (
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <a href={this.props.url} target="_blank">
            {this.props.icon}
          </a>
        </Grid>
        <Grid item xs={9}>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

class SkillGauge extends Component {
  render() {
    return (
      <Grid container item xs={12}>
        <Grid xs={4}>
          {this.props.skill}
        </Grid>
        <Grid xs={8}>
          {this.props.score}
        </Grid>
      </Grid>
    )
  }
}

const SUBJECT_NAME = {
  "comp30026": "Models of Computation",
  "comp30024": "Artificial Intelligence",
  "comp30023": "Computing Systems",
  "swen30006": "Software Modelling and Design",
  "comp20005": "Engineering Computation",
  "comp10001": "Foundations of Computing",
  "comp90059": "Introduction to Python Programming",
}

class Subject extends Component {
  render() {
    return (
      <Grid container item xs={12}>
        <Grid xs={4}>
          <p>
            {this.props.year}, Sem {this.props.semester}
          </p>
        </Grid>
        <Grid xs={8}>
          <p>
            <a href={`https://handbook.unimelb.edu.au/${this.props.year}/subjects/${this.props.code}`} target="_blank">
              {this.props.subject ? this.props.subject : SUBJECT_NAME[this.props.code]}
            </a>
          </p>
        </Grid>
      </Grid>
    )
  }
}

class WorkExperience extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <ExperienceGroup icon={<img src={boschLogo} alt="Bosch Australia" />} url="https://www.bosch.com.au/" company="Bosch Australia">
          <Experience
            title="IoT Software Engineer"
            desc={<p>I work end-to-end: from customer's ideas to product development &amp; deployment.
My projects involve developing wide range of software - analytics, machine learning, information retrieval, web fullstack, device platform, libraries, computer games and firmware.
As an Agile developer, I work on formulating business strategy and goals, product development, requirements documentation, designing software and infrastructure, and more.
</p>}
            startDate={new Date("Dec 2017")}
            endDate={undefined} />

          <Experience
            title="Student IoT Engineer"
            desc={<p>I do it all - overall software solution &amp; architecture design, Dev-Ops, Git hooks and extensions, responsive web application development, API design and development, database design, embedded systems (FreeRTOS), CAN bus debugging, reverse-engineering and simulations.
              Also worked in setting up business-goal-oriented product demos for Bosch products at conventions.</p>}
            startDate={new Date("Jan 2017")}
            endDate={new Date("Dec 2017")} />
        </ExperienceGroup>

        <ExperienceGroup icon={<img src={unimelbLogo} alt="University of Melbourne" style={{ backgroundColor: "rgb(9, 65, 131)", padding: "2em" }} />} company="University of Melbourne">
          <Experience
            title="Tutor and Demonstrator"
            desc={<div>
              <h3>Anonymous Student Feedback</h3>
              <div>
                <SkillGauge skill="Organization Skills" score={4.9 / 5} />
                <SkillGauge skill="Clear and Understandable Explanation" score={4.9 / 5} />
                <SkillGauge skill="Encouraging Particpation" score={4.7 / 5} />
                <SkillGauge skill="Gauge Understanding" score={4.6 / 5} />
              </div>
              <h3>History</h3>
              <Subject year={2018} semester={2} code="comp30026"/>
              <Subject year={2018} semester={1} code="comp30024"/>
              <Subject year={2018} semester={1} code="comp30023"/>
              <Subject year={2018} semester={1} code="comp20005"/>
              <Subject year={2018} semester={1} code="swen30006"/>
              <Subject year={2018} semester="Summer" code="comp90059"/>
              <Subject year={2016} semester={1} code="comp10001"/>
            </div>}
            startDate={new Date("Feb 2016")}
            endDate={undefined} />
        </ExperienceGroup>

        <ExperienceGroup icon={<img src={clearbridgeLogo} alt="Clear Bridge Group"/>} url="http://www.clearbridge.com.au">
          <Experience
            title="Fullstack Developer"
            desc={<p>Business Process Management System development using Meteor.js and Typescript. The application also acted as a friendly web-interface for jBPM. A combination of Blaze and React were used on the view side.</p>}
            startDate={new Date("Jan 2016")}
            endDate={new Date("Dec 2015")} />

          <Experience
            title="IT and Marketing Assistant"
            desc={<p>Casual position to create a web shop using Magento framework. Customized Magento themes, scripts and extensions (PHP and JS), with a bit of WordPress and UI design. Duties also included classic Magento back-end work such as database migration and product management.</p>}
            startDate={new Date("Dec 2015")}
            endDate={new Date("July 2015")} />
        </ExperienceGroup>

      </Grid>
    );
  }
}

export default WorkExperience;
