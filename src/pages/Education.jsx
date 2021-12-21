import "./Education.css";
var education = require('../utils/education.json');

export function Education(){
    var imagesPath = "/images/education/";
    
    return(
        <div className='container'>
            { education ? education.map( (college) => 
            <div className='row edu-box' key={college.name}>
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
                    <div className="container edu-text">
                        <p className="text-break">
                            <span className="edu-name">{college.name}</span><br />
                            <span className="edu-dates">{college.dates}</span><br />
                            <span className="edu-title">{college.title}</span><br />
                        </p>
                    </div>
                </div>
                <hr />
            </div>
            ) : '' }
        </div>
    );
}