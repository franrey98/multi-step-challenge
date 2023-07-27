import BgSidebar from "../components/BgSidebar/BgSidebar";
import FormStepOne from "../components/FormStepOne/FormStepOne";

const Home = () => {
  return (
    <div className="container-app">
      <div className="home-container">
        <BgSidebar />
        <FormStepOne />
      </div>
    </div>
  );
};

export default Home;
