"use client";

import { React } from "react";
import ReactDOM from "react-dom";

const Drawer = ({
  open,
  onClose,
  outerClose,
  children,
  containerClassName,
}) => {
  <div
    className={`
      fixed min-w-[350px] z-50 flex items-center justify-center backdrop-blur-sm bg-[#0008]
      ${containerClassName}
      ${
        open ? "pointer-events-auto opacity-1" : "pointer-events-none opacity-0"
      }
      `}
    onClick={() => !outerClose && onClose()}
  >
    <div
      className="bg-white max-w-[85%] dark:bg-[#282828] shadow rounded-md p-4 min-w-[250px] min-h-[100px] max-h-[90vh] overflow-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>;
};

export default Drawer;
