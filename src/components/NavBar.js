import React from 'react';
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
            <Menu className="navbar-Menu" >
                <Container>
                    <Menu.Item as='a' onClick={() => history.push('/')}>Home</Menu.Item>
                    <Menu.Item as='a' onClick={() => history.push('/resume')}>Resume</Menu.Item>
                    <Menu.Item as='a' onClick={()=> history.push('/projects')}>Projects</Menu.Item>
                    <Menu.Item as='a' onClick={() => history.push('/contact')}>Contact</Menu.Item>
                </Container>
            </Menu>
    )
}