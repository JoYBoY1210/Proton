import React from 'react'

function MainCanvas() {
  return (
    <div className="flex-1  dark:bg-black transition-colors duration-300 ease-in-out bg-white bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px] dark:text-white w-full border  rounded-lg shadow-inner flex items-center justify-center">
      <span className="text-gray-400">Canvas will go here</span>
    </div>
  )
}

export default MainCanvas
