import React from "react";

import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <ClassCounter></ClassCounter>
        <HookCounter></HookCounter>
      </div>
    </div>
  );
}

export default App;
