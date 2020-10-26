import React from 'react';
import myResume from '../assets/myResume.pdf'
// Styles
import {
    Icon,
    Menu,
    Popup,
    Segment
} from 'semantic-ui-react'

export default function Footer() {

    return (
        <Segment inverted className="footer">
            <Menu inverted secondary className="footer-links" >
                <Menu.Item className="gh-menu-item" as='a' target="_blank" href="https://github.com/AidanMcB"><Icon className="github-icon" name="github" size="huge" /></Menu.Item>
                <Menu.Item className="yt-menu-item" as='a' target="_blank" href="https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w/videos?"><Icon className="youtube-icon" name="youtube" size="huge" color="red" /></Menu.Item>
                <Menu.Item className="md-menu-item" as='a' target="_blank" href="https://medium.com/@aidankmcbride"><Icon className="medium-icon" name="medium" size="huge" /></Menu.Item>
                <Popup content="Download my resume" trigger={
                <Menu.Item className="dl-menu-item" as='a' target="_blank" href={myResume} download><Icon className="resume-icon" name="download" size="huge" /></Menu.Item>
                } />
            </Menu>
        </Segment>
    )
}