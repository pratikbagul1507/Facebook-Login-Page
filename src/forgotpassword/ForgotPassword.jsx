import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccess('')
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSuccess('If this email is registered, we sent a password reset link. Please check your inbox.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Forgot Password</h1>
          <p className="mt-3 text-sm text-slate-500">
            Enter the email address associated with your account and we&apos;ll send you a reset link.
          </p>
        </div>

        {success && (
          <div className="mb-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label className="block text-sm font-semibold text-slate-700">
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>
          {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Send reset link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>
            Remembered your password?{' '}
            <Link to="/" className="font-semibold text-sky-600 hover:text-sky-700">
              Go back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
