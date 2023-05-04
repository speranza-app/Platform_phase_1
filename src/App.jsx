import React from 'react'

import '../src/Styles/SectionPoints.css'
import '../src/Styles/Commonstyles.css'
import HomePage from './Pages/HomePage/HomePage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import SubmissionPage from './Pages/SubmissionPage/SubmissionPage'

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route element={<HomePage></HomePage>} path=''>

        </Route>
        <Route element={<SubmissionPage></SubmissionPage>} path='form'></Route>
      </Routes>
    </Router>
  )
}

export default App