'use client'

import React from 'react'

const ChocolatePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Chocolate video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/chocolate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/30">
        <h1 className="text-5xl font-bold mb-4">Delicious Designs 🍫</h1>
        <p className="text-lg">Chocolate-coded experiences</p>
      </div>
    </div>
  )
}

export default ChocolatePage
