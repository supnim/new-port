import React from 'react'
import Img from 'gatsby-image'
import "../utils/css/components/hero.scss"

// import "..css/components/hero.css"

const hero = () => {
    return (
    <div className="container">
        <h1>I am a dickhead</h1>
        <div className="hero-image">
            <Img />
        </div>
        <div className="intro">
            <h3>Brief</h3>
            <p>in this project wanted to eradicate wallets</p>
        </div>
    </div>
    );
}

export default hero;
