import useSteps from "../../hooks/useSteps";
import { Step } from "../../types/steps";

interface PropsSteps {
  items: Step;
}

const SelectSteps = ({ items }: PropsSteps) => {
  const { currentStep } = useSteps();

  console.log(currentStep);

  const isActive = currentStep === items.step;
  const numberClass = isActive ? "active-number" : "number";
  const pointerSteps = isActive ? "pointer-steps-active" : "pointer-steps";
  return (
    <div className="direction">
      <div className={pointerSteps}>
        <p className={numberClass}>{items.step}</p>
      </div>
      <div className="text-steps">
        <p className="step">STEP {items.step}</p>
        <p className="info">{items.title}</p>
      </div>
    </div>
  );
};

export default SelectSteps;
