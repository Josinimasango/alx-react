import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  const isIndex = true;

  return (
    <div className="App">
      <footer className="App-footer">
        <p>
          {getFooterCopy(isIndex)} - {getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
