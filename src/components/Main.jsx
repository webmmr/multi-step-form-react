import Button from "./shared/Button";

function Main({ step, isFirstStep, isLastStep, next, prev, onSubmit }) {
  return (
    <form className="flex-1 px-[120px] pt-12" onSubmit={onSubmit}>
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
