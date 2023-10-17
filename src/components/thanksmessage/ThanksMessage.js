import "./ThankMessage.css";
import image from "./icon-thank-you.svg";

export default function ThanksMessage() {
  return (
    <div className="thanks-message-container">
      <img src={image} alt="Thanks" />
      <h1 className="thanks-title blod-blue">Thank you!</h1>
      <p className="thanks-p grey">
        Thanks for confirming subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to mail us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
