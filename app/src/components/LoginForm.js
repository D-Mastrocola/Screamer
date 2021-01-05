import React, { Component } from 'react';

function LoginForm() {
  return (
    <form className='login-form'>
      <input type='text' placeholder='Email or Username' />
      <input type='text' placeholder='Password' />
      <input className='btn' id='login-btn' type='submit' value='Login' />
    </form>
  )
}
export default LoginForm;