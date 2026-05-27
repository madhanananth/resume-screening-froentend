import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import JobsPage from './pages/JobsPage'
import JobDetails from './pages/JobDetails'
import UploadResumePage from './pages/UploadResumePage'
import { useState } from 'react'


const App = () => {

  const [token, setToken] = useState(
    localStorage.getItem('token')
  )
  
  return (
    <Routes>
      <Route path='/login' element={<Login setToken={setToken} />}  />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard token={token} setToken={setToken} />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/upload-resume/:job_id" element={<UploadResumePage />} />
    </Routes>
  )
}

export default App

