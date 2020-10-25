import React from 'react';
// Styles
import {
    Header,
    Item,
} from 'semantic-ui-react';
// Images
import FIlogo from '../../assets/flatiron-school-logo.png'
import OCClogo from '../../assets/OCC-logo.jpeg'

export default function Education(){

    return(
        <Item.Group className="education-container">
            <Header as="h2">Education</Header>
            <Item>
                <Item.Image  className="fi-logo" size='tiny' src={FIlogo} />
                <Item.Content>
                <Item.Header as="h4">Flatiron School</Item.Header>
                <Item.Description>- Houston, TX - June 2020 Software Engineering Immersive, 15 Week Program</Item.Description>
            </Item.Content>
            </Item>
            
            <Item>
                <Item.Image size='tiny' src={OCClogo} />
                <Item.Content>
                <Item.Header as="h4">Ocean County College</Item.Header>
                <Item.Description>- Toms River, NJ - May 2017 Associate Degree: Liberal Arts</Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}