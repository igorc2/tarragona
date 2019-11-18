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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
    <div className='container'>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.container}>
        <h5 className="grey-text text-darken-3">Entrar</h5>
        <TextField
          id="email"
          type='email'
          label="Email"
          value={user.email}
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
        />
        
        <TextField
          id="password"
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