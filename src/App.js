import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import config from './config/config';
// import config from './config/config';


function App() {
  const [testVal, setTestVal] = useState("")

  useEffect(() => {
    fetch(`${config.fetchUrl}/test`).then(res => res.json()).then(data => {
      setTestVal(data.test)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {testVal}
        </a>
        <p>{testVal}</p>
      </header>
    </div>
  );
}

export default App;

