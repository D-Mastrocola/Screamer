import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <div className='header-logo-container'>
          <h1><a>Screamer</a></h1>
        </div>
        <div className='header-spacer'></div>
      </header>
    )
  }
}
export default Header;