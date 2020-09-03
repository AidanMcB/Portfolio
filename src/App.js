import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// Styles
import './App.css';
import './semantic.css';
import './mobile.css'
import 'semantic-ui-css/semantic.min.css'
import BGimage from './assets/coffeeCode.jpg'
// Components
import HomePage from './components/HomePage'
// -NavBar
import NavBar from './components/NavBar'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resizee', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []) //will only run on mount and unmount

  return (
    <div className="app">
    <img className="bg" src={BGimage} />
      <BrowserRouter basename="/" className="router">
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
