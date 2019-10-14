import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';//32723756

const styles = theme => ({
  addUser: {
    marginRight: theme.spacing(1),
  },
  paper: {
    width: '100%',
    minHeight: 100,
    margin: 'auto',
    overflow: 'hidden',
    padding: 10,
  },
  content:{
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
});


const AddEntrie = (props) => {

  const { addCustomer, classes, onChange, customer } = props;

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Toolbar>
          <Typography variant="body1">Add customer</Typography>
        </Toolbar>
        <Grid container spacing={2} alignItems="center" className={classes.content}  alignContent='flex-end'>
          <Grid item xs={3}>
            <TextField
              id='name'
              fullWidth
              placeholder="Name"
              onChange={onChange}
              defaultValue={customer.name}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='company'
              fullWidth
              placeholder="Company"
              onChange={onChange}
              defaultValue={customer.company}
            />
          </Grid>
          <Grid item xs={2} >
            <TextField
              id='city'
              fullWidth
              placeholder="City"
              onChange={onChange}
              defaultValue={customer.city}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id='state'
              placeholder="State"
              onChange={onChange}
              defaultValue={customer.state}
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained" onClick={addCustomer} color="primary" className={classes.addUser}>
              Add user
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(AddEntrie);
