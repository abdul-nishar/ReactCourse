/* eslint-disable */
import { calculateInvestmentResults } from "../src/util/investment";
import { formatter } from "../src/util/investment";

export default function Result({ inputObj }) {
  const results = calculateInvestmentResults(inputObj);
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((obj, index) => {
          totalInterest += obj.interest;
          return (
            <tr key={obj.year}>
              <td>{obj.year}</td>
              <td>{formatter.format(obj.valueEndOfYear)}</td>
              <td>{formatter.format(obj.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(obj.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
