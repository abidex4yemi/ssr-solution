import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="container">
      <div style={{ marginTop: "150px", textAlign: "center" }}>
        <h1>Ooops, route not found.</h1>
      </div>
    </div>
  );
};

export default {
  component: NotFoundPage
};
