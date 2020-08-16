import React from 'react';
// Components 
import Software from './Software'
import Methodologies from './Methodologies'
import SoftSkills from './SoftSkills'
// Styles
import {
    Container,
    Segment,
    Button,
    Header,
    List,
} from 'semantic-ui-react'

export default function Resume() {
    return (
        <Container className="resume-page">
            <Software />
            <Methodologies />
            <SoftSkills />
        </Container>
    )
}