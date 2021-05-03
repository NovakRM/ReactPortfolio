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
            tags,
            projectImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data)=> setProjectData(data))
        .catch(console.error)
    }, []) //query once
    return(
        <main>
            <div id="noise"></div>
            <Nav />
            <section>

                <section className="projectContainer">
                {projectData && projectData.map((project, index)=>(
                   <article className="flex-grid">

                    <div className="one">
                        
                        <h3 className="aboutHeaderHori">
                            <a 
                            href={project.link}
                            target="_blank">
                            {project.title}</a>
                        </h3>
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
                        {/* <hr /> */}
                        <p>
                            {project.description}
                        </p>

                    </div>

                    <div className="col2">
                        <a href={project.link}><img src={project.projectImage.asset.url}/></a>
                    </div>

                   </article>
                   ))}
                </section>
            </section>
        </main>
    )
}