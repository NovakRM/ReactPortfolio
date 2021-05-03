import React, {useEffect, useState} from 'react'
// import project from '../../studio/schemas/project.js'
import sanityClient from "../../client"
import Nav from "../Nav/Nav"
import style from "./style.css"

export default function Project(){
    const [projectData, setProjectData] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            frameworks,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data)=> setProjectData(data))
        .catch(console.error)
    }, []) //query once
    return(
        <main>
            <section>
                <h1>Portfolio</h1>
                <h2>Repository of computer-talk!</h2>
                <section className="projectContainer">
                {projectData && projectData.map((project, index)=>(
                   <article className="project">
                   <div className="overlay">
                            <p className="text">  
                                <a 
                                    href={project.link}
                                    target="_blank">
                                    View Project {" "}
                                    <span role="img" aria-label="eyes emoji">👀</span>
                                </a>
                            </p>
                    </div>

                    <h3 className="projectHeading">
                        <a 
                        href={project.link}
                        target="_blank">
                        {project.title}</a>
                    </h3>

                    <div className="projectDeets">
                        <span>
                            <b>
                                Finished on:{" "}                           
                            </b>
                                {new Date(project.date).toLocaleDateString()}
 
                        </span>
                        <br />
                        <span>
                            <b>
                                Frameworks:{" "}
                            </b>
                                {project.frameworks}

                        </span>
                        <br />
                        <span>
                            <b>
                                Type:{" "}
                            </b>
                                {project.projectType}
                        </span>
                        <hr />
                        <p>
                            {project.description}
                        </p>

                    </div>
                   </article>
                   ))}
                </section>
            </section>
        </main>
    )
}