import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import MenuItem from '../component/MenuItem';

class EducationAwards extends Component {
  render() {
    return (
      <Grid container spacing={8}>
        <MenuItem
          title="Bachelor of Science, Computing and Software Systems"
          subtitle="University of Melbourne"
          desc="First Class Honors"
          time="2015 - 2017"/>
        <MenuItem
          title="Cambridge GCE A Level"
          subtitle="UCSI University"
          desc="Mathematics A*, Chemistry A*, Physics A*, Furthermaths A"
          time="2013 - 2014"/>
        <MenuItem
          title="Outstanding Cambridge Learner Awards"
          subtitle="Top in the World (Mathematics)"
          desc="Cambridge IGCSE"
          time="2012"/>
        <MenuItem
          title="Australian Mathematics Competition"
          subtitle="Credit"
          time="2010"/>
      </Grid>
    );
  }
}

export default EducationAwards;
