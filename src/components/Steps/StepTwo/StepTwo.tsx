import ButtonBackStep from "../../ButtonStep/ButtonBackStep";
import ButtonStep from "../../ButtonStep/ButtonStep";
import { Icons } from "../../Svg";

const StepTwo = () => {
  const { IconAdvanced, IconArcade, IconPro } = Icons;
  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Select your plan</h1>
      <p>You have the option of monthly or yearly biling</p>
      <div style={{ display: "flex", margin: "2rem 0px" }}>
        <div>
          <IconArcade />
          <h2>Arcade</h2>
          <p>$90/yr</p>
          <h3>2 months free</h3>
        </div>
        <div>
          <IconAdvanced />
          <h2>Advanced</h2>
          <p>$120/yr</p>
          <h3>2 months free</h3>
        </div>
        <div>
          <IconPro />
          <h2>Pro</h2>
          <p>$150/yr</p>
          <h3>2 months free</h3>
        </div>
      </div>
      <div>
        <p>Monthly - Yearly</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <ButtonBackStep />
        <ButtonStep textButton="Next Step" />
      </div>
    </div>
  );
};

export default StepTwo;
