import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss'


const Hero = () => {
    return (
        <div className="container">
            <div className="hero-section">
                <h1>Just released:
                    <br /> Docker Desktop 3.6</h1>
                <h3>Learn about improved Volume Management, <br />
                    Docker Dev Environments Tech Preview<br />
                    and more in the latest release.</h3>
                <div className="action-btn">
                    <Link to="/">Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
