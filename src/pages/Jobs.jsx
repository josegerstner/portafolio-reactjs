import "./Jobs.css";
var jobs = require('../utils/jobs.json');

export function Jobs(){
    var imagesPath = "/images/";

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