import React, { useState } from 'react';

import ResumeImg1 from '../assets/images/my-resume1.png';
import ResumeImg2 from '../assets/images/my-resume2.png';

function ResumePage() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
            
                <div className="contentBox" id="resumepage">
                    
                    <a href="myResume.html"><h2>Resume</h2></a>
                    <p>
                        Here is my current resume. Thank you. 
                    </p>
                    <a href="https://docs.google.com/document/d/1UyUp_8nYj6dL--icBLpuA46jIWLPIT5YVSXoxaUvlW0/edit?usp=sharing"><button className="portfolioBtn downloadBtn">Download</button></a> 

                    <div className="resumeImg">
                         <img src={ResumeImg1} width="530" height="690"/>
                         <img src={ResumeImg2} width="530" height="690"/>
                    </div>
                  
                </div>
            
            </div> 
        </div>
    </div>
    );
}

export default ResumePage;