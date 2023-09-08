import { createContext, useContext, useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const GlobalContext = createContext();

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
  selectedAddOn: [],
};

function GlobalProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [curStep, setCurStep] = useState(0);

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

  const step = steps[curStep];

  const isFirstStep = curStep === 0;
  const isLastStep = curStep === steps.length - 1;

  function next() {
    setCurStep((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  }

  function prev() {
    setCurStep((prev) => {
      if (prev < 0) return prev;
      return prev - 1;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isLastStep) return next();
    else {
      setIsSubmitted(true);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        toggle,
        setToggle,
        data,
        setData,
        isSubmitted,
        setIsSubmitted,
        curStep,
        setCurStep,
        steps,
        step,
        isFirstStep,
        isLastStep,
        next,
        prev,
        updateData,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined)
    throw new Error("DarkModeToggleContext was used outside it's provider");

  return context;
}

export { GlobalProvider, useGlobalContext };
