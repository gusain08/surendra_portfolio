import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills  from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Resume from './components/resume/Resume';

import './App.css'
const App = () => {
  return (
  <>
    
    <div className="home">
      
  <Header/>
  <Banner/>
   <About/>  
  <Projects/>
 <Skills/>
<Resume/>
  <Contact/>
  <Footer/> 
    
  </div>

  </>
  )
}

export default App