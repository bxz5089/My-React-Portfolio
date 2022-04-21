import React, { useState } from 'react';
import HomePageImg from '../assets/images/jon-asleeb-widepicture.jpg';
import MyProfileImg from '../assets/images/my-picture.jpg';
import ProjectImg from '../assets/images/ilya-pavlov-coding.jpg';
import ResumeImg from '../assets/images/heidi-kaden-philadelphia.jpg';

function HomePage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
                
                <div className="main-picture contentBox">
                    <img src={HomePageImg}/>
                    <h1>Hello, welcome to my portfolio.</h1>
                </div>
                <div className="content">
                    <div className="contentBox" id="about-me">
                        <a href="aboutMe.html"></a><img src={MyProfileImg}/>
                        <h2>About Me</h2>
                        <p>
                        Junior Web Developer Skilled in HTML, CSS, and JavaScript and excels in code organization, teamwork, and web designs. Worked with senior developers on cross-platform healthcare applications using Ionic Framework, HTML, CSS, and AngularJS, with responsive design in mind. Gained years of experience working in the healthcare field, and understand the importance of clear communication and HIPPA security rules, which can be applied to application development. Strengthened full-stack coding experience and skill at Penn LPS Coding Bootcamp.
                        </p>
                        <a href="aboutMe.html"><button className="portfolioBtn">About Me</button></a>
                    </div>
                    <div className="contentBox" id="coding-projects">
                        <a href="myProjects.html"><img src={ProjectImg}/></a>
                        <h2>Coding Projects</h2>
                        <p>
                            Here are some of the coding projects that I have completed.
                        </p>
                        <a href="myProjects.html"><button className="portfolioBtn">Projects</button></a>
                    </div>
                    <div className="contentBox" id="resume">
                        <a href="myResume.html"><img src={ResumeImg}/></a>
                        <h2>Resume</h2>
                        <p>
                            My resume is located in the resume page, where you can learn more about my background.
                        </p>
                        <a href="myResume.html"><button className="portfolioBtn">Resume</button></a>
                    </div>
                </div>
   
            </div> 

        </div>
        </div>

    );
}

export default HomePage;