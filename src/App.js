import { useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import PersonalInfo from "./components/personalinfo/PersonalInfo";
import Button from "./components/button/Button";
import SelectPlan from "./components/selectplan/SelectPlan";
import PickAdd from "./components/pickadd/PickAdd";
import FinishUp from "./components/finish/FinishUp";
import ThanksMessage from "./components/thanksmessage/ThanksMessage";
import TableOFData from "./components/table/TableOfData";

export default function App() {
  // personal info
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [checkValidity,setCheckValidity]=useState(false);

  //select plan
  const [planSelected, setPlanSelected] = useState(null);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  //pick addons
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [stepNumber, setStepNumber] = useState(1);

  const [completePersonalInfo, setCompletePersonalInfo] = useState(false);
  
  const allCollectedData = {
    name,
    email,
    phoneNumber,
    planSelected,
    isMonthly,
    selectedAddOns,
  };

  function nextButtonHandler() {
    setCheckValidity(true)
    if (stepNumber === 4) {
      const existingData = JSON.parse(localStorage.getItem("All data")) || [];
      const allData = [...existingData, allCollectedData];
      localStorage.setItem("All data", JSON.stringify(allData));
    }
    if (stepNumber < 5 && (completePersonalInfo || stepNumber > 2)) {
      setStepNumber(stepNumber + 1);
    }
    setCompletePersonalInfo(false);
  }

  function backBtnHandler(){
    setStepNumber(stepNumber - 1);
  }

  function resetHandler() {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPlanSelected(null);
    setIsMonthly(true);
    setSelectedPlan(null);
    setSelectedAddOns([]);
    setStepNumber(1);
    setValidName(false);
    setValidEmail(false);
    setValidNumber(false);
    setCheckValidity(false)
  }

  return (
    <div className="app">
      {stepNumber === 10 && (
        <TableOFData setStepNumber={setStepNumber} onClick={resetHandler} />
      )}
      {stepNumber < 10 && (
        <div className="all-container">
          <SideBar stepNumber={stepNumber} setStepNumber={setStepNumber} />
          <div
            className={stepNumber < 5 ? "right-content" : "right-content-final"}
          >
            {stepNumber === 1 && (
              <PersonalInfo
                setName={setName}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                name={name}
                email={email}
                phoneNumber={phoneNumber}
                setCompletePersonalInfo={setCompletePersonalInfo}
                validName={validName}
                validEmail={validEmail}
                validNumber={validNumber}
                setValidName={setValidName}
                setValidEmail={setValidEmail}
                setValidNumber={setValidNumber}
                checkValidity={checkValidity}
               setCheckValidity={setCheckValidity}
              />
            )}
            {stepNumber === 2 && (
              <SelectPlan
                setPlanSelected={setPlanSelected}
                setIsMonthly={setIsMonthly}
                setSelectedPlan={setSelectedPlan}
                planSelected={planSelected}
                isMonthly={isMonthly}
                selectedPlan={selectedPlan}
                setCompletePersonalInfo={setCompletePersonalInfo}
                setSelectedAddOns={setSelectedAddOns}
              />
            )}
            {stepNumber === 3 && (
              <PickAdd
                isMonthly={isMonthly}
                setSelectedAddOns={setSelectedAddOns}
                selectedAddOns={selectedAddOns}
                setCompletePersonalInfo={setCompletePersonalInfo}
              />
            )}
            {stepNumber === 4 && (
              <FinishUp
                allCollectedData={allCollectedData}
                setStepNumber={setStepNumber}
              />
            )}
            {stepNumber === 5 && <ThanksMessage />}
            <div
              className={stepNumber === 1 ? "one-button" : "top-btn-container "}
            >
              {stepNumber > 1 && stepNumber < 5 && (
                <Button
                  text="Go Back"
                  type="back-btn"
                  onClick={backBtnHandler}
                  className="fixed-left"
                />
              )}
              {5 > stepNumber && (
                <Button
                  text={stepNumber === 4 ? "Confirm" : "Next Step"}
                  type="next-btn"
                  onClick={nextButtonHandler}
                  className="fixed-right"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
