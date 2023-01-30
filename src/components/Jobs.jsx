import { useEffect, useState } from "react";
import jobsJSON from "../utils/jobs.json";
import "./Jobs.css";

export function Jobs(){
    var imagesPath = "/images/jobs/";
    const LIMIT = 6 // TOTAL DE JOBS
    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showMoreJobs, setShowMoreJobs] = useState(false)

    async function fetchJobs() {
        setJobs(jobsJSON)
    }

    useEffect(()=>{
        fetchJobs()
    },[])
    
    useEffect(()=>{
        showSomeJobs(3)
        setLoading(false)
    },[jobs])

    async function showSomeJobs(limit){
        for(let i=0; i<=limit-1; i++){
            let elemento = document.getElementById(`${i+1}-job`)
            if(elemento?.classList.contains('hide')) {
                elemento.classList.remove('hide')
            } elemento?.classList.add('show')
        }

        if(limit<LIMIT){
            for(let i=limit-1; i<=LIMIT-1; i++){
                let elemento = document.getElementById(`${i+1}-job`)
                if(elemento?.classList.contains('show')) {
                    elemento.classList.remove('show')
                } elemento?.classList.add('hide')
            }
        }
    }

    function moreJobs(e){
        e.preventDefault()

        if(!showMoreJobs){showSomeJobs(LIMIT)}
        else {showSomeJobs(3)}
        setShowMoreJobs(!showMoreJobs)
    }
    
    if(loading){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className='job-container mt-5'>
                <h2 className="col-12">
                    <span className="job-title">Experiencia laboral</span>
                </h2>
                { jobs ? jobs.map( (job) => 
                <div className='row hide' key={`${job.name}${job.dates}`} id={`${job.id}-job`}>
                    <div className='col-12 col-md-3 text-center'>
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

                    <div className='col-12 col-md-9 job-box'>
                        <div className="container text-center text-md-start">
                            <p className="fw-bold">{job.name}</p>
                            <p className='fs-4 text-muted'>{job.dates}</p>
                            <p className="fs-4 fw-normal">{job.job}</p>
                            <p className="fs-5 mt-3 text-break fw-light">{job.tasks}</p>
                        </div>
                    </div>
                    <hr />
                </div>
                ) : '' }
                <button 
                    type="button" 
                    className="btn btn-lg btn-dark" 
                    onClick={(e) => moreJobs(e)}>
                    {!showMoreJobs?'Ver más trabajos':'Ver menos trabajos'}
                </button>
            </div>
        );
    }
}