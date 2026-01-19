import React from 'react'
import './App.css'
import Header from './components/pages/Header/Header'
import Article from './components/pages/Article/Article'
import Section from './components/pages/Section/Section'
import Aside from './components/Aside/Aside'
import Favorites from './components/Favorites/Favorites'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'



const App = () => {
  return (
    <>
    <BrowserRouter>
            <Routes>
                  <Route path='/' element={<Layout />}>
                      <Route path= "header" element={<Header/>} />
                      <Route path= "article" element={<Article/>} />
                      <Route path= "section" element={<Section/>} />
                      <Route path= "aside" element={<Aside/>} />
                      <Route path= "favorites" element={<Favorites/>} />
                  </Route>
            </Routes>
    </BrowserRouter>
        

    </>
  )
}

export default App