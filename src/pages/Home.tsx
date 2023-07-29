import BgSidebar from "../components/BgSidebar/BgSidebar";
import FormStepOne from "../components/Steps/FormStepOne/FormStepOne";
import StepTwo from "../components/Steps/StepTwo/StepTwo";
import useSteps from "../hooks/useSteps";

const Home = () => {
  const { currentStep } = useSteps();
  return (
    <div className="container-app">
      <div className="home-container">
        <BgSidebar />
        {/* Mostrar segun el step que este con condicional */}
        {currentStep === 1 && <FormStepOne />}
        {currentStep === 2 && <StepTwo />}
      </div>
    </div>
  );
};

export default Home;
