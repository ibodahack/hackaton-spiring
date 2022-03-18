import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './assets/fonts/index'
import GlobalStyle from './style/global'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'

function App() {
  return (
    <div style={{ paddingRight: 16 }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/experience" element={} />
        <Route path="/bio" element={} /> */}
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
