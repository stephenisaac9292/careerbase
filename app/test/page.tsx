 import React from 'react'
 
 const page = () => {
   return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-4xl flex items-center">

        {/* Left Panel */}
        <div className="w-1/2 group relative overflow-hidden">
          <div className="flex items-center justify-center h-full transition-colors duration-300 group-hover:bg-gray-200 rounded-xl">
            <div className="text-center p-6">
              <h2 className="text-xl font-semibold mb-2">Left Panel</h2>
              <p className="text-gray-600">Hover me</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-16 border-r border-gray-300 z-10 transition-colors duration-300 group-hover:border-gray-200" />

        {/* Right Panel */}
        <div className="w-1/2 group relative overflow-hidden">
          <div className="flex items-center justify-center h-full transition-colors duration-300 group-hover:bg-gray-200 rounded-xl">
            <div className="text-center p-6">
              <h2 className="text-xl font-semibold mb-2">Right Panel</h2>
              <p className="text-gray-600">Hover me</p>
            </div>
          </div>
        </div>

      </div>
    </main>
   )
 }
 
 export default page