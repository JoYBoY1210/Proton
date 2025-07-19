import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";

function InspectPanel({ selectedNode, updateNodeData }) {
  return (
    <div className="w-72 h-full p-6 border-l  border-zinc-800 dark:bg-black bg-white text-zinc-100 shadow-2xl transition-colors duration-300 ">
      <h2 className="font-semibold text-2xl dark:text-white text-zinc-700 mb-4 tracking-tight">
        Inspect
      </h2>
      <hr className="border-zinc-700/50 mb-4" />
      {!selectedNode ? (
        <div className="flex flex-col items-center justify-center h-40 text-zinc-500">
          <RxQuestionMarkCircled className="w-12 h-12 mb-2" />
          <p className="text-center">Select a node to inspect its details.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
              Node ID
            </span>
            <div className="select-all font-mono text-lg mb-2 dark:bg-zinc-800 bg-zinc-500 rounded px-2 py-1">
              {selectedNode.id}
            </div>
          </div>
          <div>
            <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
              Type
            </span>
            <div className="inline-flex items-center ml-2 rounded-md bg-zinc-800/60 border  border-zinc-700 px-3 py-1 text-sm font-semibold mt-1 capitalize">
              {selectedNode.type}
            </div>
          </div>
          <div>
            <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
              Label
            </span>
            <input
              type="text"
              value={selectedNode.data.label}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { label: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
              placeholder="Enter label"
              autoComplete="off"
            />
          </div>
          {selectedNode.type === "request" && (
            <div>
              <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                Method
              </span>
              <select
                value={selectedNode.data.method || ""}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, { method: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                placeholder="Enter method (GET, POST, etc.)"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>

              <div>
                <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                  Path
                </span>
                <input
                  type="text"
                  value={selectedNode.data.path || ""}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { path: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                  placeholder="Enter path"
                  autoComplete="off"
                />
              </div>
            </div>
          )}
          {selectedNode.type === "condition" && (
            <div>
              <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                Method
              </span>
              <select
                value={selectedNode.data.condition || ""}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, { condition: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                placeholder="Enter method (GET, POST, etc.)"
              >
                <option value="IF">IF</option>
                <option value="ELSE IF">ELSE IF</option>
                <option value="ELSE">ELSE</option>
              </select>

              <div>
                <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                  Body{" "}
                </span>
                <input
                  type="text"
                  value={selectedNode.data.body || ""}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { body: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                  placeholder="Enter body "
                  autoComplete="off"
                />
              </div>
            </div>
          )}
          {selectedNode.type === "response" && (
            <div>
              <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                Method
              </span>
              <select
                value={selectedNode.data.status || ""}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, { status: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                placeholder="Enter method (GET, POST, etc.)"
              >
                <option value="200 OK">200 OK</option>
                <option value="201 CREATED">201 Created</option>
                <option value="400 BAD REQUEST">400 Bad Request</option>
                <option value="404 NOT FOUND">404 Not Found</option>
                <option value="500 INTERNAL SERVER ERROR">
                  500 Internal Server Error
                </option>
              </select>

              <div>
                <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                  Body (JSON)
                </span>
                <input
                  type="text"
                  value={selectedNode.data.body || ""}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { body: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow"
                  placeholder='{"message":"OK"}'
                  autoComplete="off"
                />
              </div>
            </div>
          )}
          {selectedNode.type === "dbquery" && (
            <div>
              <span className="dark:text-zinc-400 text-zinc-800 text-sm uppercase tracking-wider font-semibold">
                SQL Query
              </span>
              <textarea
                value={selectedNode.data.query || ""}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, { query: e.target.value })
                }
                className="w-full h-24 mt-1 px-3 py-2 dark:bg-zinc-800 bg-zinc-500 border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400/40 transition shadow resize-none"
                placeholder="SELECT * FROM users WHERE id = {{userId}};"
                autoComplete="off"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InspectPanel;
