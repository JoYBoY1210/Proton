import React, { useState } from 'react'
import Inspectpanel from '../../components/Inspectpanel'
import MainCanvas from '../../components/MainCanvas'
import Sidebar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import { addEdge, useNodesState, useEdgesState,applyNodeChanges } from "@xyflow/react";
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

  const nodeTypesMap={
    request:{
      type: "request",
      label: "Http Request",
      position: { x: 100, y: 100 },
    },
    response: {
      type: "response",
      label: "Response Node",
      position: { x: 300, y: 100 },
    },
    dbquery: {
      type: "dbquery",
      label: "DB Query Node",
      position: { x: 500, y: 100 },
    },
    condition: {
      type: "condition",
      label: "Condition Node",
      position: { x: 700, y: 100 },
    }
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params)=>setEdges((eds)=>addEdge(params,eds)),[])
  const addNode=(type)=>{
    const id=`${+new Date()}`;
    const nodeType=nodeTypesMap[type];
    if(!nodeType) return;

    const newNode = {
      id,
      type: nodeType.type,
      position: { x: Math.random()*100+100, y: Math.random()*300+100 },
      data: { label: nodeType.label || "New Node" },
    };

    setNodes((nds)=>[...nds,newNode]);

  }

  const handleNodeClick=useCallback((event, node)=>{
    setSelectednode(node);},[]);

    const handleUpdateNodeData = useCallback((id,data)=>{
      setNodes((nds)=>nds.map((node)=>node.id===id?{...node,data:{...node.data,...data}}:node));
      setSelectednode((prev)=>prev && prev.id===id?{...prev,data:{...prev.data,...data}}:prev);
    },[setNodes]);
    


  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex h-full w-full">
        <Sidebar onAddNode={addNode} />
        <MainCanvas nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onNodeClick={handleNodeClick} />
        <Inspectpanel selectedNode={selectedNode} updateNodeData={handleUpdateNodeData} />
      </div>
    </div>
  )
}

export default BuildPage
