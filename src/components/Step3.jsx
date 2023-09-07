import Header from "./shared/Header";
import { useState } from "react";

const StepThree = ({
  toggle,
  selectedAddOn,
  addOnMonthly,
  addOnYearly,
  updateData,
}) => {
  const addOn = !toggle ? addOnMonthly : addOnYearly;

  const [isChecked, setIsChecked] = useState(
    new Array(addOn.length).fill(false)
  );

  function handleChange(pos, e) {
    // Toggle the checked status
    const updatedChecked = isChecked.map((item, index) => {
      return index === pos ? !item : item;
    });

    setIsChecked(updatedChecked);
  }

  // function handleChange(pos, e) {
  //   console.log(pos, e.target.value);
  //   // updating the addOn array
  //   const updatedAddOn = [...selectedAddOn];

  //   updatedAddOn[pos] = { ...updatedAddOn[pos], value: e.target.value };

  //   updateData({ selectedAddOn: updatedAddOn });

  //   // updating the checked status
  //   const updatedChecked = isChecked.map((item, index) => {
  //     return index === pos ? !item : item;
  //   });

  //   setIsChecked(updatedChecked);
  // }

  return (
    <>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      {/* Monthly Add-on Options */}
      <ul className=" flex flex-col  justify-between items-start">
        {addOn.map((item, index) => {
          return (
            <li
              className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper"
              key={item.title}
            >
              <input
                type="checkbox"
                value={
                  toggle && index === 0
                    ? 10
                    : toggle && index === 1
                    ? 20
                    : toggle && index === 2
                    ? 20
                    : !toggle && index === 0
                    ? 1
                    : !toggle && index === 1
                    ? 2
                    : !toggle && index === 2
                    ? 2
                    : ""
                }
                id={`addon[${index}]`}
                name={item.title}
                className="add-on-checkbox"
                checked={isChecked[index]}
                onChange={(e) => handleChange(index, e)}
              />
              <label
                htmlFor={`addon[${index}]`}
                className="w-full cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                  <div className="flex-1 ml-8">
                    <h3 className="text-marinBlue text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-coolGray">Access to multiplayer games</p>
                  </div>
                  <p className="text-purplishBlue">
                    {toggle && index === 0
                      ? "+$10/yr"
                      : toggle && index === 1
                      ? "+$20/yr"
                      : toggle && index === 2
                      ? "+$20/yr"
                      : !toggle && index === 0
                      ? "+$1/mo"
                      : !toggle && index === 1
                      ? "+$2/mo"
                      : !toggle && index === 2
                      ? "+$2/mo"
                      : ""}
                  </p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      {/* Yearly Add-on Options */}
      {/* {!toggle && (
        <div className=" flex flex-col  justify-between items-start">
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
            <input
              type="checkbox"
              value="onlineYearly"
              id="onlineYearly"
              name="addOnYearly"
              className="add-on-checkbox"
            />
            <label htmlFor="onlineYearly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Online service
                  </h3>
                  <p className="text-coolGray">Access to multiplayer games</p>
                </div>
                <p className="text-purplishBlue">+$10/yr</p>
              </div>
            </label>
          </div>
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
            <input
              type="checkbox"
              value="storageYearly"
              id="storageYearly"
              name="addOnYearly"
              className="add-on-checkbox"
            />
            <label htmlFor="storageYearly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Larger storage
                  </h3>
                  <p className="text-coolGray">Extra 1TB of cloud save</p>
                </div>
                <p className="text-purplishBlue">+$20/yr</p>
              </div>
            </label>
          </div>
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5  checkbox-wrapper">
            <input
              type="checkbox"
              value="profileYearly"
              id="profileYearly"
              name="addOnYearly"
              className="add-on-checkbox"
            />
            <label htmlFor="profileYearly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Customizable Profile
                  </h3>
                  <p className="text-coolGray">Custom theme on your profile</p>
                </div>
                <p className="text-purplishBlue">+$20/yr</p>
              </div>
            </label>
          </div>
        </div>
      )} */}
    </>
  );
};

export default StepThree;
