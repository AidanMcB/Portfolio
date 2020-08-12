import React from 'react';

// Styles 
import {
    Header,
    Container,
    Button,
    Segment,
    Menu
} from 'semantic-ui-react'

export default function NavBar() {


    return (
        <Segment className="navbar-Segment">
            <Menu className="navbar-Menu" >
                <Container>
                    <Menu.Item as='a'>About</Menu.Item>
                    <Menu.Item as='a'>Projects</Menu.Item>
                    <Menu.Item as='a'>Contact</Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}