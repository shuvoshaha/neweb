import React from 'react';
import './style.scss'
import data from './data'
import { FaEvernote } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <Link to="/" className="brand_logo">
                            <FaEvernote className="logo_icon" />
                        </Link>
                    </div>
                    <div className="footer_nav_section">
                        <div className="footer_nav_item">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav_item">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav_item">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav_item">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                            </ul>
                        </div>
                        <div className="footer_nav_item">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                                <li><Link to="/">Link-1</Link></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default index
