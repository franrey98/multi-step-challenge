import useSteps from "../../hooks/useSteps";

const ButtonBackStep = () => {
  const { backStep } = useSteps();
  return <button onClick={backStep}>Go Back</button>;
};

export default ButtonBackStep;
