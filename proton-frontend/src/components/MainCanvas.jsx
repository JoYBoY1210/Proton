import React, { useCallback, useState } from "react";
import "@xyflow/react/dist/style.css";
import { ReactFlow } from "@xyflow/react";
import { Background } from "@xyflow/react";

import useDarkMode from "../assets/hooks/useDarkMode";

function MainCanvas({nodes, edges, onNodesChange, onEdgesChange, onConnect, onNodeClick}) {
  const [darkMode, setDarkMode] = useDarkMode();
  

  return (
    <div className="flex-1 bg-white dark:border-l-white border-1 border-l-black dark:border-1 dark:bg-black transition-colors duration-300 rounded-lg shadow-inner overflow-hidden">
      <ReactFlow
        // key={darkMode ? "dark" : "light"}
        
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag
        zoomOnScroll
        onNodeClick={onNodeClick}
        className="w-full h-full"
      >
        <Background variant="dots" gap={35} color="#d1cec7" size={2} />
      </ReactFlow>
    </div>
  );
}

export default MainCanvas;
