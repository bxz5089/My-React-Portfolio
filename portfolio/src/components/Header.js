import React, { useState } from 'react';

function Header () {
    return (
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
        </div>
    )
}

export default Header;