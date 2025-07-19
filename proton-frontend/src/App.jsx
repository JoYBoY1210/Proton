import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuildPage from './assets/Pages/BuildPage'
import '@xyflow/react/dist/style.css';

function App() {
  

  return (
    <div className="w-full h-full  ease-in-out dark:bg-gray-900">

      <BuildPage />

    </div>
  )
}

export default App

