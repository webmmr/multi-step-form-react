import { useGlobalContext } from "../context/GlobalContext";
import Button from "./shared/Button";

function Main() {
  const { step, isFirstStep, isLastStep, next, prev, handleSubmit } =
    useGlobalContext();

  return (
    <form
      className="flex-1 md:px-[120px] md:pt-12 p-10 bg-white md:mx-0 mx-10 md:rounded-none md:rounded-r-lg rounded-lg md:mt-0 mt-[-100px]"
      onSubmit={handleSubmit}
    >
      {step}
      <Button
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        next={next}
        prev={prev}
      />
    </form>
  );
}

export default Main;
