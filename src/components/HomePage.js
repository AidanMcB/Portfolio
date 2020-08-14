import React from 'react';
import { render } from 'react-dom';
// Images
import BGimg from '../assets/codeComp.jpg'
import ProfPic from '../assets/profile-pic.jpeg'
import coffeeCode from '../assets/coffeeCode.jpg'
// Components 
import NavBar from './NavBar'
import Footer from './Footer'
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
        <Container className="home-page">
            <Header style={{
                marginTop:"40px",
                textShadow:"2px 2px black",
                fontSize: "32px"
            }} as="h1" className="hi-header">Aidan McBride</Header>
            <Header style={{
                textShadow:"2px 2px black"
            }} as="h2" className="hi-header">Web Developer</Header>
            <div className="align-pic-about">
            {/* <div className="profile-pic-container">
                <img className="profile-pic" src={ProfPic} alt="profile picture" />
            </div> */}
                <div className="about-me">
                    <Image centered size='small' circular src={ProfPic} />
                    <p>I have a passion for front end web development. Since I began programming, it has always amazed me to see what could be rendered from my imagination onto a computer screen. I got the opportunity to hone my craft at Flatiron School in Houston, Texas in March of 2020. There I gained experience in full stack developement with Ruby on Rails, JavaScript, SQL and much more. In my spare time when I can usually be found building projects and learning more about programming. Or hanging out with my cat. I am currently looking for new opportunities in the field of web development, meeting new people, and expanding my horizons.</p>
                </div>
            </div>
        </Container>
    )
}