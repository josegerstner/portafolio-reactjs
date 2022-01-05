import "./Projects.css";
var projects = require('../utils/projects.json');

export function Projects(){
    var imagesPath = "/images/projects/";

    return(
        <section className="project-container row">
            { projects ? projects.map( (project) => 
            <div className="col-12 col-md-6 project-box" key={project.name}>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer">
                    <img
                        className="img-fluid"
                        src={`${imagesPath}${project.image}`}
                        alt={project.name}
                        title={`${project.name} - ${project.technology}`} />
                </a>
                    <div className="centrado">{project.name}</div>
            </div>
            ) : '' }
        </section>
    );
}