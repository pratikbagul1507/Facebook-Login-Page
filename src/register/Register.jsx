import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [usernameerr,setusernameerr]=useState("");
    const [passworderr,setpassworderr]=useState("");
    const url = "http://localhost:3000/facebook";
    const navigate = useNavigate();

    const submitdata = async(e)=>{
        e.preventDefault();
        
        let usernameregax = /^[a-zA-Z0-9_]{3,15}$/;
        let passwordregax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,10}$/;
        let erorr = true
        if(username === ""){
            erorr =false
            setusernameerr("Please Fill Up User Name");
        }else if(!usernameregax.test(username.trim())){
             erorr =false
            setusernameerr("User Name Must Be 3-15 and no special symbol");
        }else{
           
            setusernameerr("");
        }
        if(password === ""){
            erorr =false
            setpassworderr("Please Fill Up Password");
        }else if(!passwordregax.test(password)){
            erorr =false
            setpassworderr("password must be include: 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special Character (@$!%*?&)");
        }else{
            setpassworderr("");
        }
        let data = null
         if(erorr){
           
             data = await fetch(url,{
                method:"POST",
                body: JSON.stringify({username,password})
            });
            data = await data.json()
         }
            if(data){
                alert("Your Account Has Been Created");
                navigate("/")
            }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 md:p-6">
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-200">
                
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Create Account
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm font-medium">
                        Join us today! Please enter your details.
                    </p>
                </div>

                <form>
                    {/* Username Input */}
                    <div className='mb-6'>
                        <label htmlFor="Username" className='block text-sm font-semibold text-gray-800 mb-2'>Username</label>
                        <input 
                            type="text" 
                            id="Username" 
                            placeholder="Enter your username" 
                            value={username} 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-400' 
                            onChange={(e)=> setusername(e.target.value)} 
                        />
                    </div>
                    {usernameerr && <p className='text-red-600 text-sm mb-4 font-semibold'>{usernameerr}</p>}

                    {/* Password Input */}
                    <div className='mb-6'>
                        <label htmlFor="password" className='block text-sm font-semibold text-gray-800 mb-2'>Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-400' 
                            onChange={(e)=> setpassword(e.target.value)} 
                        />
                    </div>
                    {passworderr && <p className='text-red-600 text-sm mb-4 font-semibold'>{passworderr}</p>}

                    {/* Create Account Button */}
                    <div className='mb-6'>
                        <button  
                            onClick={submitdata}
                            type="submit"
                            className='w-full py-3 px-6 bg-gray-900 text-white font-bold text-base rounded-lg hover:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95'
                        >
                            Create New Account
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center border-t border-gray-200 pt-6">
                    <p className="text-xs text-gray-500 px-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Register