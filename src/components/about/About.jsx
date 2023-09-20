import React from 'react'
import "./about.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutImg from '../../assets/about-me.png'
const About = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );




  return (
   <>
   <section className="about" id="about">
 <div className="projects-section">
   <div className="container">
   <div className="seven"><h1>About Me</h1></div>
    <div  className="about-content">
      <div className="column left" >
        <img src={AboutImg}/>
      </div>
  
      <div className="column right" >
        <div className="text">
          I'm Surendra Singh and I'm a <span className="typing-2">
            Frontend Developer
          </span>
        </div>
        <p>
          Seeking an entry-level opportunity with an esteemed organization where
          I can utilize my skills &amp; enhance learning in the field of work.
          Capable of mastering new technologies.
        </p>
        <br />
        <div className="text">Why Work With Me</div>
        <p>
          I'm a great communicator &amp; love to invest the necessary time to
          understand the customer's problem very well.
        </p>
        <a className="header_button" href="#" download=""><span className="button-text">Download CV</span> <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></span></a>
      </div>
    </div>
  </div>
 </div>
</section>

   </>
  )
}

export default About