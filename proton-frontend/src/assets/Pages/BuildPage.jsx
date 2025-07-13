import React, { useState } from 'react'
import Inspectpanel from '../../components/Inspectpanel'
import MainCanvas from '../../components/MainCanvas'
import Sidebar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import { addEdge, useNodesState, useEdgesState } from "@xyflow/react";
import { useCallback } from 'react'



function BuildPage() {
  const[selectedNode,setSelectednode]=useState(null);

  const initialNodes = [
    {
      id: "1",
      type: "default",
      position: { x: 0, y: 100 },
      data: { label: " Request Node" },
    },
    {
      id: "2",
      type: "default",
      position: { x: 0, y: 300 },
      data: { label: " Response Node" },
    },
  ];
  
  const initialEdges = [
    {
      id: "1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params)=>setEdges((eds)=>addEdge(params,eds)),[])
  const addNode=()=>{
    const id=`${+new Date()}`;
    const newNode = {
      id,
      type: "default",
      position: { x: Math.random()*100+100, y: Math.random()*300+100 },
      data: { label: `Node ${id}` },
    };

    setNodes((nds)=>[...nds,newNode]);

  }

  const handleNodeClick=useCallback((event, node)=>{
    setSelectednode(node);},[]);


  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex h-full w-full">
        <Sidebar onAddNode={addNode} />
        <MainCanvas nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onNodeClick={handleNodeClick} />
        <Inspectpanel selectedNode={selectedNode} />
      </div>
    </div>
  )
}

export default BuildPage
