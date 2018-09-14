import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import mmtmLogo from "./mmtm.png";
import mssLogo from "./mss.png";
import boschLogo from './bosch.png';
import unimelbLogo from './unimelb.svg';
import clearbridgeLogo from './clearbridge.png';

import './WorkExperience.css';

const SUBJECT_NAME = {
  "comp30026": "Models of Computation",
  "comp30024": "Artificial Intelligence",
  "comp30023": "Computing Systems",
  "swen30006": "Software Modelling and Design",
  "comp20005": "Engineering Computation",
  "comp10001": "Foundations of Computing",
  "comp90059": "Introduction to Python Programming",
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateFormat(d) {
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function scoreFormat(score) {
  return `${score * 100 | 0}/100`;
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded != undefined ? this.props.expanded : false
    };
  }

  render() {
    return (
      <Grid item xs={12} className="experience">
        <ExpansionPanel
          style={{
            boxShadow: "none",
            border: "none",
          }}
          expanded={this.state.expanded} onChange={() => this.setState({ expanded: !this.state.expanded })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid item xs={7}>
              <h1>{this.props.title}</h1>
            </Grid>
            <Grid item xs={5}>
              <p className="date">{
                this.props.subtitle ? this.props.subtitle :
                  `${dateFormat(this.props.startDate)} - ${this.props.endDate ? dateFormat(this.props.endDate) : "current"}`
              }</p>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="desc">
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
      <Grid container item xs={12} className="group">
        <Grid item xs={12} md={3} style={{
          marginTop: "0.5em"
        }}>
          <a href={this.props.url} target="_blank">
            {this.props.icon}
          </a>
        </Grid>
        <Grid item xs={12} md={9}>
          {this.props.children}
        </Grid>
      </Grid>
    )
  }
}

class SkillGauge extends Component {
  render() {
    return (
      <Grid container item xs={12} className="skillgauge">
        <Grid item xs={9}>
          {this.props.skill}
        </Grid>
        <Grid item xs={3} style={{ textAlign: "right" }}>
          {scoreFormat(this.props.score)}
        </Grid>
      </Grid>
    )
  }
}

class Subject extends Component {
  render() {
    return (
      <Grid container item xs={12} className="skillgauge">
        <Grid item xs={4}>
          {this.props.year}, Sem {this.props.semester}
        </Grid>
        <Grid item xs={8}>
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
      <Grid container spacing={16} className="WorkExperience">
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

        <hr />

        <ExperienceGroup icon={<img src={unimelbLogo} alt="University of Melbourne" style={{ backgroundColor: "rgb(9, 65, 131)", padding: "1em" }} />} company="University of Melbourne" url="https://www.unimelb.edu.au/">
          <Experience
            title="Tutor and Demonstrator"
            desc={<Grid container item xs={12}>
              <h3>Students' Feedback (Anonymous)</h3>
              <Grid container item xs={12}>
                <SkillGauge skill="Organization Skills" score={4.9 / 5} />
                <SkillGauge skill="Clear and Understandable Explanation" score={4.9 / 5} />
                <SkillGauge skill="Encouraging Particpation" score={4.7 / 5} />
                <SkillGauge skill="Gauge Understanding" score={4.6 / 5} />
              </Grid>
              <h3>History</h3>
              <Grid container item xs={12}>
                <Subject year={2018} semester={2} code="comp30026" />
                <Subject year={2018} semester={1} code="comp30024" />
                <Subject year={2018} semester={1} code="comp30023" />
                <Subject year={2018} semester={1} code="comp20005" />
                <Subject year={2018} semester={1} code="swen30006" />
                <Subject year={2018} semester="Summer" code="comp90059" />
                <Subject year={2016} semester={1} code="comp10001" />
              </Grid>
            </Grid>}
            startDate={new Date("Feb 2016")}
            endDate={undefined} />
        </ExperienceGroup>

        <hr />

        <ExperienceGroup icon={<img src={clearbridgeLogo} alt="Clear Bridge Group" />} url="http://www.clearbridge.com.au">
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

        <hr />

        <h1 style={{ textAlign: "center", width: "100%" }}>Startup Experience</h1>

        <ExperienceGroup
          icon={<img src={mssLogo} style={{ backgroundColor: "black" }} />}
          alt="mirrorstairstudio"
          url="https://mirrorstairstudio.com">
          <Experience
            title="mirrorstairstudio"
            subtitle="Indie Game Development Studio"
            desc={
              <p>My dream of having my own indie-game studio kind-of formulated to reality during university.
                It was a great excuse for me to attened hackathons with the team and grow various skills, both technical and non-technical.
                Casual game development contiued throughout university, making games for fun.
                However after graduation, I wanted to take the studio to next-level and looked out for contract works.
                In 2018, the studio successfully worked and completed a client game project.
            </p>
            }
          />
        </ExperienceGroup>

        <hr />

        <ExperienceGroup
          icon={<img src={mmtmLogo} />}
          alt="Momentium Consulting"
          url="http://momentiumconsulting.com">
          <Experience
            title="Momentium Consulting"
            subtitle="Student Consulting Firm"
            desc={
              <p>Got je-baited into joining and building a fresh startup from scratch, ended up being the most valuable experience ever.
                With guidance and help from an industry professional, my friend and I worked on a start-up student consulting company.
                The goals was to provide affordable and quality solutions to the clients and provide real-life work to university students and prepare them for graduation.
              I handled every technology engagements, identifying customer’s needs, developing a solution and forming a team for implementation.</p>
            }
          />
        </ExperienceGroup>
      </Grid>
    );
  }
}

export default WorkExperience;
