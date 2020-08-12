import React from 'react';
import { render } from 'react-dom';
// Images
import BGimg from '../assets/codeComp.jpg'
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

    return (
        <div className="home-page">
                <div className="bg-img-container" >
                    <img className="bg-img" src={BGimg} />
                </div>
            <h1 className="hi-header">Hi I'm Aidan, a web devloper</h1>
            {/* about me */}
        </div>
    )
}