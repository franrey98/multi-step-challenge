import ButtonStep from "../ButtonStep/ButtonStep";

const FormStepOne = () => {
  return (
    <div>
      <h1>Personal Info</h1>
      <p style={{ marginTop: "5px" }}>
        Please provide your name, email addres, and phone number
      </p>
      <div style={{ marginTop: "2rem" }}>
        <p>Name</p>
        <input
          style={{ marginTop: "5px" }}
          type="text"
          value={""}
          placeholder={"e.g Stephen King"}
        />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p>Email Addres</p>
        <input
          style={{ marginTop: "5px" }}
          type="text"
          value={""}
          placeholder={"e.g StephenKing@lorem.com"}
        />
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p>Phone Number</p>
        <input
          style={{ marginTop: "5px" }}
          type="text"
          value={""}
          placeholder={"e.g. +1 234 456"}
        />
      </div>
      <ButtonStep textButton="Next Step" />
    </div>
  );
};

export default FormStepOne;
