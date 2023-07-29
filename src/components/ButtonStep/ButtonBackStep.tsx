import useSteps from "../../hooks/useSteps";

const ButtonBackStep = () => {
  const { backStep } = useSteps();
  return (
    <button className="button-back" onClick={backStep}>
      Go Back
    </button>
  );
};

export default ButtonBackStep;
