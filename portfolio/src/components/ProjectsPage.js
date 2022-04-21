import React, { useState } from 'react';

function ProjectsPage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
            
                <div className="contentBox" id="coding-projects-page">
                
                    <a href="https://bxz5089.github.io/Project-1-Coundown-Games/" target="_blank"><h2>Project: Coundown-Games</h2></a>
                    <a href="https://github.com/bxz5089/Countdown-Games"><button className="portfolioBtn projectBtn">GitHub</button></a>
                
                    

                    <p>Timer (Countdown) based game application project featuring Trivia and Hangman.</p>
                    
                
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/HomePage.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/TriviaChallenge.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/Hangman.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/Scoreboard.png" width="500" height="500"/>
                    
                    

                </div>
                <div className="contentBox" id="coding-projects-page">
                    
                    <a href="https://infinite-caverns-73704.herokuapp.com/" target="_blank"><h2>Project Cumulus Chat</h2></a>
                    <a href="https://github.com/bxz5089/Cumulus-Chat"><button className="portfolioBtn projectBtn">GitHub</button></a>

                    <p>This is a web chat application that enables users to communicate with each other in a virtual chatroom.  

                        This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.
                        
                        This web application is built using Node, Express, Sequelize, MySQL, Bootstrap, Handlebars,  Socket.io, and it is deployed to Heroku.
                        </p>
                
                    <img src="images/CumulusChat1.png" width="500" height="500"/>
                    <img src="images/CumulusChat2.png" width="500" height="500"/>
                    <img src="images/CumulusChat3.png" width="500" height="500"/>
                    
                    

                </div>
                <div className="contentBox" id="coding-projects-page">
                    
                    <a href="https://bxz5089.github.io/Code_Quiz/" target="_blank"><h2>Code Quiz</h2></a>
                    <a href="https://github.com/bxz5089/Countdown-Games"><button className="portfolioBtn projectBtn">GitHub</button></a>

                    <p>This is a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.</p>
                
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot1.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot2.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot3.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot4.png" width="500" height="500"/>
                    

                </div>

            </div>
        </div>
    </div>
    );
}

export default ProjectsPage;