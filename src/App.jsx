import React from 'react'

import Header from './Layout/Header'

import Inicio from './Pages/Inicio'
import Sobre from './Pages/Sobre'
import Especialidades from './Pages/Especialidades'
import Depoimentos from './Pages/Depoimentos'
import Contato from './Pages/Contato'

function App() {
  return (
    <>
      <Header />

      <Inicio />
      <Sobre />
      <Especialidades />
      <Depoimentos />
      <Contato />

    </>
  )
}

export default App
