import "./ProfileCard.css";
var profile = require('../utils/profile.json');

export function ProfileCard() {

    // var imagesPath = "/images/";

    return(
        <div className="card">            
            <img src={`/images/${profile.image}`} className="card-img-top" alt={profile.fullname} />
            <h5 className="card-header">{profile.fullname}</h5>
            <div className="card-body">
                <p className="card-text">{profile.title}</p>
                <p className="card-text-sub">en progreso</p>
                <p className="home-text"><img className="home-img" src={`/images/home.png`} alt={profile.city} /> {profile.city}</p>
                <img className="home-img" src={`/images/home.png`} alt={profile.city} />
            </div>
        </div>
    );
}