import React from 'react'
import { Handle, Position } from "@xyflow/react";

function DbQuery({ data, selected }) {
  return (
    <div
          className={`rounded-md p-1 shadow-md border-2 transition-all 
          ${selected ? "border-blue-500 bg-zinc-700" : "border-gray-300 bg-zinc-700"}`}
        >
      <Handle type="target" position={Position.Top} id="in" />  
      <div className="text-[0.65rem] text-zinc-300 font-mono">Database Query</div>
      <div className="text-[0.75rem] text-zinc-400 font-semibold">{data.label || "New Query"}</div>
      <Handle type="source" position={Position.Bottom} id="out" />
    </div>
  )
}

export default DbQuery
