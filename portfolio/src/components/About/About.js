import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { SocialIcon } from "react-social-icons"
import Nav from "../Nav/Nav"
import style from "./style.css"

export default function About() {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]
        {
          name,
          "bio": bio[0].children[0].text,
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
  <div>
    <Nav />
  <div className="about">
    <div id="noise"></div>
    <div className="flex-grid">
      <div className="col">
        <div className="col1">
          <div className="colWrapper"> 
              <h5 className="aboutHeader">About</h5>
              {author.bio}
          </div>
        </div>
        <div className="col1">
          <div className="colWrapper"> 
            <h5 className="aboutHeader">What I Do</h5>
            <ul className="skillBullets">
              <li className="skill">
                Web Design - Front End
              </li>
              <li className="skill">
                UX / UI
              </li>
              <li className="skill">
                Graphic Design - Layout and Branding
              </li>
              <li className="skill">
                Illustration 
              </li>
            </ul>
          </div>
        </div>
        <div className="col1">
            <div className="container">
              <div className="hoverOverlay">
                <h1 className="un"><a href="/">Osteophagy</a></h1>
              </div>
              <img className="aboutImg" src="https://i.imgur.com/6ePZ1Q8.png" />
            </div>
        </div>
      </div>

      <div className="col">
        <div className="col2">
          <h5 className="aboutHeaderHori">Experience</h5>
            <ul className="timeline-holder">                                        
              <li className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">
                      <b>2014 - 2018 </b> 
                      ... CCAD Student
                      <p>
                        Originally majoring in illustration, my work often branches toward commercial fields with a particular interest in graphic design. 
                        The roots of my interest in web design can at their very latest be traced back to this point, where I was often creating small single-page layouts 
                        and beginning to acquaint myself with front end through platforms such as Tumblr and Wix.
                      </p>
                  </div>
                  <div className="timeline-event-date">2014</div>
              </li>

              <li className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">                                    
                      <b>2016 - 2018 </b> 
                      ... CCAD Continuing Education Instructor
                      <p>
                        Teachers are in charge of constructing a curriculum and enforcing it, making sure that learners are engaged with and understand 
                        the assignment.  I taught and assisted with stop motion (traditional techniques, digital camera use, Adobe Premiere.) 
                        Assisted with digital animation (Adobe Animate and Toonboom,) and digital photography (digital camera use and Adobe Photoshop.)
                      </p>
                  </div>
                  <div className="timeline-event-date">2016</div>
              </li>

              <li className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">
                      <b>2019 - 2020 </b> 
                      ... Howard Hanna Graphic Designer
                      <p>
                        Work requires interaction with both corporate employees and real estate agents to create branding, business cards, 
                        collateral material such as brochures, presentations, booklets, web banners and graphics, etc. 
                        Need to balance multiple projects and deadlines, and to be flexible.
                      </p>
                  </div>
                  <div className="timeline-event-date">2019</div>
              </li>

              <li className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">
                      <b>2020 - 2021 </b> 
                      ... Case Western Reserve University Full Stack Web Development Bootcamp
                      <p>
                        Focus on the MERN stack; Mongo and MySql database management, Express server, React (this app was built in React!), and Node.JS.
                        Comfortable with Javascript and jQuery, I've completed several projects with three other members of my cohort with my primary focus being front end design and logic.
                      </p>
                  </div>
                  <div className="timeline-event-date">2020</div>
              </li>                                           

              <li className="timeline-event">
                  <span className="timeline-circle"></span>
                  <div className="timeline-event-content">
                      <b>2021 - Now </b> 
                      ... Raborn Media
                      <p>
                        Beginning in May 2021! I'm looking forward to serving as a web designer!
                      </p>
                  </div>
                  <div className="timeline-event-date">2021</div>
              </li>                     
            </ul> 
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}