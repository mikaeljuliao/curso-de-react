import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'


//importar material design icons
import '@mdi/font/css/materialdesignicons.css'
//importar css geral
import './App.css'

//importar componentes
import NavBar from './components/NavBar'

function App() {
  return (
   <div>
    <NavBar></NavBar>
   </div>
  )
}

export default App
