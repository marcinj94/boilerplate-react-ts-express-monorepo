/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateTestUseActions from './components/StateTestUseActions';
import { useTypedSelector } from './hooks/use-typed-selector';

function App() {
  const cells = useTypedSelector((state) => state.cells);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test redux - click button on the bottom!
        </a>
        <pre
          style={{
            height: 300,
            width: 700,
            border: '2px solid black',
            overflowY: 'scroll',
            padding: '5px 50px',
            textAlign: 'left',
          }}
        >
          {JSON.stringify(cells, undefined, 2)}
        </pre>

        <StateTestUseActions />
      </header>
    </div>
  );
}

export default App;
