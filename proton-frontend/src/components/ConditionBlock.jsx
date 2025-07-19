import React from 'react'
import { Handle,Position } from '@xyflow/react'

function ConditionBlock({ data, selected }) {
  return (
    <div
          className={`rounded-md p-1 shadow-md border-2 transition-all 
          ${selected ? "border-blue-500 bg-zinc-700" : "border-gray-300 bg-zinc-700"}`}
        >
          <Handle type="target" position={Position.Top} id="in" />
          <div className="font-semibold text-zinc-300 mb-0.5 text-[0.75rem]">{data.label}</div>
          <div className="text-[0.65rem] border-2 bg-zinc-400 rounded-md p-0.5  text-center  border-zinc-300 font-semibold" style={{ width: "fit-content" }} >{data.method || "If"}</div>
          <Handle type="source" position={Position.Bottom} id="out" />
        </div>
  )
}

export default ConditionBlock
