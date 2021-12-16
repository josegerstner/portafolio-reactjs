import "./Education.css";
var education = require('../utils/education.json');

export function Education(){
    var imagesPath = "/images/";
    
    return(
        <div className='container'>
            { education ? education.map( (college) => 
            <div className='row edu-box' key={college.name}>
                <div className='col-3 text-end'>
                    <div className='row'>
                        <a href={college.link} 
                            target="_blank" 
                            rel="noreferrer">

                            <img className="edu-img" 
                                src={`${imagesPath}${college.image}`} 
                                alt={college.name} />
                        </a>
                    </div>

                    <div className='row edu-dates'>
                        {college.dates}
                    </div>
                </div>

                <div className='col-9'>
                    <div className="container edu-text">
                        <p className="text-break">
                            <span className="edu-name fw-bold">{college.name}</span><br />
                            <span className="edu-title">{college.title}</span>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
            ) : '' }
        </div>
    );
}