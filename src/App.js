import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import IronbnbList from "./components/IronbnbList";
// import TimerTwo from "./components/03-use-effect-mounting/TimerTwo";
// import TimerThree from "./components/04-use-effect-unmounting/TimerThree";
// import TimerFour from "./components/05-use-effect-conditional-updates/TimerFour";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}
      {show && <Timer />}
      {show && <IronbnbList />}
    </div>
  );
}

export default App;
