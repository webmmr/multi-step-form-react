import { useGlobalContext } from "../context/GlobalContext";

const Sidebar = () => {
  const { curStep, steps } = useGlobalContext();

  return (
    <div className="sidebar md:w-1/4 w-full rounded-lg object-contain md:px-5 md:py-20 pt-10 pb-[150px] md:bg-desktop bg-mobile bg-position bg-cover">
      <ul className="flex md:flex-col flex-row justify-center">
        {steps.map((_, index) => {
          return (
            <li className="flex items-center text-lightBlue py-3" key={index}>
              <div
                className={`w-10 h-10 text-xl font-semibold border rounded-full text-center leadiing-loose mr-4 py-1 ${
                  index === curStep
                    ? "bg-lightBlue text-marinBlue border-lightBlue"
                    : "bg-transparent"
                }`}
              >
                {index + 1}
              </div>
              <div className="md:block hidden">
                <p className="uppercase text-pastelBlue">Step {index + 1}</p>
                <h4 className="uppercase font-bold text-lg">
                  {index === 0
                    ? "Your Info"
                    : index === 1
                    ? "Select Plan"
                    : index === 2
                    ? "Add-ons"
                    : index === 3
                    ? "Summary"
                    : ""}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
