import React from "react";
import ReactDOM from "react-dom";
import Img from "./setupDemo.jpg";
import "./styles.scss";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <img src={Img} />
      <p>Styling using sass</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
