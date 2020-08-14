import React from 'react';
// Components
import Footer from './Footer'
// Styles 
import {
    Container,
    Segment,
    Header,
    Button,
    Label,
    Icon,
    Popup
} from 'semantic-ui-react';

export default function Contact() {

    

    return (
        <Container>
            <div className="contact-header">
                <Header>Want to get in touch?</Header>
            </div>
            <div className="contact-div">
                <div className="email-div">
                    <Header><a className="email-link" href="mailto: aidankmcbride@gmail.com">Email</a></Header>
                </div>
                <Popup content="732 606 6416" className="phone-popup" trigger={
                    <div className="phone-div">
                        {/* <Header>Phone</Header> */}
                        <a className="phone-link">Phone</a> 
                    </div> } />
                    <div className="linkedin-div">
                        <Header><a className="linkedin-link" href='https://www.linkedin.com/in/aidan-mcbride-52b6261a9?trk=profile-badge'><Icon className="L-icon" size='huge' name='linkedin' /></a></Header>
                    </div> 
            </div>
            <Footer />
        </Container>
    )
}