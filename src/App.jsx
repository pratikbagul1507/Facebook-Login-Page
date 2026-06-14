import React from 'react'
import Home from './homepage/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './register/register'
import Welcome from './welcomepage/Welcome'
import ForgotPassword from './forgotpassword/ForgotPassword'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/welcom' element={<Welcome />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App