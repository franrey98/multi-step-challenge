import SelectSteps from "../SelectSteps/SelectSteps";
import { Icons } from "../Svg";
import { stepsOfRegister } from "../../utils/steps";

const BgSidebar = () => {
  const { BgSidebarDesktop } = Icons;
  return (
    <>
      <BgSidebarDesktop />
      <div className="svg-position">
        {stepsOfRegister.map((items) => (
          <SelectSteps items={items} key={items.step} />
        ))}
      </div>
    </>
  );
};

export default BgSidebar;
