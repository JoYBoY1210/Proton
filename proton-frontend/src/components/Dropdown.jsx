import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiSend, FiMessageSquare, FiZap, FiDatabase } from 'react-icons/fi';

export default function Dropdown({ onAddNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-zinc-800 hover:bg-gray-400 dark:bg-zinc-800 dark:text-zinc-100 rounded-lg shadow-lg dark:hover:bg-zinc-700 transition focus:outline-none"
      >
        <span className="font-semibold">Add Node</span>
        <FiChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute w-60 right-0  mt-2 z-30 dark:bg-zinc-900 bg-gray-300 border dark:border-zinc-700 rounded-xl shadow-xl p-4 space-y-2 transition-all">
          <button
            onClick={() => { setOpen(false); onAddNode('request'); }}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg dark:bg-zinc-800 bg-gray-400 hover:bg-gray-500 dark:hover:bg-blue-700 text-black dark:text-blue-200 dark:hover:text-white hover:text-gray-800 transition shadow"
          >
            <FiSend className="dark:text-blue-400 text-black" /> Request Node
          </button>
          <button
            onClick={() => { setOpen(false); onAddNode('response'); }}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg dark:bg-zinc-800 bg-gray-400 hover:bg-gray-500 dark:hover:bg-green-700 text-black dark:text-green-200 dark:hover:text-white hover:text-gray-800 transition shadow"
          >
            <FiMessageSquare className="dark:text-green-400 text-black" /> Response Node
          </button>
          <button
            onClick={() => { setOpen(false); onAddNode('condition'); }}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg dark:bg-zinc-800 bg-gray-400 hover:bg-gray-500 dark:hover:bg-yellow-700 text-black dark:text-yellow-200 dark:hover:text-white hover:text-gray-800 transition shadow"
          >
            <FiZap className="dark:text-yellow-400 text-black" /> Condition Node
          </button>
          <button
            onClick={() => { setOpen(false); onAddNode('dbquery'); }}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg dark:bg-zinc-800 bg-gray-400 hover:bg-gray-500 dark:hover:bg-purple-700 text-black dark:text-purple-200 dark:hover:text-white hover:text-gray-800 transition shadow"
          >
            <FiDatabase className="dark:text-purple-400 text-black" /> DB Query Node
          </button>
        </div>
      )}
    </div>
  );
}
