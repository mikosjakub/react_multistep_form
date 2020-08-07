import React, { Fragment } from "react";
import ItemForm from "../form_utils/ItemForm";

export const FirstPage = (props) => {
  const {
    onChange,

    formData: { firstName, secondName, lastName },
  } = props;

  return (
    <Fragment>
      <ItemForm
        name={"firstName"}
        label={"First Name"}
        onChange={onChange}
        value={firstName}
      ></ItemForm>
      <ItemForm
        name={"secondName"}
        value={secondName}
        label={"Second Name"}
        onChange={onChange}
        required={false}
      ></ItemForm>
      <ItemForm
        name={"lastName"}
        value={lastName}
        label={"Last Name"}
        onChange={onChange}
      ></ItemForm>
      {/* <FormBtns {...buttonProps}></FormBtns> */}
    </Fragment>
  );
};

export default FirstPage;
