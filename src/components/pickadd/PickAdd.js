import "./PickAdd.css";

const addOnsData = [
  { name: "Online service", desc: "Accsess to multiplayer games", price: 1 },
  { name: "Larger storage", desc: "Extra 1 TB of cloud save", price: 2 },
  {
    name: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];

export default function PickAdd({
  isMonthly,
  setSelectedAddOns,
  selectedAddOns,
}) {
  function onCheckedHandler(data) {
    const updatedData = selectedAddOns.slice();
    const index = updatedData.findIndex((item) => item.name === data.name);
    if (index === -1) {
      if (isMonthly) {
        const newData = {
          ...data,
          price: `$${data.price}/mo`,
          value: data.price,
        };
        updatedData.push(newData);
      } else {
        const newData = {
          ...data,
          price: `$${data.price * 10}/yr`,
          value: data.price * 10,
        };
        updatedData.push(newData);
      }
    } else {
      updatedData.splice(index, 1);
    }
    setSelectedAddOns(updatedData);
  }

  return (
    <div className="pick-add-container">
      <div>
        <h1 className="select-add-text blod-blue">Pick add-ons</h1>
        <p className="grey">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="options-add-container">
        {addOnsData.map((ele, i) => {
          return (
            <AddOns
              key={i}
              name={ele.name}
              desc={ele.desc}
              price={isMonthly ? `+$${ele.price}/mo` : `+$${ele.price * 10}/yr`}
              checkedd={() => onCheckedHandler(ele)}
              selectedAddOns={selectedAddOns}
              isMonthly={isMonthly}
            />
          );
        })}
      </div>
    </div>
  );
}

function AddOns({ name, desc, price, checkedd, selectedAddOns }) {
  const x = selectedAddOns.some((element) => element.name === name);
  return (
    <div className={`addOns-container ${x && "bg-plan"}`}>
      <div className="addOns-container-element">
        <input
          id={name}
          type="checkbox"
          className="addOns-checkbox"
          onChange={checkedd}
          checked={x}
        />
        <div>
          <h1 className="addOns-name blod-blue">{name}</h1>
          <p className="grey">{desc}</p>
        </div>
      </div>
      <div className="addOns-price">
        <p className="blod-blue">{price}</p>
      </div>
    </div>
  );
}
