import React, { useState } from 'react';
import HomePagePic from '../assets/images/jon-asleeb-widepicture.jpg'
import MyProfilePic from '../assets/images/my-picture.jpg'

function HomePage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
                
                <div className="main-picture contentBox">
                    <img src={HomePagePic}/>
                    <h1>Hello, welcome to my portfolio.</h1>
                </div>
                <div className="content">
                    <div className="contentBox" id="about-me">
                        <a href="aboutMe.html"></a><img src={MyProfilePic}/>
                        <h2>About Me</h2>
                        <p>
                            I am currently working as a part time developer in a startup healthcare tech company, learning to code as I go. I am hoping to learn more about coding as I complete this online bootcamp and beyond. 
                        </p>
                        <a href="aboutMe.html"><button className="portfolioBtn">About Me</button></a>
                    </div>
                    <div className="contentBox" id="coding-projects">
                        <a href="myProjects.html"><img src="images/ilya-pavlov-coding.jpg"/></a>
                        <h2>Coding Projects</h2>
                        <p>
                            Here are some of the coding projects that I have completed.
                        </p>
                        <a href="myProjects.html"><button className="portfolioBtn">Projects</button></a>
                    </div>
                    <div className="contentBox" id="resume">
                        <a href="myResume.html"><img src="images/heidi-kaden-philadelphia.jpg"/></a>
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