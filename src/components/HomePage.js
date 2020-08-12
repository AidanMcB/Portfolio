import React from 'react';
import { render } from 'react-dom';

// Components 
import NavBar from './NavBar'

// Styles 
import { 
    Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

export default function HomePage() {

    return(
        <Container>
            <NavBar />
                Home Page
        </Container>
    )
}