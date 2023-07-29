import ButtonStep from "../../ButtonStep/ButtonStep";

const FormStepOne = () => {
  return (
    <div className="container-stepOne">
      <h1>Personal Info</h1>
      <p>Please provide your name, email addres, and phone number</p>
      <div className="container-form">
        <div>
          <p>Name</p>
          <input type="text" value={""} placeholder={"e.g Stephen King"} />
        </div>
        <div>
          <p>Email Addres</p>
          <input
            type="text"
            value={""}
            placeholder={"e.g StephenKing@lorem.com"}
          />
        </div>
        <div>
          <p>Phone Number</p>
          <input type="text" value={""} placeholder={"e.g. +1 234 456"} />
        </div>
      </div>
      <ButtonStep textButton="Next Step" />
    </div>
  );
};

export default FormStepOne;
