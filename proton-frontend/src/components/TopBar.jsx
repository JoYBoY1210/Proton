import React from 'react'
import ThreeDButton from './ThreeDButton'
import useDarkMode from '../assets/hooks/useDarkMode'
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";

function TopBar() {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode);

  return (
    <div className="h-15 dark:bg-black bg-gray-200 transition-colors duration-300 ease-in-out border-b-black border-b dark:border-white dark:border-b p-2 text-white flex items-center px-4 justify-between shadow-md">
      <div className="text-3xl text-black font-[Tektur] dark:text-white font-bold">Proton</div>
      <div className="space-x-4">
        <ThreeDButton text={!darkMode?<MdDarkMode />:<MdSunny />} onClick={() => setDarkMode(!darkMode)} />
        <ThreeDButton text="Logout" />
        
      </div>
    </div>
  )
}

export default TopBar
