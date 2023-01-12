import React from "react";
import Charts from "../Chart/Charts";
function ExpensesChart(props) {
  const charDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 =jan
    charDataPoints[expenseMonth].value += expense.amount;
  }
  console.log(charDataPoints);
  return <Charts DataPoints={charDataPoints} />;
}
export default ExpensesChart;
