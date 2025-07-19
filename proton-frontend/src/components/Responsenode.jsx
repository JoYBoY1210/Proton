import React from "react";
import { Handle, Position } from "@xyflow/react";

function RequestNode({ data, selected }) {
  const conditionBackground = {
    "200 OK": "bg-green-500",
    "201 CREATED": "bg-blue-500",
    "400 BAD REQUEST": "bg-orange-500",
    "404 NOT FOUND": "bg-red-500",
    "500 INTERNAL SERVER ERROR": "bg-purple-500",
  };
  return (
    <div
      className={`rounded-md p-1 shadow-md border-2 transition-all 
        ${selected ? "border-blue-500 bg-zinc-700" : "border-gray-300 bg-zinc-700"}
        flex flex-col items-center`}
    >
      <Handle type="target" position={Position.Top} id="in" />
      <div className="font-semibold text-zinc-300 mb-0.5 text-[0.75rem]">
        {data.label}
      </div>
      <div
        className={`text-[0.65rem] border-2 ${
          conditionBackground[data.status] || "bg-green-500"
        } rounded-md p-0.5 text-center border-zinc-300 font-semibold`}
        style={{ width: "fit-content" }}
      >
        {data.status || "200 OK"}
      </div>
      <Handle type="source" position={Position.Bottom} id="out" />
    </div>
  );
}

export default RequestNode;
