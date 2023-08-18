import React from 'react'
import idp from '../assets/idp.png'
import Drum from '../assets/drum-kit.png';
import './projects.css'
const Projects = () => {
  return (
    <>
      <div className="projects-section">
        <div className="container">
          <div className="seven">
            <h1>My Work</h1>
          </div>
          <div className="card-continer">

            <div className="card">
              <div className="single-demo">
                <a className="single-demo-link" href="https://www.idigitalpreneur.com/" target='_blank'>
                  <div className="thumbnail">
                    <img src={idp} alt="Education Images" />
                    <div className="mobile-view">
                      <div className="inner">
                        <img src={idp} alt="Histudy Images" />
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title">Idigitalpreneur<span className="label-new">EdTech</span></h3>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="card">
              <div className="single-demo">
                <a className="single-demo-link" href="https://www.idigitalpreneur.com/" target='_blank'>
                  <div className="thumbnail">
                    <img src={Drum} alt="Education Images" />
                    <div className="mobile-view">
                      <div className="inner">
                        <img src={Drum} alt="Histudy Images" />
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title">Idigitalpreneur<span className="label-new">EdTech</span></h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects