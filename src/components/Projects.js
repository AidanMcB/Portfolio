import React from 'react';
// Images
import weatherAppImg from '../assets/mosi-knife.jpg'
import ddBG from '../assets/d&dbackground.jpg'
import todaysMealImg from '../assets/todays-meal.png'
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
                <Image src={ddBG} wrapped></Image>
                    <Card.Content>
                        <Card.Header>Dungeons and Dragons Dice Roller</Card.Header>
                        <Card.Meta>HTML, CSS, JavaScript</Card.Meta>
                        <Card.Description>
                            Roll six different types of dice or convert any of the currencies coinciding with the popular board game, Dungeons and Dragons. Includes a simple calculator.
                        </Card.Description>                 
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card className="todays-meal-app" onClick={() => window.location="https://todays-meal.herokuapp.com/" }>
                <Image src={todaysMealImg} wrapped></Image>
                    <Card.Content>
                        <Card.Header>Today's Meal</Card.Header>
                        <Card.Meta>Ruby on Rails, CSS</Card.Meta>
                        <Card.Description>
                            Browse delicious recipes online to spice up your cooking repertoire. Create your own profile and upload your own recipes to share with the world!
                        </Card.Description>                 
                    </Card.Content>
                </Card>
            </Grid.Column>
                </Grid.Row>
            {/* Three per row, start next row here */}
            </Grid>
        </Container>
    )
}