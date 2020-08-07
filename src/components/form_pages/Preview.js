import React from "react";

const Preview = ({ formData }) => {
  const {
    firstName,
    secondName,
    lastName,
    address,
    city,
    state,
    zip,
    email,
    phone,
  } = formData;

  return (
    
      <div className="preview">
        <h1>Here's a preview of inputed informations:</h1>
        <p>
          <strong>First Name: </strong> {firstName}{" "}
        </p>
        <p>
          <strong>Second Name: </strong> {secondName}{" "}
        </p>
        <p>
          <strong>Last Name: </strong> {lastName}{" "}
        </p>
        <p>
          <strong>Adress: </strong> {address}{" "}
        </p>
        <p>
          <strong>City: </strong> {city}{" "}
        </p>
        <p>
          <strong>State: </strong> {state}{" "}
        </p>
        <p>
          <strong>ZIP Code: </strong> {zip}{" "}
        </p>
        <p>
          <strong>EMail: </strong> {email}{" "}
        </p>
        <p>
          <strong>Phone Number: </strong> {phone}{" "}
        </p>
      </div>
    
  );
};

export default Preview;
