import React from "react";

interface PropsButton {
  textButton: string;
}

const ButtonStep = ({ textButton }: PropsButton) => {
  return (
    <div className="button-container">
      <button className="style">{textButton}</button>
    </div>
  );
};

export default ButtonStep;
