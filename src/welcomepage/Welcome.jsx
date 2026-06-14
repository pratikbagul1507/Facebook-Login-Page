import React from 'react'

const Welcome = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0f2f5] flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center justify-center">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-5xl md:text-6xl font-black text-[#1877f2] tracking-tight select-none">
            facebook
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-md leading-snug">
            Facebook helps you connect and share with the people in your life.
          </p>
          <div className="w-full max-w-sm md:max-w-md pt-6 hidden sm:block opacity-90 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 500 350" fill="none" xmlns="http://w3.org" className="w-full h-auto drop-shadow-md">
              <circle cx="250" cy="175" r="120" stroke="#1877f2" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="250" cy="175" r="70" stroke="#84b7fa" strokeWidth="1.5" />
              <circle cx="250" cy="175" r="20" fill="#1877f2" />
              <circle cx="150" cy="120" r="12" fill="#10b981" />
              <circle cx="350" cy="120" r="15" fill="#f59e0b" />
              <circle cx="200" cy="260" r="14" fill="#ec4899" />
              <circle cx="310" cy="240" r="10" fill="#6366f1" />
              <circle cx="130" cy="210" r="8" fill="#3b82f6" />
              <path d="M250 175 L150 120 M250 175 L350 120 M250 175 L200 260 M250 175 L310 240 M150 120 L130 210" stroke="#cbd5e1" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.01]">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#1877f2] to-[#42b72a] rounded-full p-1 shadow-md mb-3">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1877f2" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome to Facebook</h2>
            <p className="text-sm text-gray-500 mt-1">Discover friends, videos, and communities tailored just for you.</p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-5">
            <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <span className="p-2 bg-blue-50 text-[#1877f2] rounded-lg text-lg">👥</span>
              <span className="text-sm text-gray-600 font-medium">Find and connect with old and new friends.</span>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <span className="p-2 bg-green-50 text-green-600 rounded-lg text-lg">📸</span>
              <span className="text-sm text-gray-600 font-medium">Share photos, videos, and your favorite memories.</span>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg text-lg">🎮</span>
              <span className="text-sm text-gray-600 font-medium">Join exciting groups and play games together.</span>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-400 font-medium">
            Facebook © {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome
