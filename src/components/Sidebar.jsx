import React from "react";

const Sidebar = ({ activeStep }) => {
  return (
    <div className="sidebar w-1/4 rounded-lg object-contain p-5">
      {activeStep}
    </div>
  );
};

export default Sidebar;
