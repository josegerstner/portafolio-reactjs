import { useEffect, useState } from "react";
import jobsJSON from "../utils/jobs.json";
import "./Jobs.css";

export function Jobs(){
    var imagesPath = "/images/jobs/";
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchJobs() {
        setJobs(jobsJSON)
        setLoading(false)
    }

    useEffect(()=>{
        fetchJobs()
    },[])
    
    if(loading){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className='mb-5'>
                <h2 className="col-12">
                    Experiencia laboral
                </h2>
                { jobs ? jobs.map( (job) => 
                <div className='row job-box' key={`${job.name}${job.dates}`}>
                    <div className='col-12 col-md-3 text-center mb-3'>
                        <div className='row'>
                            <a href={job.link} 
                                target="_blank" 
                                rel="noreferrer">

                                <img className="job-img img-fluid" 
                                    src={`${imagesPath}${job.image}`} 
                                    alt={job.name} />
                            </a>
                        </div>

                        
                    </div>

                    <div className='col-12 col-md-9'>
                        <div className="container text-start">
                            <p className="fw-bold">{job.name}</p>
                            <p className='fs-4 text-muted'>{job.dates}</p>
                            <p className="fs-4 fw-normal">{job.job}</p>
                            <p className="fs-5 text-break fw-light">{job.tasks}</p>
                        </div>
                    </div>
                    <hr />
                </div>
                ) : '' }
            </div>
        );
    }
}