import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import { handleConversion } from "../../../helpers";
import { Building, Expenses, Loan } from "../../../types";

interface keyStatsProps {
  expenses: Expenses;
  building: Building;
  loan: Loan;
}
type chartObject = { name: string; value: number; color: string };

export function ExpenseChart(props: keyStatsProps): JSX.Element {
  const { expenses, building, loan } = props;
  const [data, setData] = React.useState([] as chartObject[]);

  React.useLayoutEffect(() => {
    let allData: chartObject[] = [
      {
        name: "Insurance",
        value: handleConversion(building, expenses.Insurance) / 12,
        color: "#2B9120",
      },
      {
        name: "Maintenance",
        value: handleConversion(building, expenses.Maintenance),
        color: "#FFC60D",
      },
      {
        name: "Utilities",
        value: handleConversion(building, expenses.OwnerPaidUtilities),
        color: "#FF7700",
      },
      {
        name: "Management",
        value: handleConversion(building, expenses.PropetyManagement),
        color: "#404DC7",
      },
      {
        name: "Taxes",
        value: handleConversion(building, expenses.PropetyTaxes) / 12,
        color: "#28249E",
      },
      {
        name: "Vacancy",
        value: handleConversion(building, expenses.Vacancy),
        color: "#D1173C",
      },

      { name: "Mortgage", value: loan.MonthlyPayment, color: "#9B59B6" },
    ];
    let returnData: chartObject[] = [];
    allData.forEach(function (item) {
      if (item.value) {
        returnData.push(item);
      }
    });
    setData(returnData);
  }, [
    building,
    expenses.Insurance,
    expenses.Maintenance,
    expenses.OwnerPaidUtilities,
    expenses.PropetyManagement,
    expenses.PropetyTaxes,
    expenses.Vacancy,
    loan.MonthlyPayment,
  ]);
  let renderLabel = function (entry: any) {
    return entry.name;
  };

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={65}
        outerRadius={85}
        fill="#82ca9d"
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <text
        x={200}
        y={135}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: "1.3rem",
        }}
      >
        Total Cost:
      </text>
      <text
        x={200}
        y={165}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: "1.5rem",
        }}
      >
        $
        {expenses.ExpensesTotal + (Math.round(loan.MonthlyPayment) * 100) / 100}
      </text>
    </PieChart>
  );
}
