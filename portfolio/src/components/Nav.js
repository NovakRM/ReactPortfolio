import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from "react-social-icons"

export default function Nav(){
    return(
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Osteophagy
                    </NavLink>
                    <NavLink to="/post">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon 
                        url="https://github.com/Osteophagy" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        style={{height: 35, width: 35}}/>

                     <SocialIcon 
                        url="https://www.linkedin.com/in/monica-novak-design/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        style={{height: 35, width: 35}}/>

                     <SocialIcon 
                        url="https://twitter.com/osteophagy" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}