import React from 'react';
import {useHistory} from 'react-router-dom'
// Styles 
import {
    Segment,
    Menu
} from 'semantic-ui-react'

export default function NavBar() {

    const history = useHistory()

    return (
        <Segment style={{marginTop:"-.5em"}}
        inverted >
            <Menu inverted secondary className="navbar-Menu" >
                <Menu.Item as='a' href="#homePage" >Home</Menu.Item>
                <Menu.Item as='a' href="#resume">Resume</Menu.Item>
                <Menu.Item as='a' href="#projects">Projects</Menu.Item>
                <Menu.Item as='a' href="#contact" >Contact</Menu.Item>
            </Menu>
        </Segment>
    )
}