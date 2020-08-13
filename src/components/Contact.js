import React from 'react';

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
            <Segment className="spacer" />
            <div className="contact-header">
                <Header>Contact Info</Header>
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
                <Popup content={<div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="aidan-mcbride-52b6261a9"/>} 
                className="linkedin-popup" trigger={
                    <div className="linkedin-div">
                        <Header><a className="linkedin-link" href='https://www.linkedin.com/in/aidan-mcbride-52b6261a9?trk=profile-badge'>Linkedin</a></Header>
                    </div> } />
            </div>
        </Container>
    )
}