import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Brand from '../components/Brand'
import Services from '../components/Servises'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/brands' element={<Brand/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  )
}

export default App