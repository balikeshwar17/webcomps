import React from 'react'

const login = () => {
    return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg border border-gray-200 p-8 w-96">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" className="border rounded w-full py-2 px-3 focus:outline-none focus:border-purple-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">Password</label>
          <input type="password" id="password" className="border rounded w-full py-2 px-3 focus:outline-none focus:border-purple-600" />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" id="saveFor30Days" className="mr-2" />
          <label htmlFor="saveFor30Days" className="text-sm text-gray-800">Save for 30 days</label>
        </div>

        <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-full w-full focus:outline-none hover:bg-purple-700">
          Login
        </button>

        <div className="mt-4">
          <button type="button" className="border p-2 text-purple-600 rounded-full w-full">
            Continue with Google
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-800 text-center">
          Don't have an account? <a href="/register" className="text-purple-600">Register</a>
        </p>
      </form>
    </div>
  );
  };

export default login
