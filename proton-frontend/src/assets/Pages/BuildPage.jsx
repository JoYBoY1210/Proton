import React from 'react'
import Inspectpanel from '../../components/Inspectpanel'
import MainCanvas from '../../components/MainCanvas'
import Sidebar from '../../components/SideBar'
import TopBar from '../../components/TopBar'


function BuildPage() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex h-full w-full">
        <Sidebar />
        <MainCanvas />
        <Inspectpanel />
      </div>
    </div>
  )
}

export default BuildPage
