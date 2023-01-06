import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "./Projects.css";

export function Projects(){
    var imagesPath = "/images/projects/";
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProjects() {
        const response = await fetch(`${API_URL}projects`)
        const data = await response.json()
        setProjects(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchProjects()
    },[])


    if(loading){
        return(<h1>Loading...</h1>);
    } else {
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
}