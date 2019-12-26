import React from "react";

import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <ClassCounter></ClassCounter>
        <HookCounter></HookCounter>
        <HookCounterTwo></HookCounterTwo>
      </div>
    </div>
  );
}

export default App;
