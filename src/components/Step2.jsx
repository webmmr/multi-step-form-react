import Header from "./shared/Header";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import { useState } from "react";

const StepTwo = ({
  toggle,
  setToggle,
  billingMonthly,
  billingYearly,
  updateData,
  monthlyBilling,
  setMonthlyBilling,
  yearlyBilling,
  setYearlyBilling,
}) => {
  const handleChange = (newValue) => {
    if (!toggle) {
      setMonthlyBilling(newValue);
      updateData({ billingMonthly: newValue });
    } else {
      setMonthlyBilling("");
      setYearlyBilling(newValue);
      updateData({
        billingMonthly: "",
        billingYearly: newValue,
      });
    }
  };

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing"
      />

      {/* Monthly Billing Options */}
      {!toggle && (
        <div className="radio flex justify-between items-start mb-5">
          <div className="arcadeBox flex-1">
            <input
              type="radio"
              value="9"
              id="arcadeMonthly"
              name={billingMonthly}
              className="billing"
              checked={monthlyBilling === "9"}
              onChange={() => handleChange("9")}
            />
            <label htmlFor="arcadeMonthly" className="cursor-pointer">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mr-2 hover:pointer ">
                <img src={arcade} alt="Arcade" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Arcade</h2>
                <p className="text-coolGray">$9/mo</p>
              </div>
            </label>
          </div>

          <div className="advancedBox flex-1">
            <input
              type="radio"
              value="12"
              id="advancedMonthly"
              name={billingMonthly}
              className="billing"
              checked={monthlyBilling === "12"}
              onChange={() => handleChange("12")}
            />
            <label htmlFor="advancedMonthly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mx-2 hover:pointer ">
                <img src={advanced} alt="Advanced" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Advanced</h2>
                <p className="text-coolGray">$12/mo</p>
              </div>
            </label>
          </div>

          <div className="proBox flex-1">
            <input
              type="radio"
              value="15"
              id="proMonthly"
              name={billingMonthly}
              className="billing"
              checked={monthlyBilling === "15"}
              onChange={() => handleChange("15")}
            />
            <label htmlFor="proMonthly" className="w-full">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 ml-2 hover:pointer ">
                <img src={pro} alt="Pro" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Pro</h2>
                <p className="text-coolGray">$15/mo</p>
              </div>
            </label>
          </div>
        </div>
      )}
      {/* Yearly Billing Options */}
      {toggle && (
        <div className=" flex justify-between items-start mb-5">
          <div className="arcadeBox flex-1">
            <input
              type="radio"
              value="90"
              id="arcadeYearly"
              name={yearlyBilling}
              className="billing"
              checked={yearlyBilling === "90"}
              onChange={() => handleChange("90")}
            />
            <label htmlFor="arcadeYearly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mr-2 hover:pointer ">
                <img src={arcade} alt="Arcade" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Arcade</h2>
                <p className="text-coolGray">$90/yr </p>
                <p className="text-purplishBlue">2 months free</p>
              </div>
            </label>
          </div>

          <div className="advancedBox flex-1">
            <input
              type="radio"
              value="120"
              id="advancedYearly"
              name={billingYearly}
              className="billing"
              checked={billingYearly === "120"}
              onChange={() => handleChange("120")}
            />
            <label htmlFor="advancedYearly">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 mx-2 hover:pointer ">
                <img src={advanced} alt="Advanced" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Advanced</h2>
                <p className="text-coolGray">$120/yr</p>
                <p className="text-purplishBlue">2 months free</p>
              </div>
            </label>
          </div>

          <div className="proBox flex-1">
            <input
              type="radio"
              value="150"
              id="proYearly"
              name={billingYearly}
              className="billing"
              checked={billingYearly === "150"}
              onChange={() => handleChange("150")}
            />
            <label htmlFor="proYearly" className="w-full">
              <div className="flex flex-col p-4 rounded-lg border border-1 border-lightGray flex-1 ml-2 hover:pointer ">
                <img src={pro} alt="Pro" className="w-min mb-16" />
                <h2 className="text-marinBlue text-xl">Pro</h2>
                <p className="text-coolGray">$150/yr</p>
                <p className="text-purplishBlue">2 months free</p>
              </div>
            </label>
          </div>
        </div>
      )}

      <div className="bg-magnolia rounded-lg flex justify-center p-4">
        <p className={!toggle ? "text-marinBlue" : "text-coolGray"}>Monthly</p>
        <div className="flex items-center justify-center mx-5">
          <label
            htmlFor="toggleB"
            className="flex items-center cursor-pointer hover:pointer "
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                onChange={() => setToggle(!toggle)}
              />

              <div className="block bg-marinBlue w-12 h-6 rounded-full"></div>

              <div
                className={`dot absolute top-1  bg-white w-4 h-4 rounded-full transition ${
                  !toggle ? "left-1 " : "right-7 "
                }`}
              ></div>
            </div>
          </label>
        </div>
        <p className={toggle ? "text-marinBlue" : "text-coolGray"}>Yearly</p>
      </div>
    </>
  );
};

export default StepTwo;
