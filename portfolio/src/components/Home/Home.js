import React from 'react'
import style from './style.css'

export default function Home(){
    return(
        <main className="homePage">
            <div id="noise"></div>
            <h1 className="hi">Osteophagy</h1>
            <div className="mainBody">
                <a href="#" className="landing">ART</a>
                <a href="/about"><img className="rabbit" src="https://i.imgur.com/9zQ967q.png" /></a>
                <a href="/project" className="landing">CODE</a>
            </div>
        </main>
    )
}