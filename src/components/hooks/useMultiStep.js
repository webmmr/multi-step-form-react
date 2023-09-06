import { useState } from "react";

export function useMultiStep(steps) {
  const [curStep, setCurStep] = useState(0);

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
  return { curStep, step, isFirstStep, isLastStep, next, prev };
}
