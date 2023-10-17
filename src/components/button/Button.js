import "./Button.css";
export default function Button({text,type ,onClick}) {
  return (
    <div className="btn-container">
      <button className={`btn ${type}`} onClick={onClick}>{text}</button>
    </div>
  );
}
