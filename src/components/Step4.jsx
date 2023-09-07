import Header from "./shared/Header";

function StepFour({ selectedPlan, selectedAddOn }) {
  const title =
    selectedPlan.value === "9"
      ? "Arcade (Monthly)"
      : selectedPlan.value === "12"
      ? "Advanced(Monthly)"
      : selectedPlan.value === "15"
      ? "Pro(Monthly)"
      : selectedPlan.value === "90"
      ? "Advanced(Yearly)"
      : selectedPlan.value === "120"
      ? "Advanced(Yearly)"
      : selectedPlan.value === "150"
      ? "Advanced(Yearly)"
      : "";

  return (
    <>
      <Header
        title="Finishing Up"
        subtitle="Double check everything looks ok before confirming."
      />

      <div className="p-6 bg-alabaster">
        <div className="flex justify-between items-center border-solid border-b-2 border-lightGray pb-8">
          <div>
            <h3 className="text-marinBlue font-bold text-xl mb-2">{title}</h3>
            <a
              href="#"
              className="underline text-purplishBlue hover:text-marinBlue"
            >
              Change
            </a>
          </div>

          <p className="text-marinBlue text-xl font-bold">
            ${selectedPlan.value}
            {selectedPlan.value < 90 ? "/mo" : "/yr"}
          </p>
        </div>
        <ul>
          {selectedAddOn.map((addOn) => {
            if (addOn.value)
              return (
                <li className="flex justify-between items-center">
                  <p>{addOn.title}</p>
                  <p>
                    ${addOn.value}
                    {addOn.value < 90 ? "/mo" : "/yr"}
                  </p>
                </li>
              );
          })}
        </ul>
      </div>
    </>
  );
}

export default StepFour;
