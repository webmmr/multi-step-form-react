import { useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

import AppLayout from "./components/AppLayout";
import { useMultiStep } from "./components/hooks/useMultiStep";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Button from "./components/shared/Button";

const initialData = {
  name: "",
  email: "",
  phone: "",
  billingMonthly: "",
  billingYearly: "",
  addOn: "",
  profileYearly: "",
};

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialData);
  const [monthlyBilling, setMonthlyBilling] = useState("");
  const [yearlyBilling, setYearlyBilling] = useState("");

  function updateData(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const steps = [
    <Step1 {...data} updateData={updateData} />,
    <Step2
      {...data}
      updateData={updateData}
      toggle={toggle}
      setToggle={setToggle}
      monthlyBilling={monthlyBilling}
      setMonthlyBilling={setMonthlyBilling}
      yearlyBilling={yearlyBilling}
      setYearlyBilling={setYearlyBilling}
    />,
    <Step3 {...data} updateData={updateData} toggle={toggle} />,
    <Step4 {...data} updateData={updateData} />,
  ];
  const { curStep, step, isFirstStep, isLastStep, next, prev } =
    useMultiStep(steps);

  function handleSubmit(e) {
    e.preventDefault();
    // if (!isLastStep) return next();
    console.log("clicked");
  }

  console.log(toggle);

  // console.log(data);

  return (
    <div className="bg-magnolia py-10 h-screen items-center flex">
      <section className="container mx-auto flex p-5 bg-white rounded-lg min-h-[80vh]">
        <Sidebar curStep={curStep} />
        <Main
          step={step}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          next={next}
          prev={prev}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  );
}

export default App;
