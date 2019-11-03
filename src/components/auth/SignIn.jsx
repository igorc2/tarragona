import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const SignIn = () => {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  const {authError, auth } = this.props;
  if(auth.uid) return <Redirect to='/'/>
  
  return (
    <div className='container'>
      <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Entrar</h5>
        <TextField
          id="name"
          label="Name"
          value={user.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          id="password"
          type='password'
          label="Password"
          value={user.password}
          onChange={handleChange}
          margin="normal"
        />
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Senha</label>
          <input type="password" id='password' onChange={this.handleChange}/>
        </div>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)