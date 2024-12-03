import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Brands from './components/Brands/Brands'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Style from './components/Style/Style'
import Happy from './components/happy/Happy'
import Sale from './pages/Sale'
import SinglePage from './pages/SinglePage'
import SignPage from './pages/SignPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sale' element={<Sale/>}/>
  <Route path='/product/:id' element={<SinglePage/>}/>
  <Route path='/signup' element={<SignPage/>}/>
  <Route path='/login' element={<LoginPage/>}/>
</Routes>
<Style/>
<Happy/>
   </>
  )
}

export default App