import React, { useState } from 'react';

function ProjectsPage() {
    return (

        <div class="container">
     
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
            
                <div className="contentBox" id="coding-projects-page">
                
                    <h2>Project: Coundown-Games</h2>
                    <a href="https://github.com/bxz5089/Countdown-Games" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">GitHub</button></a>
                    <a href="https://bxz5089.github.io/Project-1-Coundown-Games/" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">Deployed</button></a>                
                    
                    <p>Timer (Countdown) based game application project featuring Trivia and Hangman.</p>
                    
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/HomePage.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/TriviaChallenge.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/Hangman.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Project-1-Coundown-Games/raw/main/assets/img/Scoreboard.png" width="500" height="500"/>
                    
                </div>

                <div className="contentBox" id="coding-projects-page">
                    
                    <h2>Project Cumulus Chat</h2>
                    <a href="https://github.com/bxz5089/Cumulus-Chat" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">GitHub</button></a>
                    <a href="https://infinite-caverns-73704.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">Deployed</button></a>

                    <p>This is a web chat application that enables users to communicate with each other in a virtual chatroom.  

                        This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.
                        
                        This web application is built using Node, Express, Sequelize, MySQL, Bootstrap, Handlebars,  Socket.io, and it is deployed to Heroku.
                        </p>
                
                    <img src="https://github.com/bxz5089/Cumulus-Chat/raw/main/public/assets/ScreenShot1.png" width="500" height="500"/>
                    {/* <img src="https://github.com/bxz5089/Cumulus-Chat/raw/main/public/assets/ScreenShot2.png" width="500" height="500"/> */}
                    <img src="https://user-images.githubusercontent.com/94097708/159130156-30e289ac-5a7b-4fe8-9f2b-2b0e67efa055.png" width="500" height="500"/>
                    
                </div>

                <div className="contentBox" id="coding-projects-page">
                    
                    <h2>Code Quiz</h2>
                    <a href="https://github.com/bxz5089/Countdown-Games" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">GitHub</button></a>
                    <a href="https://bxz5089.github.io/Code_Quiz/" target="_blank" rel="noopener noreferrer"><button className="portfolioBtn projectBtn">Deployed</button></a>

                    <p>This is a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.</p>
                
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot1.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot2.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot3.png" width="500" height="500"/>
                    <img src="https://github.com/bxz5089/Bootcamp_homework4_Code_Quiz/raw/main/assets/screenshot4.png" width="500" height="500"/>
                    
                </div>

            </div>
        
        </div>
 
    );
}

export default ProjectsPage;