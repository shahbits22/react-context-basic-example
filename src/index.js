import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./input";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Basic Example of React Context </h1>
      <h2>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level!
      </h2>
      <InputForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
