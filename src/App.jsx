import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Brands from './components/Brands/Brands'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Style from './components/Style/Style'
import Happy from './components/happy/Happy'
import Sale from './pages/Sale'

const App = () => {
  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sale' element={<Sale/>}/>

</Routes>
<Style/>
<Happy/>
   </>
  )
}

export default App