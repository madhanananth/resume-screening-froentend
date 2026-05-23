import { useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import { Link, Navigate } from "react-router-dom";


const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [register] = useRegisterMutation();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await register({
                username: username,
                email: email,
                password: password
            }).unwrap();
    
            console.log("Rigister Success:", response);
            
            localStorage.setItem("token", response.access_token);
            navigate('/')
    
        } catch (error) {
            console.log(e)
            console.error("Register Failed:", error.data.error);
            alert("Register Failed:", error.data.error)
        }
    };
  return (
      <div className="min-h-screen flex items-center justify-center px-4  bg-gradient-to-br from-white to-[#eae0f5] ">

          <div className="bg-white w-full max-w-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl">


              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                  Resume Screening
              </h1>

              <p className="text-center text-gray-500 text-sm sm:text-base mb-6">
                  AI-Powered Recruitment Platform
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium mb-1">
                          User Name
                      </label>

                      <input
                          type="text"
                          placeholder="User Name"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium mb-1">
                          Email Address
                      </label>

                      <input
                          type="email"
                          placeholder="admin@test.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium mb-1">
                          Password
                      </label>

                      <input
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full border rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                  </div>

                  <button
                      type="submit"
                      className="w-full py-2 sm:py-3 rounded-lg text-white font-semibold bg-linear-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
                  >
                      Sign Up
                  </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                If you have an account?{" "}
                  <span className="text-indigo-600 hover:underline cursor-pointer">
                    <Link to='/login'>
                      Login
                    </Link>
                  </span>
              </p>

          </div>
      </div>
  )
}

export default Register
