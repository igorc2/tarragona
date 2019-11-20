import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { FaGalacticSenate } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  loginLabel: {
    color: 'rgba(12, 50, 50)',
    fontSize: '1.25rem'
  },
  loginWraper: {
    left: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    margin: 0,
    backgroundImage: 'url(' + process.env.PUBLIC_URL + '/qwsa.jpg)',
    backgroundSize: 'cover',
  },
  loginBox: {
    height: '100vh',
    width: 400,
    backgroundColor: '#e7f4f7d4',
    position: 'relative',
  },
  loginCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4rem 3rem 1rem',
    alignItems: 'center',
  },
  textField: {
    width: '100%',
    fontFamily: [
      'Questrial' ,
      'Maven Pro',
      'Ubuntu',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto'
    ],
    '& .MuiFormLabel-root, & .MuiInputBase-input': {
      color: 'rgba(12, 50, 50)',
    },
    'MuiInput-underline:before': {
      borderBottom: '1px solid rgba(85, 163, 179, 0.42)'
    },
  },
  loginButton : {
    backgroundColor: '#626ed4',
    border: '1px solid #626ed4',
    borderRadius: 3,
    fontSize: '1rem',
    color: '#fff'
  }
}));

const UserSignIn = props => {

  const {authError, auth } = props;
  const classes = useStyles();

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
    
  const handleChange = (e) => {
    setUser({
      ...user,  
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(user);
  }

  if(auth.uid)
    return <Redirect to='/'/>
  
  return (
    <div className={classes.loginWraper}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.container}>
        <div className={classes.loginBox}>
          <div className={classes.loginCard}>  
            <h1 className={classes.loginLabel}>TARRAGONA</h1>
            
            <TextField
              id="email"
              name='asdfasdf'
              type='email'
              label="Email"
              value={user.email}
              className={classes.textField}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              id="password"
              name='fasdffas'
              type='password'
              label="Password"
              value={user.password}
              className={classes.textField}
              onChange={handleChange}
              margin="normal"
            />

            <div className="input-field">
              <Button type='submit' variant="contained" color="primary" className={classes.button}>
                Login
              </Button>
              <div className="red-text center">
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => { console.log(creds); return dispatch(signIn(creds))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn)