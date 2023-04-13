import React from 'react';

// Assets
import logo from './assets/logo.svg';

const App = (): JSX.Element => {
  return (
    // App Container
    <div className="text-center">
      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800 text-lg text-white">
        <img
          src={logo}
          alt="logo"
          className="pointer-events-none w-[85vh] animate-spin [animation-duration:10s]"
        />

        <p className="m-1">Richard Netto future portfolio page</p>

        <p className="m-1">I&#39;m a Front-end web developer</p>

        <a
          className="text-cyan-400"
          href="https://richard-netto.github.io/example-repo/"
          target="_self"
          rel="noopener noreferrer"
        >
          Example-repo
        </a>

        <a
          className="text-cyan-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p className="m-1">
          version: {process.env.REACT_APP_VERSION?.replaceAll('"', '')}
        </p>
      </div>
    </div>
  );
};

export default App;
