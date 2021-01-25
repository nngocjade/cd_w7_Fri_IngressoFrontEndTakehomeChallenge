import React, { useState } from "react";
import "./App.css";
import Calendar from "./calendar/components/Calendar";
import moment from "moment";

function App() {
  //VALUE - is going to be the currently selected day
  //INITIAL VALUE - is empty
  const [value, setValue] = useState(moment());

  return (
    <div className="App">
      <Calendar value={value} onChange={setValue} />
    </div>
  );
}

export default App;
