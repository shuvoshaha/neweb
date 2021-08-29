import React from 'react';
import { Link } from 'react-router-dom';
import './Number_section.scss'

const Number_section = () => {
    return (
        <div className="number_section">
            <div className="container">
                <div className="number_content">
                    <h1>Accelerate how you build, share, and run modern applications.</h1>
                    <div className="number_row">
                        <div className="number_item">
                           <p>
                               <span>11 million +</span><br />
                               developers
                           </p>
                        </div>
                        <div className="number_item">
                           <p>
                               <span>13 million +</span><br />
                               applications
                           </p>
                        </div>
                        <div className="number_item">
                           <p>
                               <span>13 billion +</span><br />
                               monthly image downloads
                           </p>
                        </div>
                    </div>
                    <Link className="number_link" to="">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Number_section
