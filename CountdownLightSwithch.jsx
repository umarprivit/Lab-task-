import { useEffect, useState } from "react";
import "./App.css";

function CountdownLightSwitch() {
  const [theme, setTheme] = useState(false);
  let [time, setTime] = useState(30);
  let [progress, setProgress] = useState(0);
  //   const [timerStart, setTimerStart] = useState(false);
  useEffect(() => {
    console.log(theme);
    document.querySelector("body").className = theme ? "light" : "";

    document.querySelector(".progress").style.width = progress + "%";
    if (time == 0) {
    //   document.querySelector("#timerDisplay").textContent = "Time's UP";
      toggleTheme();
    }
  }, [theme, time]);

  function resetTimer() {
    setTime(30);
  }

  function startTimer() {
    let interval = setInterval(() => {
      time = time - 1;
      setTime(time);
      progress = progress + 3.3333333;
      setProgress(progress);
      if (time == 0) {
        clearInterval(interval);
      }
    }, 100);
  }
  function toggleTheme() {
    theme && setTheme(!theme);
    // document.querySelector("#timerDisplay").textContent = "Start Timer";
    setProgress(0);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="themeToggle"
              checked={theme}
              onChange={() => setTheme(!theme)}
            />
            <span className="slider"></span>
          </label>
          <span>Light Mode</span>
        </div>
      </div>

      <div className="timer-section">
        <div className="progress-bar">
          <div className="progress" id="progress"></div>
        </div>
        <div className="timer" id="timerDisplay">
          {time == 0 ? "Time's UP" : time == 30 ? "Start Timer" : time}s
        </div>
        <div className="btn-group">
          <button id="startButton" onClick={startTimer}>
            Start Timer
          </button>
          <button id="resetButton" onClick={resetTimer}>
            Reset Timer
          </button>
        </div>
        <div className="message" id="messageArea"></div>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
