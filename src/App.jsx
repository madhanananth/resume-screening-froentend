import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import JobsPage from './pages/JobPage'
import JobDetails from './pages/JobDetails'
import UploadResumePage from './pages/UploadResumePage'


const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/jobpage' element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/upload-resume/:job_id" element={<UploadResumePage />} />
    </Routes>
  )
}

export default App

