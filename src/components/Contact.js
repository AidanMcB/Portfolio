import React from 'react';
// Components
// Styles 
import {
    Container,
    Header,
    Icon,
    Popup
} from 'semantic-ui-react';

export default function Contact() {

    return (
        <Container id="contact" className="contact-page">
            <div className="contact-header">
                <Header style={{
                    color:"white",
                    marginTop:"40px",
                    textShadow:"2px 2px black",
                    fontSize: "32px"
                }} as="h1">Want to get in touch?</Header>
            </div>
            <div className="contact-div">
                <div className="email-div">
                    <a className="email-link" href="mailto: aidankmcbride@gmail.com"><Icon name="mail" size="huge" color='red'></Icon></a>
                </div>
                <Popup content="732 606 6416" className="phone-popup" 
                size="huge" position="bottom center" trigger={
                    <div className="phone-div">
                        <Icon name="phone" size="huge" color='green'/>
                    </div> } />
                    <div className="linkedin-div">
                    <a className="linkedin-link" href='https://www.linkedin.com/in/aidan-mcbride-52b6261a9?trk=profile-badge'>&nbsp;&nbsp;&nbsp;<Icon className="L-icon" size='huge' name='linkedin' /></a>
                    </div> 
            </div>
        </Container>
    )
}