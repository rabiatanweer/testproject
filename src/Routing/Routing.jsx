
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Quote from '../Pages/Quote'
import Userquote from '../Pages/Userquote'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import ProtectedRoute from './ProtectedRoute'

export default function Routing() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Quote />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/userquote' element={<ProtectedRoute Comp={Userquote} />} />
          { <Route path='*' element={<Navigate to="/login" />} /> }
        </Routes>
      </Router>
    </div>
  )
}

