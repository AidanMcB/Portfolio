import React from 'react';
// Images
import weatherAppImg from '../assets/mosi-knife.jpg'

// Styles 
import {
    Grid,
    Card, 
    Image,
    Icon,
    Container,
    Header,
    Segment,
    Button
} from 'semantic-ui-react';

export default function Projects() {

    return (
        <Container className="projects-page">
            <Header style={{
                marginTop:"40px",
                textShadow:"2px 2px black",
                fontSize: "32px"
            }} className="projects-header">
            Projects</Header>
            <Grid className="projects-grid">
                <Grid.Row columns={3}>
                <Grid.Column>
                <Card className="weather-app-card" onClick={() => window.location="https://react-weather-app-mcb.netlify.app/" }>
                <Image src={weatherAppImg} wrapped></Image>
                    <Card.Content>
                        <Card.Header>React Weather App</Card.Header>
                        <Card.Meta>React.js, CSS</Card.Meta>
                        <Card.Description>
                            A simple react app to tell the weathere. Enter your zip code to see today's forecast for your area. Built using the Open Weather API.
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card className="d&d-dice-app" onClick={() => window.location="https://aidanmcb.github.io/DandDDiceApp/" }>
                <Image src={weatherAppImg} wrapped></Image>
                    <Card.Content>
                        <Card.Header>Dungeons and Dragons Dice Roller</Card.Header>
                        <Card.Meta>HTML, CSS, JavaScript</Card.Meta>
                        <Card.Description>
                            Roll six different types of dice or convert any of the currencies coinciding with the popular board game, Dungeons and Dragons. Includes a simple calculator.
                        </Card.Description>                 

                    </Card.Content>
                </Card>
            </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}