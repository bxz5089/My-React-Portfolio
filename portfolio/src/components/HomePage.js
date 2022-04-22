import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HomePageImg from '../assets/images/jon-asleeb-widepicture.jpg';
import MyProfileImg from '../assets/images/my-picture.jpg';
import ProjectImg from '../assets/images/ilya-pavlov-coding.jpg';
import ResumeImg from '../assets/images/heidi-kaden-philadelphia.jpg';

function HomePage() {
    return (

        <div class="container">

            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
                
                <div className="main-picture contentBox">
                    <img src={HomePageImg}/>
                    <h1>Hello, welcome to my portfolio.</h1>
                </div>
                <div className="content">
                    <div className="contentBox" id="about-me">
                        <img src={MyProfileImg}/>
                        <h2>About Me</h2>
                        <p>
                        Junior front-end web developer skilled in HTML, CSS, and JavaScript and excels in code organization, teamwork, and web designs. Worked with senior developers on cross-platform healthcare applications using Ionic Framework, HTML, CSS, and AngularJS, with responsive design in mind. Gained years of experience working in the healthcare field, and understand the importance of clear communication and HIPPA security rules, which can be applied to application development. Strengthened full-stack coding experience and skill at Penn LPS Coding Bootcamp.
                        </p>
                        <Link to="/aboutmepage" className="nav-link"><button className="portfolioBtn">About Me</button></Link>
                    </div>
                    <div className="contentBox" id="coding-projects">
                        <img src={ProjectImg}/>
                        <h2>Coding Projects</h2>
                        <p>
                        Here are some of the coding projects that I have completed during my time at Penn LPS Coding Bootcamp. I will be adding more projects I completed on my own in the future.                        </p>
                        <Link to="/projectspage" className="nav-link"><button className="portfolioBtn">Projects</button></Link>
                    </div>
                    <div className="contentBox" id="resume">
                        <img src={ResumeImg}/>
                        <h2>Resume</h2>
                        <p>
                        My resume is located on the resume page, where you can learn more about my background and experiences. Feel free to download my resume, thank you.                        </p>
                        <Link to="/resumepage" className="nav-link"><button className="portfolioBtn">Projects</button></Link>
                    </div>
                </div>
   
            </div> 
        
        </div>

    );
}

export default HomePage;