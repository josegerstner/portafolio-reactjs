import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "./Jobs.css";

export function Jobs(){
    var imagesPath = "/images/jobs/";
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchJobs() {
        const response = await fetch(`${API_URL}jobs`)
        const data = await response.json()
        setJobs(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchJobs()
    },[])
    
    if(loading){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className='container job-container'>
                { jobs ? jobs.map( (job) => 
                <div className='row job-box' key={`${job.name}${job.dates}`}>
                    <div className='col-12 col-md-3 text-center'>
                        <div className='row job-end'>
                            <a href={job.link} 
                                target="_blank" 
                                rel="noreferrer">

                                <img className="job-img" 
                                    src={`${imagesPath}${job.image}`} 
                                    alt={job.name} />
                            </a>
                        </div>

                        <div className='job-dates'>
                            {job.dates}
                        </div>
                    </div>

                    <div className='col-12 col-md-9'>
                        <div className="container job-text">
                            <p className="text-break">
                                <span className="job-name fw-bold">{job.name}</span><br />
                                <span className="job-job">{job.job}</span><br />
                                <span className="job-tasks">{job.tasks}</span><br />
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
                ) : '' }
            </div>
        );
    }
}