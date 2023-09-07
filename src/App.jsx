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

import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";

const initialData = {
  name: "",
  email: "",
  phone: "",
  billingMonthly: [
    {
      image: arcade,
      title: "Arcade",
      value: "9",
    },
    {
      image: advanced,
      title: "Advanced",
      value: "12",
    },
    {
      image: pro,
      title: "Pro",
      value: "15",
    },
  ],
  billingYearly: [
    {
      image: arcade,
      title: "Arcade",
      value: "90",
    },
    {
      image: advanced,
      title: "Advanced",
      value: "120",
    },
    {
      image: pro,
      title: "Pro",
      value: "150",
    },
  ],
  addOnMonthly: [
    {
      title: "Online services",
      value: "1",
    },
    {
      title: "Larger storage",
      value: "2",
    },
    {
      title: "Customizable profile",
      value: "2",
    },
  ],
  addOnYearly: [
    {
      title: "Online services",
      value: "10",
    },
    {
      title: "Larger storage",
      value: "20",
    },
    {
      title: "Customizable profile",
      value: "20",
    },
  ],
  selectedPlan: {},
  selectedAddOn: {},
};

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialData);

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
    />,
    <Step3 {...data} updateData={updateData} toggle={toggle} />,
    <Step4 {...data} />,
  ];
  const { curStep, step, isFirstStep, isLastStep, next, prev } =
    useMultiStep(steps);

  function handleSubmit(e) {
    e.preventDefault();
    // if (!isLastStep) return next();

    console.log(data);
  }

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
