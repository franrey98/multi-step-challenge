import ButtonBackStep from "../../ButtonStep/ButtonBackStep";
import ButtonStep from "../../ButtonStep/ButtonStep";

const StepTwo = () => {
  return (
    <div>
      <p>Step Two</p>
      <ButtonBackStep />
      <ButtonStep textButton="Next Step" />
    </div>
  );
};

export default StepTwo;
