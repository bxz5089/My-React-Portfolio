import React, { useState } from 'react';

function HomePage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBarStyle contentBox">
                    <a className="navbar-brand" href="index.html">Bowen <span className="lastname">Zheng</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav" id="portfolioNav">
                        <li className="nav-item" ><a className="nav-link myTab active" href="index.html">Home</a></li> 
                        <li className="nav-item" ><a className="nav-link myTab" href="aboutMe.html">About Me</a></li>
                        <li className="nav-item" ><a className="nav-link myTab" href="myProjects.html">My Projects</a></li>
                        <li className="nav-item" ><a className="nav-link myTab" href="myResume.html">My Resume</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="main-picture contentBox">
                    <img src="images/jon-asleeb-widepicture.jpg"/>
                    <h1>Hello, welcome to my portfolio.</h1>
                </div>
                <div className="content">
                    <div className="contentBox" id="about-me">
                        <a href="aboutMe.html"></a><img src="images/my-picture.jpg"/>
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
                <footer className="footer contentBox">
                    <h2>Made by Bowen Z.</h2>
                    <h3>Contact Info</h3>
                    <p>Email: bxz5089@gmail.com</p>
                </footer> 
            </div> 
        </div>
        </div>

    );
}

export default HomePage;