import Header from "./shared/Header";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import { useState } from "react";

const StepTwo = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing"
      />

      {/* Monthly Billing Options */}
      {toggle && (
        <div className=" flex justify-between items-start mb-5">
          <div className="arcadeBox flex-1">
            <input
              type="radio"
              value="arcade-monthly"
              id="arcade-monthly"
              name="monthly"
              className="billing"
            />
            <label htmlFor="arcade-monthly" className="cursor-pointer">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mr-2">
                <img src={arcade} alt="Arcade" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Arcade</h2>
                <p className="text-coolGray">$9/mo</p>
              </div>
            </label>
          </div>

          <div className="advancedBox flex-1">
            <input
              type="radio"
              value="advanced-monthly"
              id="advanced-monthly"
              name="monthly"
              className="billing"
            />
            <label htmlFor="advanced-monthly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mx-2">
                <img src={advanced} alt="Advanced" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Advanced</h2>
                <p className="text-coolGray">$12/mo</p>
              </div>
            </label>
          </div>

          <div className="proBox flex-1">
            <input
              type="radio"
              value="pro-monthly"
              id="pro-monthly"
              name="monthly"
              className="billing"
            />
            <label htmlFor="pro-monthly" className="w-full">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 ml-2">
                <img src={pro} alt="Pro" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Pro</h2>
                <p className="text-coolGray">$15/mo</p>
              </div>
            </label>
          </div>
        </div>
      )}
      {/* Yearly Billing Options */}
      {!toggle && (
        <div className=" flex justify-between items-start mb-5">
          <div className="arcadeBox flex-1">
            <input
              type="radio"
              value="arcade-yearly"
              id="arcade-yearly"
              name="yearly"
              className="billing"
            />
            <label htmlFor="arcade-yearly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mr-2">
                <img src={arcade} alt="Arcade" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Arcade</h2>
                <p className="text-coolGray">$9/mo</p>
                {!toggle && <p className="text-purplishBlue">2 months free</p>}
              </div>
            </label>
          </div>

          <div className="advancedBox flex-1">
            <input
              type="radio"
              value="advanced-yearly"
              id="advanced-yearly"
              name="yearly"
              className="billing"
            />
            <label htmlFor="advanced-yearly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mx-2">
                <img src={advanced} alt="Advanced" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Advanced</h2>
                <p className="text-coolGray">$12/mo</p>
                {!toggle && <p className="text-purplishBlue">2 months free</p>}
              </div>
            </label>
          </div>

          <div className="proBox flex-1">
            <input
              type="radio"
              value="pro-yearly"
              id="pro-yearly"
              name="yearly"
              className="billing"
            />
            <label htmlFor="pro-yearly" className="w-full">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 ml-2">
                <img src={pro} alt="Pro" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Pro</h2>
                <p className="text-coolGray">$15/mo</p>
                {!toggle && <p className="text-purplishBlue">2 months free</p>}
              </div>
            </label>
          </div>
        </div>
      )}

      <div className="bg-magnolia rounded-lg flex justify-center p-4">
        <p className={!toggle ? "text-marinBlue" : "text-coolGray"}>Monthly</p>
        <div className="flex items-center justify-center mx-5">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                onChange={() => setToggle(!toggle)}
              />

              <div className="block bg-marinBlue w-12 h-6 rounded-full"></div>

              <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
            </div>
          </label>
        </div>
        <p className={toggle ? "text-marinBlue" : "text-coolGray"}>Yearly</p>
      </div>
    </>
  );
};

export default StepTwo;
