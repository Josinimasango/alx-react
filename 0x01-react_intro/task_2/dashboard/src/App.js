import React, { useState } from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  const isIndex = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <p>Login to access the full dashboard:</p>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button>OK</button>

      <footer className="App-footer">
        <p>
          {getFooterCopy(isIndex)} - {getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
