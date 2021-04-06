import React from 'react';
import cark from './cark.jfif'
import dond from './dond.jpg'

const Welcome = () => {
    return (
        <div>
            <div className="testimonials">
            <img className ="maintitle" src="https://fontmeme.com/permalink/210406/3e2b20ba37da0c3086bfa576311507bb.png" alt="super-mario-font" border="0"></img>
            <h2 className="welcomeheader">"Where Productivity and Gaming Collide"</h2>
            <p>What is React 1UP?</p>
            <p>This application was created for the purpose of bridging the gap between gamers and doers to allow for the maximum output of work and play.</p>
            <h2>Testimonials</h2>
            <img src={cark} id="cark"/>
            <p id="carkquote">"React 1UP is going to be so hip with the kids. They will always 1UP the competition." 
            - <strong>Cark Muban</strong></p>
            <img src={dond} id="dond"/>
            <p id="dondquote">"I just recently invested in React 1UP with the profits I made from my chair collection sales. - <strong>Don Jaymond</strong></p>
            </div>
        </div>
    )
}

export default Welcome;