import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body-container'>
        <div className='cta-container'>
          <h2>Welcome to Screamer!</h2>
          <button className='btn' id='signup-btn'>Sign up</button>
          <p>or</p>
          <button className='btn' id='login-btn'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
