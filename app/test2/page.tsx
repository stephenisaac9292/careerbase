import React from 'react'

const test2 = () => {
  return (
    <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Card 1</h2>
            <p className="text-gray-600">This is the first card.</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Card 2</h2>
            <p className="text-gray-600">This is the second card.</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-bold mb-2">Card 3</h2>
            <p className="text-gray-600">This is the third card.</p>
            </div>
        </div>
</div>

  )
}

export default test2