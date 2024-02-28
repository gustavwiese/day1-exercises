import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props exercise" /> : null}
            {selectedView == "list" ? <ListDemo title="List exercise" /> : null}
            {selectedView == "event" ? <EventDemo title="Event exercise" /> : null}
            {selectedView == "form" ? <FormUncontrolled title="Form exercise" /> : null}
            {selectedView == "state1" ? <StateDemo1 title="State exercise" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list")}>
        List demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event")}>
        Event demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form")}>
        Form demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1
      </button>
    </>
  );
};
