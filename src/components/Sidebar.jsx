import React from "react";

const Sidebar = ({ curStep, steps }) => {
  return (
    <div className="sidebar w-1/4 rounded-lg object-contain p-5">
      <ul>
        {steps.map((step, index) => {
          return (
            <li className="flex items-center text-lightBlue py-3" key={index}>
              <div
                className={`w-10 h-10 text-xl font-semibold border rounded-full text-center leadiing-loose mr-4 py-1 ${
                  index === curStep
                    ? "bg-lightBlue text-marinBlue"
                    : "bg-transparent"
                }`}
              >
                {index + 1}
              </div>
              <div>
                <p className="uppercase text-pastelBlue">Step {index + 1}</p>
                <h4 className="uppercase font-bold text-lg">
                  {index === 0
                    ? "Your Info"
                    : index === 1
                    ? "Select Plan"
                    : index === 2
                    ? "Add-ons"
                    : index === 3
                    ? "Summary"
                    : ""}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
