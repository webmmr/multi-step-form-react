import Header from "./shared/Header";
import { useState } from "react";

const StepThree = ({ toggle, addOn, updateData }) => {
  console.log(toggle);
  return (
    <>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      {/* Monthly Add-on Options */}
      <div className=" flex flex-col  justify-between items-start">
        <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
          <input
            type="checkbox"
            value={toggle ? 10 : 1}
            id="onlineMonthly"
            name="addOnMonthly"
            className="add-on-checkbox"
          />
          <label htmlFor="onlineMonthly" className="w-full cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
              <div className="flex-1 ml-8">
                <h3 className="text-marinBlue text-xl font-bold">
                  Online service
                </h3>
                <p className="text-coolGray">Access to multiplayer games</p>
              </div>
              <p className="text-purplishBlue">
                {toggle ? "+$10/yr" : "+$1/mo"}
              </p>
            </div>
          </label>
        </div>
        <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5 mb-5 checkbox-wrapper">
          <input
            type="checkbox"
            value={toggle ? 20 : 2}
            id="storageMonthly"
            name="addOnMonthly"
            className="add-on-checkbox"
          />
          <label htmlFor="storageMonthly" className="w-full cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
              <div className="flex-1 ml-8">
                <h3 className="text-marinBlue text-xl font-bold">
                  Larger storage
                </h3>
                <p className="text-coolGray">Extra 1TB of cloud save</p>
              </div>
              <p className="text-purplishBlue">
                {toggle ? "+$20/yr" : "+2/mo"}
              </p>
            </div>
          </label>
        </div>
        <div className="flex flex-1 border border-1 border-coolGray rounded-lg p-5  checkbox-wrapper">
          <input
            type="checkbox"
            value={toggle ? 20 : 2}
            id="profileMonthly"
            name="addOnMonthly"
            className="add-on-checkbox"
          />
          <label htmlFor="profileMonthly" className="w-full cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="checkbox-button w-6 h-6 border border-1 border-coolGray rounded-md "></span>
              <div className="flex-1 ml-8">
                <h3 className="text-marinBlue text-xl font-bold">
                  Customizable Profile
                </h3>
                <p className="text-coolGray">Custom theme on your profile</p>
              </div>
              <p className="text-purplishBlue">
                {toggle ? "+$20/yr" : "+2/mo"}
              </p>
            </div>
          </label>
        </div>
      </div>
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
