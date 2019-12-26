import React from "react";

import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        {/*<ClassCounter></ClassCounter>*/}
        {/*<HookCounter></HookCounter>*/}
        {/*<HookCounterTwo></HookCounterTwo>*/}
        {/*<HookCounterThree></HookCounterThree>*/}
        {/*<HookCounterFour></HookCounterFour>*/}
        <ClassCounterOne></ClassCounterOne>
        <HookCounterOne></HookCounterOne>
      </div>
    </div>
  );
}

export default App;
