import useSteps from "../../hooks/useSteps";

interface PropsButton {
  textButton: string;
}

const ButtonStep = ({ textButton }: PropsButton) => {
  const { nextStep } = useSteps();
  return (
    <div className="button-container">
      <button onClick={nextStep} className="style">
        {textButton}
      </button>
    </div>
  );
};

export default ButtonStep;
