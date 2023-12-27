/* eslint-disable */
export default function InputForm({ onValueChange, inputObj }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputObj.initialInvestment}
            required
            onChange={onValueChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputObj.annualInvestment}
            required
            onChange={onValueChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputObj.expectedReturn}
            required
            onChange={onValueChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={inputObj.duration}
            required
            onChange={onValueChange}
          />
        </p>
      </div>
    </section>
  );
}
