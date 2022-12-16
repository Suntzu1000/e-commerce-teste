import {BrowserRouter as Router, Routes, Route, /*Link*/} from 'react-router-dom'
import React from 'react'
import Home from '../home/Home'
import Footer from '../common/Footer'
import { Header } from '../common/Header'
import Details from '../home/details/Details'


const Paginas = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart/:id' element={<Details/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default Paginas