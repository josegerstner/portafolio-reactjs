import { useEffect, useState } from "react";
import { API_URL } from "../config";
import "./ProfileCard.css";

export function ProfileCard() {

    var imagesPath = "/images/profile/";
    const [profile, setProfile] = useState({})
    const [socials, setSocials] = useState([])
    const [loading, setLoading] = useState(true)
    
    async function fetchProfile() {
        const response = await fetch(`${API_URL}profile`)
        const data = await response.json()
        setProfile(data)
    }

    async function fetchSocials() {
        const response = await fetch(`${API_URL}social_profile`)
        const data = await response.json()
        setSocials(data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchProfile()
        fetchSocials()
    },[])


    if(loading){
        return(<h1>Loading...</h1>);
    } else {
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
                    <div>
                        <a className="btn btn-download btn-sm" 
                            download 
                            href="/files/cv.pdf" 
                            role="button">
                            Descargar CV
                        </a>
                    </div>
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
}