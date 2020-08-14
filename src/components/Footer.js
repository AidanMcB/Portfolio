import React from 'react';
import {useHistory} from 'react-router-dom'
// Styles
import {
    Button
} from 'semantic-ui-react'

export default function Footer() {

    const history = useHistory()

    return (
        <div className="footer">
            <div className="footer-list">
                <Button onClick={() => window.location="https://github.com/AidanMcB"} >GitHub</Button>
                <Button onClick={() => window.location="https://www.youtube.com/channel/UCO5m40AxTx4AuitZQGx3Q4w?" }>YouTube</Button>
                <Button onClick={() => window.location="https://medium.com/@aidankmcbride" }>Blog</Button>
            </div>
        </div>
    )
}