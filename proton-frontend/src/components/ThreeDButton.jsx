import React from "react";

function ThreeDButton({text,onClick}) {
  return (
    <button
      className="cursor-pointer bg-gray-700  hover:bg-gray-600 p-1.5 rounded-lg ml-5 text-white font-semibold transition-all 
                 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_3px_0_0_rgba(0,0,0,0.8)] dark:shadow-[4px_3px_0_0_rgba(255,255,255,1)] dark:hover:shadow-[4px_3px_0_0_rgba(255,255,255,0.8)] dark:active:translate-y-1 dark:active:shadow-none active:translate-y-1 active:shadow-none" onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ThreeDButton;