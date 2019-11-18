import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCard } from '../../store/actions/cardActions'
import { Redirect } from 'react-router-dom';
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
  content: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
});

class CreateCard extends Component {
  state = {
    title: '',
    description: '',
    responsible: '',
    status: 1
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCard(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth, classes } = this.props;
    // if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <Toolbar>
            <Typography variant="body1">Add customer</Typography>
          </Toolbar>
          <Grid container spacing={2} alignItems="center" className={classes.content} alignContent='flex-end'>
            <Grid item xs={3}>
              <TextField
                id='title'
                fullWidth
                placeholder="Title"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='description'
                fullWidth
                placeholder="Description"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={2} >
              <TextField
                id='label'
                fullWidth
                placeholder="Time"
                onChange={this.handleChange}
              />
            </Grid>
            
            <Grid item xs>
              <Button variant="contained" onClick={this.handleSubmit} color="primary" className={classes.addUser}>
                Add user
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (card) => dispatch(createCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateCard))