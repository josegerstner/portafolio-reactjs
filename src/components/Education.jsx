import { useEffect, useState } from "react";
// import { API_URL } from "../config";
import educationJSON from '../utils/education.json'
import "./Education.css"

export function Education(){
    var imagesPath = "/images/education/";
    const [education, setEducation] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchEducation() {
        // const response = await fetch(`${API_URL}education`)
        // const data = await response.json()
        setEducation(educationJSON)
        setLoading(false)
    }

    useEffect(()=>{
        fetchEducation()
    },[])
    
    if(loading){
        return(<h1>Loading...</h1>)
    } else {
        return(
            <div className='container my-5'>
                <h2>Educación</h2>
                { education ? education.map( (college) => 
                <div className='row' key={college.name}>
                    <div className='col-12 col-md-3'>
                        <div className='row'>
                            <a href={college.link} 
                                target="_blank" 
                                rel="noreferrer"
                                title={college.name}>
    
                                <img className="edu-img" 
                                    src={`${imagesPath}${college.image}`} 
                                    alt={college.name} />
                            </a>
                        </div>
                    </div>
    
                    <div className='col-12 col-md-9'>
                        <p className="container edu-text">
                            <span className="fw-bold">{college.name}</span><br />
                            <span className="fs-5 text-muted">{college.dates}</span><br />
                            <span className="fs-4 fw-normal">{college.title}</span><br />
                        </p>
                    </div>
                    <hr />
                </div>
                ) : '' }
            </div>
        );
    }
}