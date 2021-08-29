import React, { useEffect } from 'react'
import './Featured_card.scss';
import trusted_img from '../../images/trusted_content_logos.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Featured_card = () => {
    useEffect(() =>{
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="featured_section">
            <div className="container">
                <div  className="card">
                    <div className="image_wrap" style={{ backgroundImage: "url(" + `${trusted_img}` + ")" }} ></div>
                    <div className="text_wrap">
                        <h6>WHAT'S NEW</h6>
                        <h4 data-aos-duration="3000" data-aos="fadeUp">Docker Expands Trusted Content Offerings for Developers</h4>
                        <p>New collaborations with AWS, Datadog, Mirantis, Red Hat, VMware and other industry leaders expand access to trusted application building blocks to more than eight million registered Docker developers.</p>
                        <Link to="" >Learn More</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured_card
