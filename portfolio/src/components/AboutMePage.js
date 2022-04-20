import React, { useState } from 'react';

function AboutMePage() {
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
                
           
                <div className="aboutMeCard contentBox">
                    <img src="./images/myLinkedIn.png" className="card-img-top aboutMeImg" alt="..." width="1000" height="500"/>
                    <div className="aboutMeContent">
                        <h5>My LinkedIn</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://www.linkedin.com/in/bowen-zheng-05942713a/"><button className="portfolioBtn">LinkedIn</button></a>
                    </div>
                </div>

        
                <div className="aboutMeCard contentBox">
                    <img src="./images/myGitHub.png" className="card-img-top aboutMeImg" alt="..." width="1000" height="500"/>
                    <div className="aboutMeContent">
                        <h5>My GitHub</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://github.com/bxz5089"><button className="portfolioBtn">GitHub</button></a>
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
    )
}

export default AboutMePage;