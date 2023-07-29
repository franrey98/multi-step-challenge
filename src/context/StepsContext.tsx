import { createContext, useState } from "react";

interface SteptsContextState {
  currentStep: number;
  nextStep: () => void;
  backStep: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const StepsContext = createContext<SteptsContextState | null>(null);

export const StepsProvider: React.FC<Props> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <StepsContext.Provider
      value={{
        nextStep,
        currentStep,
        backStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
