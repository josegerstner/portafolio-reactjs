import { useEffect, useState } from "react";
import profileJSON from '../utils/profile.json'
import Loading from "./Loading";
import "./ProfileCard.css";

export function ProfileCard() {

    var imagesPath = "/images/profile/";
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const email = "joseernestogerstnerjavid@gmail.com"    

    useEffect(()=>{
        const fetchProfile = () => {
            setProfile(profileJSON)
        }
        fetchProfile()
    },[])

    useEffect(()=>{
        if(profile)
            setLoading(false)
    },[profile])

    function handleClick(e) {
        e.preventDefault()

        // Get the text field
        var copyText = email
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);
        // Alert the copied text
        setShowModal(true)
    }
    
    useEffect(()=>{
        if(showModal)
            setTimeout(function() {setShowModal(false)}, 2000)
    },[showModal])

    if(loading){
        return(<Loading />);
    } else {
        return(
            <div className="profile-container row">
                <div className="row modal-container">
                    <div className={`col-3 order-last toast bg-success text-white fade ${showModal?'show':''}`}>
                        <div className="toast-header bg-success text-white my-3">
                            <strong className="me-auto">Email copiado correctamente</strong>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 my-auto text-center text-md-end">
                        <h5 className="profile-header pt-3 pe-0">José Gerstner</h5>
                        <p className="profile-text">Fullstack Developer</p>
                        <p>
                            <a href="https://www.linkedin.com/in/jos%C3%A9-ernesto-gerstner-javid/"
                                target="_blank" 
                                rel="noreferrer"
                                className="col"
                                key="LinkedIn">
            
                                <img className="social-img img-thumbnail" 
                                    src={`${imagesPath}linkedin.png`}
                                    alt="LinkedIn"
                                    title="LinkedIn" />
                            </a>
                            <a href="https://github.com/josegerstner"
                                target="_blank" 
                                rel="noreferrer"
                                className="col"
                                key="Github">
            
                                <img className="social-img img-thumbnail" 
                                    src={`${imagesPath}github.png`}
                                    alt="Github"
                                    title="Github" />
                            </a>
                            <a className="btn btn-lg btn-success btn-download col" 
                                download 
                                href="/files/CV José Gerstner.pdf"
                                role="button">
                                Descargar CV
                            </a>
                        </p>
                            
                        <div className="dropdown-center">
                            <button className="btn btn-dark dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="email">
                                {email}
                            </button>
                            <ul className={`dropdown-menu dropdown-menu-dark dropdown-menu-end`}>
                                <li>
                                    <button
                                        className="dropdown-item btn btn-lg" 
                                        type="button" onClick={(e) => handleClick(e)}>Copiar correo</button></li>
                                <li><a 
                                    className="dropdown-item btn btn-lg"
                                    href="mailto:joseernestogerstnerjavid@gmail.com"
                                    target="_blank" 
                                    rel="noreferrer">Enviame un correo</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 align-start">
                        <img src={`${imagesPath}avatar.png`} 
                            className="card-img-top mx-auto float-md-start" 
                            alt="José Gerstner" />
                    </div>
                </div>
                
            </div>
        );
    }
}