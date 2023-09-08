import { useGlobalContext } from "../context/GlobalContext";
import Header from "./shared/Header";

function StepFour({ selectedPlan, selectedAddOn }) {
  const { setCurStep } = useGlobalContext();
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

  const total =
    Number(selectedPlan.value) +
    selectedAddOn.reduce((acc, cur) => acc + Number(cur.value), 0);

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
              onClick={() => setCurStep(1)}
            >
              Change
            </a>
          </div>

          <p className="text-marinBlue text-xl font-bold">
            ${selectedPlan.value}
            {selectedPlan.value < 90 ? "/mo" : "/yr"}
          </p>
        </div>
        <ul className="mt-5">
          {selectedAddOn.map((addOn) => {
            if (addOn.value)
              return (
                <li
                  className="flex justify-between items-center py-2"
                  key={addOn.title}
                >
                  <p className="text-coolGray">{addOn.title}</p>
                  <p className="text-marinBlue font-semibold">
                    +${addOn.value}
                    {selectedPlan.value < 90 ? "/mo" : "/yr"}
                  </p>
                </li>
              );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-between p-6">
        <p className="text-coolGray">
          Total {selectedPlan.value < 90 ? "(per month)" : "(per year)"}
        </p>
        <p className="text-marinBlue font-bold text-2xl">
          +${total}
          {total < 90 ? "/mo" : "/yr"}
        </p>
      </div>
    </>
  );
}

export default StepFour;
