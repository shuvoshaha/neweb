import React from 'react'
import './Image_text.scss'
import Image1 from '../../images/11.jpg'

const Image_text = () => {
    return (
        <div className="image_text">
            <div className="container">
                <div className="image_text_header">
                    <div>
                        <h1>Docker makes development efficient and predictable</h1>
                        <h3>Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud. Docker’s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle.</h3>
                    </div>
                </div>
                <div className="image_text_row">
                    <div className="image_text_content">
                        <h2>Build</h2>
                        <ul>
                            <li>Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi container application using the Docker Compose CLI. </li>
                            <li>Integrate with your favorite tools throughout your development pipeline - Docker works with all development tools you use including VS Code, CircleCI and GitHub.</li>
                            <li>Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKS and more.</li>
                        </ul>
                    </div>
                    <div className="right_image_section">
                    <div className="image_text_thumb" style={{ backgroundImage: `url(${Image1})` }} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image_text
