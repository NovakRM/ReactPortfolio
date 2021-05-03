import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from "react-social-icons"
import style from './style.css'

export default function Nav(){
    return(
        <header>
            <nav>
                <NavLink to="/" exact className="navItem">
                    Osteophagy
                </NavLink>
                <NavLink to="/post" className="navItem">
                    Blog Posts
                </NavLink>
                <NavLink to="/project" className="navItem">
                    Projects
                </NavLink>
                <NavLink to="/about" className="navItem"> 
                    About Me
                </NavLink>
            </nav>
        </header>
    )
}