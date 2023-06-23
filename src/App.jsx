import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
  <>
  
  <Router>
  <Header/>
    <Routes>
      <Route path={'/'} element={<Banner/>}></Route>
      <Route path={'/about'} element={<About/>}></Route>
    </Routes>
  </Router>

  </>
  )
}

export default App