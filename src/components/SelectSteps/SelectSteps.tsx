import { Step } from "../../types/steps";

interface PropsSteps {
  items: Step;
}

const SelectSteps = ({ items }: PropsSteps) => {
  console.log(items);
  return (
    <div className="direction">
      <div className="pointer-steps">
        <p className="number">{items.step.replace("step ", "")}</p>
      </div>
      <div className="text-steps">
        <p className="step">{items.step}</p>
        <p className="info">{items.title}</p>
      </div>
    </div>
  );
};

export default SelectSteps;
