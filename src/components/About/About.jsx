import React from "react";
import './About.css';

import photo from "../../images/abstract.jpg"

const About = ()=>
{
    return (
        <div className="about">
            <div className="about__image-container">
                <img className="about__image" src={photo} alt="about"></img>
            </div>
            <div className="about__description">
                <h2 className="about__title">About the author </h2>
                <p className="about__text">My name is Adamov Nias, and I am a passionate software developer specializing in web and mobile application development. I have extensive knowledge and experience in various development technologies including JavaScript, React, Node.js, and Unity for game development. My journey in the tech industry has equipped me with a solid understanding of front-end and back-end development, as well as a knack for problem-solving and creating efficient, user-friendly solutions.</p>
                <p className="about__text">I have had the opportunity to enhance my skills and knowledge through my experience with TripleTen. During my time there, I deepened my understanding of full-stack development, honed my skills in working with APIs, and learned the importance of agile methodologies and teamwork in delivering successful projects.</p>
            </div>
        </div>
    );
}

export default About;