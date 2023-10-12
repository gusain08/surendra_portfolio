import React from 'react'
import Assignment  from '../assignment/Assignment';
import idp from '../../assets/idp.png'
import { useNavigate } from 'react-router-dom';
import Drum from '../../assets/drum-kit.png';
import Travfolks from '../../assets/travfolks.png';
import Eduvince from '../../assets/eduvince.png';
import { Link } from 'react-router-dom';
import './projects.css'
const Projects = () => {
  const projects =[
    {
      name:"Idigitalpreneur",
      tag:"EdTech",
      img:idp,
      link:'https://www.idigitalpreneur.com/'
    },
    {
      name:"travfolks",
      tag:"Travle",
      img:Travfolks,
      link:'https://www.travfolks.com/'
    },
    {
      name:"Eduvince",
      tag:"EdTech",
      img:Eduvince,
      link:'https://eduvince.com/'
    }
  ]

  return (
    <>
      <div className="projects-section">
        <div className="container">
          <div className="seven">
            <h1>My Work</h1>
          </div>
          <div className="card-continer">

          {
            projects.map((projectss, index)=>{
              return (
                <div className="card" key={index}>
                <div className="single-demo">
                  <a className="single-demo-link" href={projectss.link} target='_blank'>
                    <div className="thumbnail">
                      <img src={projectss.img} alt="Education Images" />
                      <div className="mobile-view">
                        <div className="inner">
                          <img src={projectss.img} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title">{projectss.name}<span className="label-new">{projectss.tag}</span></h3>
                    </div>
                  </a>
                </div>
              </div>

              )
            })
          }


           
          </div>

          <div className="viewAll-btn">
            {/* <Link to={'/Assignment'} className='contact1-form-btn'>View All</Link> */}
            <a href="">View All</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects