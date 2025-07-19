import React from "react";
import { Handle, Position } from "@xyflow/react";

function RequestNode({ data, selected }) {
    
  return (
    <div
      className={`rounded-md  p-1 shadow-md border-2 transition-all 
      ${selected ? "border-blue-500 bg-zinc-700" : "border-gray-300 bg-zinc-700"}`}
    >
      <Handle type="target" position={Position.Top} id="in" />
      <div className="font-semibold text-zinc-300 mb-0.5 text-[0.75rem]">{data.label}</div>
      <div className=" items-center text-[0.65rem] border-2 bg-zinc-400 rounded-md p-0.5   border-zinc-300 font-semibold" style={{ width: "fit-content" }}>{data.method || "Get"}</div>
      <Handle type="source" position={Position.Bottom} id="out" />
    </div>
  );
}

export default RequestNode;
