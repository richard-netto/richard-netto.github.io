import React from 'react';
import logo from './assets/logo.svg';
import {
  AppContainerDiv,
  AppHeader,
  AppLogoImg,
  LinkA,
  TextP,
} from './App.styles';

const App = (): JSX.Element => {
  return (
    <AppContainerDiv>
      <AppHeader>
        <AppLogoImg src={logo} alt="logo" />
        <TextP>Richard Netto future portfolio page</TextP>
        <TextP>I&#39;m a Front-end web developer</TextP>
        <LinkA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </LinkA>
      </AppHeader>
    </AppContainerDiv>
  );
};

export default App;
