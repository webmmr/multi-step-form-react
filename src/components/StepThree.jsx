import Header from "./shared/Header";
import { useState } from "react";

const StepThree = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />

      {/* Monthly Add-on Options */}
      {toggle && (
        <div className=" flex flex-col  justify-between items-start">
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
            <input
              type="checkbox"
              value="online-monthly"
              id="online-monthly"
              name="add-on-monthly"
              className="add-on-checkbox"
            />
            <label htmlFor="online-monthly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Online service
                  </h3>
                  <p className="text-coolGray">Access to multiplayer games</p>
                </div>
                <p className="text-purplishBlue">+$1/mo</p>
              </div>
            </label>
          </div>
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
            <input
              type="checkbox"
              value="storage-monthly"
              id="storage-monthly"
              name="add-on-monthly"
              className="add-on-checkbox"
            />
            <label htmlFor="storage-monthly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Larger storage
                  </h3>
                  <p className="text-coolGray">Extra 1TB of cloud save</p>
                </div>
                <p className="text-purplishBlue">+$2/mo</p>
              </div>
            </label>
          </div>
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5  checkbox-wrapper">
            <input
              type="checkbox"
              value="profile-monthly"
              id="profile-monthly"
              name="add-on-monthly"
              className="add-on-checkbox"
            />
            <label htmlFor="profile-monthly" className="w-full cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
                <div className="flex-1 ml-8">
                  <h3 className="text-marinBlue text-xl font-bold">
                    Customizable Profile
                  </h3>
                  <p className="text-coolGray">Custom theme on your profile</p>
                </div>
                <p className="text-purplishBlue">+$2/mo</p>
              </div>
            </label>
          </div>
        </div>
      )}
      {/* Yearly Add-on Options */}
      {!toggle && (
        <div className=" flex flex-col  justify-between items-start">
          <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
            <input
              type="checkbox"
              value="online-yearly"
              id="online-yearly"
              name="add-on-yearly"
              className="add-on-checkbox"
            />
            <label htmlFor="online-yearly" className="w-full cursor-pointer">
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
              value="storage-yearly"
              id="storage-yearly"
              name="add-on-yearly"
              className="add-on-checkbox"
            />
            <label htmlFor="storage-yearly" className="w-full cursor-pointer">
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
              value="profile-yearly"
              id="profile-yearly"
              name="add-on--yearly"
              className="add-on-checkbox"
            />
            <label htmlFor="profile-yearly" className="w-full cursor-pointer">
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
      )}
    </>
  );
};

export default StepThree;
