import React from 'react'

function Inspectpanel({ selectedNode }) {
  return (
    <div className="w-64 bg-gray-50 dark:bg-black transition-colors duration-300 ease-in-out dark:text-white h-full p-4 border-l">
      <h2 className="font-semibold text-2xl mb-2">Inspect</h2>
      {!selectedNode ?(
        <div>
          <p className="text-gray-500">Select a node to inspect its details.</p>
        </div>
      ):(
        <div>
          <h3 className=" text-lg font-bold mb-2">Node Details:- </h3>
          <p className="dark:text-white"><span className='font-semibold'>ID: </span>{selectedNode.id}</p>
          <p className="dark:text-white"><span className='font-semibold'>Type: </span>{selectedNode.type}</p>
          <p className="dark:text-white"><span className='font-semibold'>Label: </span>{selectedNode.data.label}</p>
        </div>
      )}
    </div>
  )
}

export default Inspectpanel
