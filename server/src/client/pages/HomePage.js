import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>Welcome to the component.</div>
      <button onClick={() => console.log("You clicked me")}>Press me!</button>
    </div>
  );
};

export default { component: HomePage };
