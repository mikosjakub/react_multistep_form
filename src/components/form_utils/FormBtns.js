import React from "react";

const FormBtns = ({ step, setStep, prefillForm, sendForm }) => {
  const { currentStep } = step;
  const prevPage = () => {
    currentStep > 1 && setStep({ currentStep: currentStep - 1 });
  };

  const nextPage = () => {
    currentStep < 5 && setStep({ currentStep: currentStep + 1 });
  };

  return (
    <div className="btn-container">
      <button className="btn btn-white" onClick={prevPage}>
        Back
      </button>
      <button className="btn btn-red" onClick={prefillForm}>
        Prefill
      </button>
      {currentStep !== 4 ? (
        <button className="btn btn-green" onClick={nextPage}>
          {currentStep <= 2 && "Next"}
          {currentStep === 3 && "Preview"}
        </button>
      ) : (
        <button className="btn btn-send" onClick={sendForm}>
          Send!
        </button>
      )}
    </div>
  );
};

export default FormBtns;
