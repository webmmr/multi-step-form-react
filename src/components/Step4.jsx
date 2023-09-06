import Header from "./shared/Header";

function StepFour({
  name,
  email,
  phone,
  billingMonthly,
  billingYearly,
  addOn,
}) {
  return (
    <>
      <Header
        title="Finishing Up"
        subtitle="Double check everything looks ok before confirming."
      />

      <div className="p-6 bg-alabaster">
        <div className="flex justify-between items-center">
          <div>
            <h3>{billingMonthly ? "Arcade (Monthly)" : "Arcade(Yearly)"}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepFour;
