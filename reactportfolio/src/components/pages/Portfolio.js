import React from "react";
import project4 from "../assets/project4.png";
import ReadmeGenerator from "../assets/ReadmeGenerator.png";

const Portfolio = () => (
    <section>
       <section id="projects"> 
       <h2>PROJECTS</h2>
        <div class ="container-project">
           <div class="project-card">
                <img class="project-image" src="./dayPlanner.png" alt="project one image"/>
                <h3>DAILY PLANNER</h3>
                <p class = "subtext">Bootstrap, Jquery. </p>
                <hr/>
                <p class="project-description"><a class="project-link"href="https://github.com/satpalmatharoo/dayplanner">VIEW</a> 
                    <a class="live link"href="https://satpalmatharoo.github.io/dayplanner/">LIVE</a></p>
            </div>
            <div class="project-card">
                <img class="project-image" src="Assets\TeamProfiler.png" alt="project one image"/>
                <h3>TEAM PROFILER</h3>
                <p class = "subtext"> NODE </p>
                <hr/>
                <p class="project-description"><a class="project-link"href="https://github.com/satpalmatharoo/TeamProfileGenerator">VIEW</a>
                    <a class="live link"href="https://watch.screencastify.com/v/m2S0C3kUJAHGpyNlOmmI">LIVE</a></p>
                    </div>
            <div class="project-card">
            <img src={ReadmeGenerator} className="imgstyling" alt="ReadmeGenerator img" />
                <h3>README GENERATOR</h3>
                <p class = "subtext"> NODE js Command Line </p>
                <hr/>
                <p class="project-description"><a class="project-link"href="https://github.com/satpalmatharoo/ReadMe-Generator">VIEW</a></p>
                <a class="live link"href="https://drive.google.com/file/d/1TAWB-_ezxURLw5JqF2SmlGKWcuVDC2LA/view">LIVE</a> 
            </div>
            <div class="project-card">
                <div className="project-image" style={{ backgroundImage: `url(${project4})`}} alt="project three image"/>
                <h3>RSV MOTIVATION</h3>
                <p class = "subtext"> API and Jquery</p>
                <hr/>
                <p class="project-description"><a class="project-link"href="https://github.com/satpalmatharoo/RSV-Project-1">VIEW</a></p>
                <a class="live link"href="https://satpalmatharoo.github.io/RSV-Project-1/">LIVE</a> 
  
            </div>
            </div>
            </section>  
        

    </section>

    
);

export default Portfolio;