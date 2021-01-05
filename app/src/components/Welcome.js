import React, { Component } from 'react';
import LoginForm from './LoginForm';

function Welcome() {
  return(
    <div className='welcome-container'>
      <div className='cta-container'>
          <h2>Welcome to Screamer!</h2>
          <LoginForm/>
          <p>or</p>
          <button className='btn' id='signup-btn'>Sign up</button>
        </div>
    </div>
  )
};
export default Welcome;
