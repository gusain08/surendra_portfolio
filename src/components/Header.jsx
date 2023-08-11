import React from 'react'
import './header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <>
            <>
              <div className="header_wrapper">
              <header>

                <div className="logo_wrapper">
                <a href="index.html" className="logo">
                        SURENDRA GUSAIN
                    </a>
                 
                </div>
                <div className={`nav ${toggle && 'nav-left'}`}>
                    <div className="nav-content">
                        <button className="cross-btn" onClick={()=>setToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                        </button>
                        <ul>
                            <li>
                              
                                <a href="">Home</a>
                            </li>
                            <li>
                             
                                <a>About us</a>
                            </li>
                            <li>
                                <a href="#"> products </a>
                            </li>
                            <li>
                                <a href="#"> what we offers </a>
                            </li>
                            <li>
                                <a href="#"> contact us </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <button className="hamburger-icon" onClick={()=>setToggle(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </button>
                    
                    <a className="header_button" href="#" download><span className="button-text">Download CV</span> <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                            </span>
                            
                            </a>
                </header>
              </div>
             
            </>

        </>
    )
}

export default Header