import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const facebook = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/960px-Facebook_f_logo_%282021%29.svg.png"
const tumbnail = "https://static.xx.fbcdn.net/rsrc.php/yb/r/HpEiFYDux5j.webp"
const Home = () => {

    const url = "http://localhost:3000/facebook"
    const navigate = useNavigate()

    const [loginusername,setloginusername]=useState("");
    const [loginpassword,setloginpassword]=useState("");

    const [loginusernameerr,setloginusernameerr]=useState("");
    const [loginpassworderr,setloginpassworderr]=useState("");
    const [erorrmsg,seterorrmsg]=useState('')
    


    const login = async(e)=>{
        e.preventDefault();
            let err = true
        if(loginusername.trim() === "" ){
             err = false
            setloginusernameerr("Please fill username and passwodr");
           
        }else{
            setloginusernameerr("")
        }
         if(loginpassword.trim() === "" ){
            err = false
            setloginpassworderr("Please fill username and passwodr");
            
        }else{
            setloginpassworderr("")
        }
        let result= null;
        if(err){
        let data = await fetch(url);
        let checkdata = await data.json()
        result = checkdata.find((item)=>item.username === loginusername && item.password === loginpassword);
        }

        if(result){
          
            alert("You Have Log In Sucessfull")
            navigate("/welcom")
        }else{
               seterorrmsg("Username Or Password Not found");
 
        }

    }
    
    return (
        <>
            <div className='flex flex-col md:flex-row min-h-screen bg-gray-50'>
                {/* Left Section */}
                <div className='flex flex-col md:flex-row relative p-8 md:p-12 lg:p-16 w-full md:w-1/2 bg-white border-b md:border-b-0 md:border-r border-gray-200 justify-center md:justify-between items-center md:items-start' >
                    <div className='flex flex-col justify-between items-center md:items-start h-full w-full md:w-auto'>
                        <img src={facebook} alt="fb" className='w-16 md:w-20 h-auto filter drop-shadow-md hover:opacity-80 transition-opacity duration-300' />
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-900 tracking-tight leading-tight max-w-xs md:max-w-sm mt-8 md:mt-0' >Explore the things <span className="text-gray-700 font-semibold">you love.</span></h2>
                    </div>
                    <div className='hidden md:flex absolute right-8 top-1/2 -translate-y-1/2'>
                        <img src={tumbnail} alt="" className='w-72 lg:w-96 h-auto filter drop-shadow-md' />
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className='w-full md:w-1/2 font-sans pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 px-6 md:px-8 lg:px-12 bg-gray-50 overflow-y-auto'>
                    <h3 className='text-2xl md:text-3xl font-bold mb-8 text-gray-900 tracking-tight'>
                        Log In To Facebook
                    </h3>

                    <form>
                        {/* Username Input */}
                        <div className='mb-6' >
                            <label htmlFor="Username" className='block text-sm font-semibold text-gray-800 mb-2'>Username</label>
                            <input 
                                type="text" 
                                id="Username" 
                                placeholder="Enter your username" 
                                onChange={(e)=>setloginusername(e.target.value)}  
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-400'
                            />
                        </div>
                        {loginusernameerr && <p className='text-red-600 text-sm mb-4 font-semibold'>{loginusernameerr}</p>}

                        {/* Password Input */}
                        <div className='mb-6' >
                            <label htmlFor="password" className='block text-sm font-semibold text-gray-800 mb-2'>Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                onChange={(e)=>setloginpassword(e.target.value)} 
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-400'
                            />
                        </div>
                        {loginpassworderr && <p className='text-red-600 text-sm mb-4 font-semibold'>{loginpassworderr}</p>}

                        {/* Login Button */}
                        <div className='mb-6'>
                            <button 
                                onClick={login} 
                                type="submit" 
                                className='w-full py-3 text-white font-bold rounded-lg bg-gray-900 hover:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base'
                            >
                                Log In
                            </button>
                        </div>

                        {erorrmsg && <p className='text-red-600 text-sm mb-4 font-semibold text-center'>{erorrmsg}</p>}

                        {/* Divider */}
                        <div className='flex items-center my-6'>
                            <div className='flex-1 border-t border-gray-300'></div>
                            <span className='px-3 text-gray-500 text-sm font-medium'>or</span>
                            <div className='flex-1 border-t border-gray-300'></div>
                        </div>

                        {/* Forgotten Password Button */}
                        <div className='mb-4'>
                            <Link to="/forgot-password">
                                <button 
                                    type="button"
                                    className='w-full py-3 rounded-lg bg-white border border-gray-300 text-gray-900 font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base'
                                >
                                    Forgotten Password?
                                </button>
                            </Link>
                        </div>

                        {/* Create Account Button */}
                        <div className='mb-4'>
                            <Link to="/register">
                                <button 
                                    type="button"
                                    className='w-full py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 font-semibold text-base shadow-sm hover:bg-gray-100 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95'
                                >
                                    Create New Account
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home