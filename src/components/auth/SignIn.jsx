// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { signIn } from '../../store/actions/authActions'
// import { Redirect } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import { Container } from '@material-ui/core';


// const SignIn = (props) => {
  
  
  
//   const classes = useStyles();

//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//   })

//   const handleChange = (e) => {
//     setUser({
//       [e.target.id] : e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.signIn(user);
//   }

//   const {authError, auth } = props;

//   // if(auth.uid) return <Redirect to='/'/>
  
//   return (
//     <Container>
//       <form className={classes.container} onSubmit={handleSubmit}  noValidate autoComplete="off">
//         <h5>Entrar</h5>
//         <TextField
//           id="email"
//           type='text'
//           label="Email"
//           value={user.email}
//           className={classes.textField}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           id="password"
//           type='password'
//           label="Password"
//           value={user.password}
//           className={classes.textField}
//           onChange={handleChange}
//           margin="normal"
//         />
        
//           <button className="btn pink lighten-1 z-depth-0">Login</button>
//           <div className="red-text center">
//             { authError ? <p>{authError}</p> : null }
//           </div>
//       </form>
//     </Container>
//   )
  
// }

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignIn)




import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loginLabel: {
    color: 'rgba(255, 255, 255, 0.65)',
  },
  loginWraper: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0c1427',
    padding: '10px 40px 20px',
    border: '1px solid #172340',
    borderRadius: '.25rem',
    boxShadow: '3px 0 10px 0 #060b15',
  },
  textField: {
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
      color: 'rgba(255, 255, 255, 0.65)',
    },
    'MuiInput-underline:before': {
      borderBottom: '1px solid rgba(85, 163, 179, 0.42)'
    },
    width: 300,
  },
}));

const SignIn = props =>  {

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

  const {authError, auth } = props;
  if(auth.uid) return <Redirect to='/'/>
  return (
    <div className={classes.loginWraper}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.container}>
        <div className={classes.loginBox}>
          <h3 className={classes.loginLabel}>Entrar</h3>
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

          {/* <TextField
            id="name"
            name='asdfasdf'
            type='name'
            label="Name"
            value={user.name}
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
          /> */}
          
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
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
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
)(SignIn)