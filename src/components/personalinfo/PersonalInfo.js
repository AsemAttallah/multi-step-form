import "./PersonalInfo.css";
export default function PersonalInfo({
  setName,
  setEmail,
  setPhoneNumber,
  name,
  email,
  phoneNumber,
  setCompletePersonalInfo,
  validName,
  validEmail,
  validNumber,
  setValidName,
  setValidEmail,
  setValidNumber,
  checkValidity,
}) {

  const nameRegex = /^[A-Za-z0-9]+$/;
  const emailRegex = /^[A-Za-z]+[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]/u;
  const numberRegex = /^[0-9]+$/;

  function handleNameChange(newValue) {
    setName(newValue);
    setValidName(nameRegex.test(newValue));
  }
  
  function handleEmailChange(newValue) {
    setEmail(newValue);
    setValidEmail(emailRegex.test(newValue));
  }
  
  function handlePhoneNumberChange(newValue) {
    setPhoneNumber(newValue);
    setValidNumber(numberRegex.test(newValue));
  }
  validName && validEmail && validNumber
    ? setCompletePersonalInfo(true)
    : setCompletePersonalInfo(false);

  return (
    <div className="personal-info-container">
      <div className="Personal-info-form">
        <div>
          <h1 className="personal-text">Personal info</h1>
          <p className="instructor-text">
            Please provide your name, email, address, and phone number.
          </p>
        </div>
        <InputField
          checkValidity={checkValidity}
          valid={validName}
          labelText='Name'
          label="name-label"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />

        <InputField
          checkValidity={checkValidity}
          valid={validEmail}
          labelText='Email'
          label="email-label"
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />

        <InputField
          checkValidity={checkValidity}
          valid={validNumber}
          labelText='Phone Number'
          label="phone-number-label"
          type="text"
          placeholder="e.g, +1 234 567 890"
          value={phoneNumber}
          onChange={(e) => handlePhoneNumberChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function InputField({
  labelText,
  valid,
  label,
  checkValidity,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="fields">
      <div className="name-validation">
        <label htmlFor={label}>{labelText}</label>
        {!valid && checkValidity && (
          <h2 className="validation-text">This field is required</h2>
        )}
      </div>
      <input
        id={label}
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
