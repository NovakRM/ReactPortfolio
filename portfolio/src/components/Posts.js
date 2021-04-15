import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from "../client.js"
//state-> usestate-> setstate

export default function Posts(){
    const [postData, setPost] = useState(null)

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`) //sanity builtin for querying data from its CDN
        .then((data)=> setPost(data))
        .catch(console.error)
        //change state of postData using setPost.
    }, []) // no params, run once on mount
    return(
        <main>
            <div>
                <h1>Posts</h1>
                <h2>Shitposting? Blogging?</h2>
                <div>
                    {postData && postData.map((post, index)=>(
                    // map over postData object & display
                    <article>
                        <Link to={"post/" + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <img 
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                />
                                <span>
                                    <h3>{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                   ))}
                </div>
            </div>
        </main>
    )
}