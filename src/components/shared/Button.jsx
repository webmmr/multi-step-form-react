function Button({ isFirstStep, isLastStep, next, prev }) {
  return (
    <div className="flex justify-between items-center mt-20">
      <button
        type="button"
        className="text-coolGray hover:text-marinBlue"
        onClick={prev}
      >
        {isFirstStep ? "" : "Go back"}
      </button>

      <button
        type="submit"
        className="bg-marinBlue hover:bg-purplishBlue text-white py-3 px-5 rounded-lg"
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default Button;
