import { useState } from "react";
import Sidebar from "./components/Sidebar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import ThankYou from "./components/ThankYou";

function App() {
  const [activeStep, setActiveStep] = useState(null);

  function nextStep() {
    setActiveStep((prev) => prev + 1);
  }
  function prevStep() {
    setActiveStep((prev) => prev - 1);
  }

  return (
    <div className="bg-magnolia py-10 h-screen items-center flex">
      <section className="container mx-auto flex p-5 bg-white rounded-lg min-h-[80vh]">
        {/* Sidebar / Topbar */}
        {<Sidebar activeStep={activeStep} />}
        {/* Main Area */}
        <form className="flex-1 px-[120px] pt-12">
          <div>
            {activeStep === 0 ? (
              <StepOne />
            ) : activeStep === 1 ? (
              <StepTwo />
            ) : activeStep === 2 ? (
              <StepThree />
            ) : activeStep === 3 ? (
              <StepFour />
            ) : (
              <ThankYou />
            )}

            {activeStep && (
              <div
                className={`flex ${
                  activeStep !== 0 ? "justify-between" : "justify-end"
                } items-center mt-[120px]`}
              >
                {activeStep !== 0 && (
                  <button
                    type="button"
                    className="text-coolGray hover:text-marinBlue"
                    onClick={prevStep}
                  >
                    Go back
                  </button>
                )}
                <button
                  type="button"
                  className="bg-marinBlue hover:bg-purplishBlue text-white py-3 px-5 rounded-lg"
                  onClick={nextStep}
                >
                  {activeStep !== 3 ? "Next Step" : "Confirm"}
                </button>
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
