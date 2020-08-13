import React from 'react';

// Styles 
import {
    Container,
    Segment,
    Header,
    Button,
    Label,
    Icon
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
                    <Header>Email</Header>
                    <a href="mailto: aidankmcbride@gmail.com">aidankmcbride@gmail.com</a>
                </div>
                <div className="phone-div">
                    <Header>Phone</Header>
                    <a>732-606-6416</a>
                </div>
                <div className="linkedin-div">
                    <Header>Linkedin</Header>
                    <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="aidan-mcbride-52b6261a9">
                        <a class="LI-simple-link" href='https://www.linkedin.com/in/aidan-mcbride-52b6261a9?trk=profile-badge'>Aidan McBride</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}