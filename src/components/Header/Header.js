import React, { useState } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { FaEvernote, FaSistrix } from 'react-icons/fa';
import { nav } from './data'
import backGround from '../../images/header-image-no.png'
import './style.scss'

const Header = () => {

    const [show, setShow] = useState(false)
    const [classes, setClasses] = useState('')

    const submitHandle = (e) => async (data) => {
        e.preventDefault()
        console.log(await data);

    }

    const barHandle = (e) => {
        e.preventDefault()

        if (classes.length) {
            setClasses('')
        }
        else {
            setClasses('bar ')
        }
    }

    return (
      
            <div className="header">
                <div className="container">
                    <div className="wrapper">
                        <div className="logo">
                            <Link to="/" className="brand_logo">
                                <FaEvernote className="logo_icon" />

                            </Link>
                        </div>
                        <div className="navbar">
                            <nav>
                                <ul>
                                    {
                                        nav.map((datas, indx) => {
                                            const { name, path, submenu } = datas;
                                            return (
                                                <>
                                                    <li key={indx} className={submenu ? 'sub_nav' : ''} > <NavLink to={path}> {name}</NavLink>
                                                        {
                                                            submenu && <ul className="submenu">
                                                                {
                                                                    submenu.map((menu, index) => {
                                                                        const { path, name } = menu;
                                                                        return (
                                                                            <li key={index}> <NavLink to={path} className="nav_item"> {name} </NavLink> </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>

                            <div className="right_menu">
                                <div className="search_bar">
                                    {show && <input type="text" onKeyUp={(e) => submitHandle(e.target.value)} className="search_field" placeholder="Search..." />}
                                    <FaSistrix className="search_icon" onClick={() => setShow(!show)} />
                                </div>
                                <Link to="/signin">Sign In</Link>
                                <Link to="/" className="started_btn">Get Started</Link>
                            </div>
                        </div>
                        <button className="bars" onClick={barHandle}>
                            <div className={`${classes}bar-1`}></div>
                            <div className={`${classes}bar-2`}></div>
                            <div className={`${classes}bar-3`}></div>
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default Header
