import React from 'react';
import { render } from 'react-dom';
// Images
import BGimg from '../assets/codeComp.jpg'
import ProfPic from '../assets/profile-pic.jpeg'
// Components 
import NavBar from './NavBar'
// Styles 
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

export default function HomePage() {

    return (
        <div className="home-page">
            <div className="bg-img-container" >
                <img className="bg-img" src={BGimg} alt="computer header image"/>
            </div>
            <h1 className="hi-header">Aidan McBride</h1>
            <h3 className="hi-header">Web Developer</h3>
            <div className="align-pic-about">
            <div className="profile-pic-container">
                <img className="profile-pic" src={ProfPic} alt="profile picture" />
            </div>
            <div className="about-me">
                <h5 className="about-me-header">About Me</h5>
                <p>I have a passion for front end web development. Since I began programming, it always amazed me to see what could be rendered from my imagination to a computer screen. I got the opportunity to hone my craft at Flatiron School in Houston Texas in March of 2020. There I gained experience in full stack developement with Ruby on Rails, JavaScript, SQL and much more. In my spare time when I can usually be found building projects and learning more about programming. Or hanging out with my cat. I am currently looking for new opportunities in the field of web development, meeting new people, and expanding my horizons.</p>
            </div>
            </div>
            <div className="footer">
                <ul className="footer-list">
                    <li><a href="https://github.com/AidanMcB">GitHub</a></li>
                    <li><a href="https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w?">YouTube</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    )
}