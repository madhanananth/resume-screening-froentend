import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
const Navbar = ({ token }) => {


  const [open, setOpen] = useState(false);
  console.log(token)


  return (


          <div className=' w-full h-18 px-10 flex bg-white justify-between items-center rounded-sm shadow-md sticky top-0 z-50'>

              <h1 className='text-black text-2xl font-bold  '>Resume AI</h1>

              {token &&
        <User className='w-6 h-6  rounded' />
              }
              
          <div className='lg:hidden px-2 py-1 rounded bg-[#eae0f5]'>

            <span onClick={() => setOpen(!open)}>
                  <Menu className='w-6 h-6  rounded' />
            </span>

              {open && (

                  <div className='absolute top-15 right-7 w-30  bg-white flex flex-col items-center justify-center rounded-md shadow-md'>
                      <span className=' w-full py-2 text-center text-sm hover:bg-[#eae0f5] rounded ' >
                        <Link to='/login'>Login</Link>
                        </span>
                      <span className=' w-full py-2 text-center text-sm hover:bg-green-200 rounded'>
                        <Link to='/register'>Sign Up</Link>
                        </span>
                  </div>

              )}

              </div>

              <div className=' hidden  lg:flex justify-center items-center gap-3  '>
                  <span className='bg-[#eae0f5] px-3 py-1.5 shadow-lg rounded-lg
                  hover: trasition duration-300 ease-in-out hover:bg-green-300'>
                    <Link to='/login'>Login</Link>
                  </span>

                  <span className='bg-green-200 px-3 py-1.5 shadow-lg rounded-lg
                  hover: trasition duration-300 ease-in-out hover:bg-green-300'> 
                    <Link to='/register'>sign Up</Link>
                  </span>
              </div>
          </div>
      

  )
}

export default Navbar

