import React from "react";

import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <ClassCounter></ClassCounter>
        <HookCounter></HookCounter>
        <HookCounterTwo></HookCounterTwo>
        <HookCounterThree></HookCounterThree>
      </div>
    </div>
  );
}

export default App;
