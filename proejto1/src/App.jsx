import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<home/>} />
      <Route path='/Sobre' element={<Sobre/>} />
      <Route path='/Contato' element={<Contato/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default teste