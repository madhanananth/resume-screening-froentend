import React from 'react'
import Navbar from '../components/Navbar'
import { Link , Navigate } from 'react-router-dom'
import "@fontsource/poppins"
import "@fontsource/montserrat/700.css"
import after from '../assets/after.webp'
import before from '../assets/pile-before.webp'
import JobsPage from './JobPage'
const Dashboard = () => {

  const token = localStorage.getItem("token")



  
  return (
    <div className=' min-h-screen w-full bg-gradient-to-br from-white to-[#eae0f5]'>
          {/* navbar */}
          <Navbar token={token}/>
          {token &&
          <JobsPage />}



          {/* main */}

          {!token &&
        <main className=' font-[Montserrat] flex flex-col justify-center items-center overflow-x-hidden py-24 px-4 '>

          <div className=' text-center  px-4 max-w-4xl'>
            <div className='mb-12'>
              <h1 className='font-mont text-4xl sm:text-5xl lg:text-6xl text-[#3d2a51]  mb-8 font-black  leading-tight tracking-tight'>AI Resume Screener <br /> That
                <span className='text-[#77bc7c]'> Just Works</span>
              </h1>
              <p className='text-xl text-[#3d2a51]/80 font-bold mx-auto mb-8 leading-relaxed tracking-wider max-w-2xl'>
                Stop wasting time on maunal screening resumes.
                <span className='text-[#f3764a]'>Screen cadidates in minutes, not hours</span>
                .</p>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-3xl mx-auto w-full'>
            <div className='text-center relative'>
              <div className='bg-[#eae0f5] rounded-2xl relative p-6'>
                <span className='bg-[#f3764a] text-white text-sm px-4 py-2 rounded-full '>Before</span>
                <h4 className='my-2 text-lg text-[#3d2a51] tracking-tight '>Manual Screening</h4>
                <p className='text-sm text-[#3d2a51]/50 '> Hours of work,
                  <br /> cluttered insights</p>
                <div className='mb-4 '>
                  <img src={before} alt=" file image" className=' w-full max-w-xs drop-shadow-lg mx-auto ' />
                </div>
              </div>
            </div>
            <div className='text-center relative'>
              <div className='bg-[#77bc7c]/10 border-2 border-[#77bc7c]/20 rounded-2xl relative p-6'>
                <span className='bg-[#77bc7c] text-white text-sm px-4 py-2 rounded-full '>After</span>
                <h4 className='my-2 text-lg text-[#3d2a51] tracking-tight '>AI Screening</h4>
                <p className='text-sm text-[#3d2a51]/50 '> Minutes of work,
                  <br /> actionable insights</p>
                <div className='mb-4'>
                  <img src={after} alt=" after file image" className=' w-full max-w-xs drop-shadow-lg mx-auto ' />
                </div>
              </div>
            </div>
          </div>

        </main>
          }

      
     
    </div>
  )
}

export default Dashboard
