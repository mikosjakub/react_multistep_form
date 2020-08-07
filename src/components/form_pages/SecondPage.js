import React, { Fragment } from "react";
import ItemForm from "../form_utils/ItemForm";


export const SecondPage = ({
  onChange,
  formData: { address, city, state },
}) => {
  return (
    <Fragment>
      <ItemForm
        name={"adress"}
        value={address}
        label={"Adress"}
        onChange={onChange}
      ></ItemForm>
      <ItemForm
        name={"city"}
        value={city}
        label={"City"}
        onChange={onChange}
      ></ItemForm>
      <ItemForm
        name={"state"}
        value={state}
        label={"State"}
        onChange={onChange}
      ></ItemForm>
    </Fragment>
  );
};

export default SecondPage;
