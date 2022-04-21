import React, { useState } from 'react';

function AboutMePage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">                
           
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

            </div>
        </div>
    </div>
    )
}

export default AboutMePage;