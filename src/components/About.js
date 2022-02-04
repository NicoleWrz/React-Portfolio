import React from "react";
import emote from '../images/emote.png';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <div className='about'>
        <div className='bio'>
            <div className='emote'>
                <img src={emote} alt='grey alien avatar' />
            </div>
            <Card className='aboutBody border-0'>
                <Card.Body>
                    <div className='aboutBio'>
                        <h1> Hi, I'm Nicole.</h1>
                        I'm a passionate Full Stack Web Developer with experience building web applications 
                        with JavaScript, React, Express, HTML, CSS and other technologies and frameworks. 
                        <a href="./Nicole-Wrzosek-Resume.pdf" className="resumeButton">Resume</a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </div>
    )
    
}