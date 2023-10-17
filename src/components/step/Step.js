import './step.css';

export default function Step({ num, content, stepNumber }) {
    return (
      <div className="step-content">
        <div className={stepNumber===num?"step-number light-blue":"step-number"}><h4>{num}</h4></div>
        <div className="step-text">
          <p className='gray-text'>STEP {num}</p>
          <h3 className='white-text'>{content}</h3>
        </div>
      </div>
    );
  }