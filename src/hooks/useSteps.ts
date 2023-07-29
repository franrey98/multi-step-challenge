import { useContext } from "react";
import { StepsContext } from "../context/StepsContext";

const useSteps = () => {
  const context = useContext(StepsContext);

  if (!context) {
    throw new Error("useSteps must be used within an StepsProvider");
  }

  return context;
};

export default useSteps;
