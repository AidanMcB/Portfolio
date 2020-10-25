import React from 'react';
import { useHistory } from 'react-router-dom'
import myResume from '../assets/myResume.pdf'
// Styles
import {
    Container,
    Icon
} from 'semantic-ui-react'

export default function Footer() {

    const history = useHistory()

    return (
        <div className="footer">
            <Container className="footer-links">
                <Icon onClick={() => window.location = 'https://github.com/AidanMcB'} className="github-icon" name="github" size="huge" />
                <Icon onClick={() => window.location = "https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w/videos?"} className="youtube-icon" name="youtube" size="huge" color="red" />
                <Icon onClick={() => window.location = "https://medium.com/@aidankmcbride"} className="medium-icon" name="medium" size="huge" />
                <div className="resume-link-div"><a className="resume-link" href={myResume} download>Download my resume</a></div>
            </Container>
        </div>
    )
}