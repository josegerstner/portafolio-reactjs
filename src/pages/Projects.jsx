import "./Projects.css";
var projects = require('../utils/projects.json');

export function Projects(){
    var imagesPath = "/images/projects/";

    return(
        <div className="container row">
            { projects ? projects.map( (project) => 
            <div className="col-6 project-box">
                <span className="project-name">{project.name}</span>
                
                <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                        className="project-img"
                        src={`${imagesPath}${project.image}`}
                        alt={project.name} /></a>
            </div>
            ) : '' }
        </div>
    );
}