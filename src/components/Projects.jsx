import { useEffect, useState } from "react";
import projectsJSON from '../utils/projects.json'
import "./Projects.css";
import { Link } from "react-router-dom";

export function Projects(){
    var imagesPath = "/images/projects/";
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProjects() {
        setProjects(projectsJSON)
        setLoading(false)
    }

    useEffect(()=>{
        fetchProjects()
    },[])


    if(loading){
        return(<h1>Loading...</h1>);
    } else {
        return(
            <section className="project-container row mb-5">
                <h2>Proyectos</h2>
                { projects ? projects.map( (project) => 
                <div className="col-12 col-md-6 project-box p-2" key={project.name}>
                    <div className="row">
                        <a className="col"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer">
                            <img
                                className="img-fluid project-img"
                                src={`${imagesPath}${project.image}`}
                                alt={project.name}
                                title={`${project.name} - ${project.technology}`} />
                            <div className="centrado text-shadow">
                                {project.name}
                            </div>
                        </a>
                        <div className="col card description-card m-2 sombrear">
                            <div className="card-title fs-5">Hecho con {project.technology}</div>
                            <div className="card-text fs-5">{project?.description}</div>
                        </div>

                    </div>
                </div>
                ) : '' }
            </section>
        );
    }
}