import React from "react";

const Home = () => {
  return (
    <div>
      <div>Welcome to the component.</div>
      <button onClick={() => console.log("You clicked me")}>Press me!</button>
    </div>
  );
};

export default Home;
