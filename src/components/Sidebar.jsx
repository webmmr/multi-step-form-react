import React from "react";

const Sidebar = ({ curStep }) => {
  return (
    <div className="sidebar w-1/4 rounded-lg object-contain p-5">{curStep}</div>
  );
};

export default Sidebar;
