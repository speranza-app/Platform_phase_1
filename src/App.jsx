import React from 'react'

import '../src/Styles/SectionPoints.css'
import '../src/Styles/Commonstyles.css'
import HomePage from './Pages/HomePage/HomePage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route element={<HomePage></HomePage>} path=''>
        </Route>
      </Routes>
    </Router>
  )
}

export default App