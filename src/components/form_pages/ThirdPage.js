import React, { Fragment } from "react";
import ItemForm from "../form_utils/ItemForm";

export const ThirdPage = ({ onChange, formData: { zip, email, phone } }) => {
  return (
    <Fragment>
      <ItemForm
        name={"zip"}
        value={zip}
        label={"ZIP Adress"}
        onChange={onChange}
      ></ItemForm>
      <ItemForm
        name={"email"}
        value={email}
        type="email"
        label={"Email"}
        onChange={onChange}
      ></ItemForm>
      <ItemForm
        name={"phone"}
        value={phone}
        type="tel"
        label={"Phone Number"}
        onChange={onChange}
      ></ItemForm>
    </Fragment>
  );
};

export default ThirdPage;
