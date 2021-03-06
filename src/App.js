import React, {useEffect, useState} from 'react';
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
import Footer from './components/Footer'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []) //will only run on mount and unmount

  return (
    <div className="app">
    <img className="bg" src={BGimage} />
        <NavBar className="navBar" />
        <div className="main-body">
        <HomePage />
        <Projects />
        <Contact />
        <Resume />
        <Footer />
        </div>
    </div>
  );
}

export default App;
