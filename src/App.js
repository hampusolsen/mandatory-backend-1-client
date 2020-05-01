import React, { useEffect } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import ChatApp from './Components/ChatApp/ChatApp';

import preventFlash from './libs/flash';

export default function App() {
  useEffect(() => {
    preventFlash();
  }, []);

  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/' component={ChatApp} />
    </React.Fragment>
  );
};
