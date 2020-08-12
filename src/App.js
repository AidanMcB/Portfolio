import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
// Components
import HomePage from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
