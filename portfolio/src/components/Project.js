import React, {useEffect, useState} from 'react'
// import project from '../../studio/schemas/project.js'
import sanityClient from "../client.js"

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
                <section>
                {projectData && projectData.map((project, index)=>(
                   <article>
                    <h3>
                        <a 
                        href={project.link}
                        target="_blank">
                        {project.title}</a>
                    </h3>
                    <div>
                        <span>
                            <b>
                                Finished on:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </b>
                        </span>
                        <span>
                            <b>
                                Frameworks:{" "}
                                {project.frameworks}
                            </b>
                        </span>
                        <span>
                            <b>
                                Type:{" "}
                                {project.projectType}
                            </b>
                        </span>
                        <p>
                            {project.description}
                        </p>
                        <a 
                            href={project.link}
                            target="_blank">
                            View Project {" "}
                        <span role="img" aria-label="eyes emoji">👀</span>
                        </a>
                    </div>
                   </article>
                   ))}
                </section>
            </section>
        </main>
    )
}