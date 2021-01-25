import React, { useState, useEffect } from "react";
import "../styles/calendar.css";

import buildCalendar from "../buildCalendar";
import dayStyles, { beforeToday } from "../styles/dayStyles";
import Header from "../components/Header";

//a Calendar is a matrix
//a matrix is an array of arrays

// using .clone() so we dont modify the currently selected day

const Calendar = ({ value, onChange }) => {
  //in order for us to change the selected date on our calendar and to render different calendar months, we're going to need to move the data into local component state

  //CALENDAR - is going to contain the matrix of our calendar weeks and days
  //INITIAL VALUE - here is an empty array
  const [calendar, setCalendar] = useState([]);

  //here, we want the calendar array to be rebuilt every time you change the selected day (which is the value variable)
  //this way when you change the day to, for example, to a day in the next month then the calendar will re-render and will then show the next month
  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        <div>
          {calendar.map((week) => (
            <div>
              {week.map((day) => (
                //the onClick function is going to return a call to setValue and pass the currently iterated day. So, if you click the div that contains that day the value will be set to that day
                //if not beforeToday returns true, then it will allow us to set the value but if not beforeToday returns false then the second half of the logic gate never gets hit and we cant change the day
                <div
                  className="day"
                  onClick={() => !beforeToday(day) && onChange(day)}
                >
                  <div className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

/*useState 
 - returns a tuple, which is an array of two values
     - the first value is always going to be the getter and the second value is always going to be the setter
 
 - is an asynchronous call
     - every time you modify the state of a component, the component re-renders
*/

/*useEffect
 - takes an arrow function and whatever is inside of that arrow function will be re-triggered whenever the dependencies change
     - the dependencies:
         - are the secon argument to the call to useEffect and they are designated by an array of dependencies
            - if the array of dependencies is empty, then, useEffect will only happen once
*/
