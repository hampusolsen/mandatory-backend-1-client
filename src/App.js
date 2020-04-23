import React, { useEffect } from 'react';
import { getData } from './api/api';
import './App.scss';
import { } from './api/socket';

function App() {
  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
