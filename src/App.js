import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// Styles
import './App.css';
import {
  Segment
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// Components
import HomePage from './components/HomePage'
// -NavBar
import NavBar from './components/NavBar'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'




function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar className="navBar" />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
