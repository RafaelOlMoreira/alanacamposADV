import React from 'react'

import Header from './Layout/Header'

import Inicio from './Pages/Inicio'
import Sobre from './Pages/Sobre'
import Especialidades from './Pages/Especialidades'
import Depoimentos from './Pages/Depoimentos'
import Contato from './Pages/Contato'
import Footer from './Layout/Footer'

function App() {
  return (
    <>
      <Header />

      <Inicio />
      <Sobre />
      <Especialidades />
      <Depoimentos />
      <Contato />

      <Footer />
    </>
  )
}

export default App
