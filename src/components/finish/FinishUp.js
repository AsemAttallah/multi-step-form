import "./FinishUp.css";
export default function FinishUp({ allCollectedData, setStepNumber }) {
  const data = allCollectedData;
  console.log(data);

  function changeBtnHandler() {
    setStepNumber(2);
  }

  const total =
    data.planSelected.value +
    data.selectedAddOns.reduce(
      (acc, currentValue) => acc + currentValue.value,
      0
    );
  return (
    <div className="finish-up-container">
      <div>
        <h1 className="finish-title-text blod-blue">Finishing up</h1>
        <p className="grey">
          Double-check everything looks OK before comfirming.
        </p>
      </div>
      <div className="final-details-container">
        <div className="all-without-total">
          <div className="plan-chosen">
            <div className="plan-chosen-name">
              <h1 className="blod-blue">
                {data.planSelected.name}{" "}
                {data.isMonthly ? "(Monthly)" : "(Yearly)"}
              </h1>
              <p onClick={changeBtnHandler} className="grey under-line">
                Change
              </p>
            </div>
            <h1 className="blod-blue">{data.planSelected.price}</h1>
          </div>
          <div className="all-add-ons">
            <AddOnsRender data={data} />
          </div>
        </div>
        <div className="total">
          <p className="grey">
            Total ({data.isMonthly ? "per month" : "per year"})
          </p>
          <h2 className="total-price blod-blue ">
            {data.isMonthly ? `+$${total}/mo` : `+$${total}/yr`}
          </h2>
        </div>
      </div>
    </div>
  );
}

function AddOnsRender({ data }) {
  return data.selectedAddOns.map((el) => {
    return (
      <div className="add-selected">
        <p className="grey">{el.name}</p>
        <p className="blod-blue">{el.price}</p>
      </div>
    );
  });
}
