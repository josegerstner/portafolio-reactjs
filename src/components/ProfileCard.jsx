import { useEffect, useState } from "react";
import profileJSON from '../utils/profile.json'
import Loading from "./Loading";
import "./ProfileCard.css";

export function ProfileCard() {

    var imagesPath = "/images/profile/";
    const [profile, setProfile] = useState({})
    const [socials, setSocials] = useState([])
    const [loading, setLoading] = useState(true)
    
    

    

    useEffect(()=>{
        const fetchProfile = () => {
            setProfile(profileJSON)
        }
        fetchProfile()
    },[])

    useEffect(()=>{
        const fetchSocials = () => {
            setSocials(profile.social)
        }
        fetchSocials()
        if(profile)
            setLoading(false)
    },[profile])

    if(loading){
        return(<Loading />);
    } else {
        return(
            <div className="card rounded-bottom mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-8 my-auto text-center text-md-end">
                        <h5 className="card-header pt-3 pe-0">{profile.fullname}</h5>
                        <p className="card-text">{profile.title}</p>
                        {/* <p className="home-text">
                            <img className="home-img"
                                src={`${imagesPath}home.png`}
                                alt={profile.city} /> {profile.city}</p> */}
                        <p>{ socials ? socials.map( (social) => 
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
                            <a className="btn btn-lg btn-download" 
                                    download 
                                    href="/files/cv.pdf" 
                                    role="button">
                                    Descargar CV
                                </a></p>
                    </div>

                    <div className="col-12 col-md-4">
                        <img src={`${imagesPath}${profile.image}`} 
                            className="card-img-top align-middle img-fluid mx-auto" 
                            alt={profile.fullname} />
                    </div>
                </div>
    
                
            </div>
        );
    }
}