import Header from "./shared/Header";

const StepTwo = ({
  toggle,
  setToggle,
  billingMonthly,
  billingYearly,
  updateData,

  selectedPlan,
}) => {
  const filteredPlans = toggle ? billingYearly : billingMonthly;

  const handleChange = (e) => {
    let newSelectedPlan = {};

    newSelectedPlan = filteredPlans.find(
      (plan) => plan.value === e.target.value
    );
    updateData({ selectedPlan: newSelectedPlan });
  };

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing"
      />

      {/* Monthly Billing Options */}
      {!toggle && (
        <ul className="radio flex md:flex-row flex-col  justify-between items-start mb-5">
          {billingMonthly.map((item) => {
            return (
              <li
                className="flex-1 md:w-auto md:my-0 my-2 w-full"
                key={item.title}
              >
                <input
                  type="radio"
                  value={item.value}
                  id={`${item.title}-Monthly`}
                  name="billing"
                  className="billing"
                  required
                  checked={selectedPlan?.value === item.value}
                  onChange={(e) => handleChange(e)}
                />
                <label
                  htmlFor={`${item.title}-Monthly`}
                  className="cursor-pointer checked:border-marinBlue "
                >
                  <div
                    className={`flex flex-col p-4 rounded-lg  border-2  flex-1 mr-2  ${
                      selectedPlan?.value === item.value
                        ? "border-marinBlue bg-alabaster"
                        : "border-lightGray bg-white"
                    } `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-min mb-16"
                    />
                    <h2 className="text-marinBlue text-xl">{item.title}</h2>
                    <p className="text-coolGray">${item.value}/mo</p>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      )}
      {/* Yearly Billing Options */}
      {toggle && (
        <ul className="radio flex md:flex-row flex-col  justify-between items-start mb-5">
          {billingYearly.map((item) => {
            return (
              <li
                className="flex-1 md:w-auto md:my-0 my-2 w-full"
                key={item.title}
              >
                <input
                  type="radio"
                  value={item.value}
                  id={`${item.title}-Yearly`}
                  name="billing"
                  className="billing"
                  required
                  checked={selectedPlan?.value === item.value}
                  onChange={(e) => handleChange(e)}
                />
                <label
                  htmlFor={`${item.title}-Yearly`}
                  className="cursor-pointer checked:border-marinBlue "
                >
                  <div
                    className={`flex flex-col p-4 rounded-lg border border-1 flex-1 mr-2 hover:pointer ${
                      selectedPlan?.value === item.value
                        ? "border-marinBlue"
                        : "border-lightGray bg-white"
                    } `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-min mb-16"
                    />
                    <h2 className="text-marinBlue text-xl">{item.title}</h2>
                    <p className="text-coolGray">${item.value}/yr</p>
                    <p className="text-purplishBlue">2 months free</p>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
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
                onChange={() => setToggle((toggle) => !toggle)}
              />

              <div className="block bg-marinBlue w-12 h-6 rounded-full"></div>

              <div
                className={`dot absolute top-1  bg-white w-4 h-4 rounded-full transition ${
                  !toggle ? "translate-x-1 " : "translate-x-7"
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
