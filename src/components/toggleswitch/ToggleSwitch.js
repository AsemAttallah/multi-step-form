import "./ToggleSwitch.css";
export default function ToggleSwitch({ onClick, isMonthly }) {
  return (
    <div className="toggle-container">
      <h2 className={isMonthly ? "toggle-blue" : "toggle-grey"}>Monthly</h2>
      <label className="switch">
        <input type="checkbox" onClick={onClick} defaultChecked={!isMonthly} />
        <span className="slider round"></span>
      </label>
      <h2 className={isMonthly ? "toggle-grey" : "toggle-blue"}>Yearly</h2>
    </div>
  );
}
