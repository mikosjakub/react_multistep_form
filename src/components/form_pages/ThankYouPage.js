import React, { Fragment } from "react";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <Fragment>
        <h1>Thank You!</h1>
        <button
          className="btn btn-red"
          onClick={() => window.location.reload()}
        >
          Reload Window
        </button>
      </Fragment>
    </div>
  );
};

export default ThankYouPage;
