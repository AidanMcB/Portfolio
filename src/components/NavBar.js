import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
// Styles 
import {
    Header,
    Container,
    Button,
    Segment,
    Menu
} from 'semantic-ui-react'

export default function NavBar() {

    const history = useHistory()

    return (
        <Segment style={{marginTop:"-.5em"}}
        inverted >
            <Menu inverted secondary className="navbar-Menu" >
                <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/resume')}>Resume</Menu.Item>
                <Menu.Item as='a' onClick={()=> history.push('/projects')}>Projects</Menu.Item>
                <Menu.Item as='a' onClick={() => history.push('/contact')}>Contact</Menu.Item>
            </Menu>
        </Segment>
    )
}