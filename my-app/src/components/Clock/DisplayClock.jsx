import React from "react";
import "./clock.css";
// import ClockStyles  from './clock.css';

const Styles = {
  minutes: {},
  hours: {},
  seconds: {},
};

function DisplayClock({ time }) {
  const [hours, minutes, seconds] = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ].map((num) => (num < 10 ? `0${num}` : num));
  const text = `${hours}:${minutes}:${seconds}`;
  return (
    <h1 className="clock" style={{ color: "black" }}>
      <span className="hours" style={Styles.hours}>
        {hours}
      </span>
      :
      <span className="minutes" style={Styles.minutes}>
        {minutes}
      </span>
      :
      <span className="seconds" style={Styles.seconds}>
        {seconds}
      </span>
    </h1>
  );
}

export default DisplayClock;
