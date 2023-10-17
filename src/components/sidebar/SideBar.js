import "./sidebar.css";
import Step from "../step/Step";
import { useState } from "react";

const allContent = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
export default function SideBar({ stepNumber, setStepNumber }) {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  console.log(userName, pass);

  function onLogInHandler(e) {
    e.preventDefault();
    if (userName === "admin" && pass === "admin") {
      setStepNumber(10);
    }
  }
  return (
    <div className="side-bar">
      <div className="side-bar-steps-container">
        {Array.from({ length: 4 }, (_, i) => {
          return (
            <Step
              key={i}
              num={i + 1}
              content={allContent[i]}
              stepNumber={stepNumber}
            />
          );
        })}
      </div>
      <form className="log-in-form" onSubmit={onLogInHandler}>
        <div className="user-name-pass-fields">
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="log-in-btn">Log In</button>
      </form>
    </div>
  );
}
