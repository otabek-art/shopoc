import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Brands from './components/Brands/Brands'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
   </>
  )
}

export default App