import React from 'react';
// Images
import ProfPic from '../assets/profile-pic.jpeg'

// Styles
import {
    Container,
    Header,
    Icon,
    Image,
} from 'semantic-ui-react'

export default function HomePage() {

    return (
        <Container id="homePage" className="home-page">
            <Header style={{
                marginTop: "0.75em",
                textShadow:"2px 2px black",
                fontSize: "32px"
            }} as="h1" className="hi-header">Aidan McBride</Header>
            <Header style={{
                marginTop:"0.75em",
                textShadow:"2px 2px black"
            }} as="h2" className="hi-header2">Web Developer</Header>
            <div className="align-pic-about">
        
                <div className="about-me">
                    <Image className="profile-pic" centered size='small' circular src={ProfPic} />
                    <p>I have a passion for front end web development. Since I began programming, it has always amazed me to see what could be rendered from my imagination onto a computer screen. I got the opportunity to hone my craft at Flatiron School in Houston, Texas in March of 2020. There I gained experience in full stack developement with Ruby on Rails, JavaScript, SQL and much more. In my spare time when I can usually be found building projects and learning more about programming. Or hanging out with my cat. I am currently looking for new opportunities in the field of web development, meeting new people, and expanding my horizons.</p>
                </div>
            </div>
            <Container className="footer-links">
                <Icon onClick={() => window.location='https://github.com/AidanMcB'} className="github-icon" name="github" size="huge" />
                <Icon onClick={() => window.location="https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w/videos?"} className="youtube-icon" name="youtube" size="huge" color="red" />
                <Icon onClick={() => window.location="https://medium.com/@aidankmcbride"} className="medium-icon" name="medium" size="huge" />
            </Container>
        </Container>
    )
}