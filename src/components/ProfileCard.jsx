import "./ProfileCard.css";
var profile = require('../utils/profile.json');

export function ProfileCard() {

    var imagesPath = "/images/profile/";
    var socials = profile.social;

    return(
        <div className="card">            
            <img src={`${imagesPath}${profile.image}`} 
                className="card-img-top" 
                alt={profile.fullname} />
                
            <h5 className="card-header">{profile.fullname}</h5>

            <div className="card-body">
                <p className="card-text">{profile.title}</p>
                
                <p className="home-text">
                    <img className="home-img"
                        src={`${imagesPath}home.png`}
                        alt={profile.city} /> {profile.city}</p>
            </div>

            <div className="card-footer">
                { socials ? socials.map( (social) => 
                    <a href={social.link} 
                        target="_blank" 
                        rel="noreferrer"
                        key={social.name}>

                        <img className="social-img img-thumbnail" 
                            src={`${imagesPath}${social.image}`} 
                            alt={social.name}
                            title={social.name} />
                    </a>
                ) : '' }
            </div>
        </div>
    );
}