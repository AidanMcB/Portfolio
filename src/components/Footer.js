import React from 'react';
import { useHistory } from 'react-router-dom'
import myResume from '../assets/myResume.pdf'
// Styles
import {
    Container,
    Icon,
    Menu,
    Segment
} from 'semantic-ui-react'

export default function Footer() {

    const history = useHistory()

    return (
        <Segment inverted className="footer">
            <Menu inverted secondary className="footer-links" >
                <Menu.Item as='a' target="_blank" href="https://github.com/AidanMcB"><Icon className="github-icon" name="github" size="huge" /></Menu.Item>
                <Menu.Item as='a' target="_blank" href="https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w/videos?"><Icon className="youtube-icon" name="youtube" size="huge" color="red" /></Menu.Item>
                <Menu.Item as='a' target="_blank" href="https://medium.com/@aidankmcbride"><Icon className="medium-icon" name="medium" size="huge" /></Menu.Item>
                <Menu.Item as='a' target="_blank" href={myResume} download><Icon className="resume-icon" name="download" size="huge" /></Menu.Item>
            </Menu>
        </Segment>
    )
}