import "./selectplan.css";
import arcade from "./icon-arcade.svg";
import advanced from "./icon-advanced.svg";
import pro from "./icon-pro.svg";
import ToggleSwitch from "../toggleswitch/ToggleSwitch";

const planData = [
  { image: arcade, name: "Acade", price: 9 },
  { image: advanced, name: "Advanced", price: 12 },
  { image: pro, name: "Pro", price: 15 },
];
export default function SelectPlan({
  setPlanSelected,
  setIsMonthly,
  setSelectedPlan,
  planSelected,
  isMonthly,
  selectedPlan,
  setCompletePersonalInfo,
  setSelectedAddOns,
}) {
  function onClickHandler(i, data) {
    setCompletePersonalInfo(true);
    setSelectedPlan(i);
    let allData;
    isMonthly
      ? (allData = { ...data, price: `$${data.price}/mo`, value: data.price })
      : (allData = {
          ...data,
          price: `$${data.price * 10}/yr`,
          value: data.price * 10,
        });

    setPlanSelected(allData);
  }

  if (planSelected) {
    setCompletePersonalInfo(true);
  } else {
    setCompletePersonalInfo(false);
  }

  function toggleHandler() {
    setIsMonthly(!isMonthly);
    setPlanSelected(null);
    setSelectedPlan(null);
    setSelectedAddOns([]);
  }
  return (
    <div className="select-plan-container">
      <div>
        <h1 className="select-title-text blod-blue">Select your plan</h1>
        <p className="select-instructor-text grey">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="options-container">
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <Plan
              key={i}
              image={planData[i].image}
              name={planData[i].name}
              price={
                isMonthly
                  ? `$${planData[i].price}/mo`
                  : `$${planData[i].price * 10}/yr`
              }
              onClick={() => onClickHandler(i, planData[i])}
              selectedPlan={i === selectedPlan && true}
              isMonthly={isMonthly}
            />
          );
        })}
      </div>
      <ToggleSwitch onClick={toggleHandler} isMonthly={isMonthly} />
    </div>
  );
}
function Plan({ image, name, price, selectedPlan, onClick, isMonthly }) {
  return (
    <div
      className={`plan-option ${selectedPlan && "bg-plan"}`}
      onClick={onClick}
    >
      <img src={image}  alt="img"/>
      <div className="plan-details">
        <h2 className="plan-name blod-blue">{name}</h2>
        <p className="grey">{price}</p>
        {!isMonthly && <p className="blod-blue">2 months free</p>}
      </div>
    </div>
  );
}
