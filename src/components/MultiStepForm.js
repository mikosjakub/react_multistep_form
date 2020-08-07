import React, { useState } from "react";
import FirstPage from "./form_pages/FirstPage.js";
import SecondPage from "./form_pages/SecondPage";
import ThirdPage from "./form_pages/ThirdPage";
import Preview from "./form_pages/Preview";
import FormBtns from "./form_utils/FormBtns";
import ThankYouPage from "./form_pages/ThankYouPage";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [step, setStep] = useState({ currentStep: 1 });
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const preFilledForm = {
    firstName: "John",
    secondName: "",
    lastName: "Doe",
    address: "Cool Adress 404",
    city: "Cool City",
    state: "Cool State",
    zip: "00-000",
    email: "example@ex.com",
    phone: "000000000",
  };

  const prefillForm = () => {
    setFormData(preFilledForm);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendForm = () => {
    setLoading(true);
    console.log("Sent form data: ", JSON.stringify(formData));
    setFormSent(true);
  };

  const props = {
    formData,
    setFormData,
    onChange,
  };

  const buttonProps = { setStep, step, prefillForm, sendForm };

  return formSent === true ? (
    <ThankYouPage loading={loading}></ThankYouPage>
  ) : (
    <div className="form">
      <h3>Sign In</h3>
      {step.currentStep === 1 && <FirstPage {...props}></FirstPage>}
      {step.currentStep === 2 && <SecondPage {...props}></SecondPage>}
      {step.currentStep === 3 && <ThirdPage {...props}></ThirdPage>}
      {step.currentStep === 4 && <Preview {...props}></Preview>}
      <FormBtns {...buttonProps}></FormBtns>
    </div>
  );
};

export default MultiStepForm;
