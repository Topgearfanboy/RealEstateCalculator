import React from "react";
import { handleConversion } from "../../../helpers";
import { Building, Expenses } from "../../../types";
import { Row } from "../row";
interface expenseBreakdownProps {
  expenses: Expenses;
  building: Building;
}
export function ExpenseBreakdown(props: expenseBreakdownProps): JSX.Element {
  const { expenses, building } = props;

  return (
    <div className="bg-white p-2">
      <div className="flex flex-Row sticky w-full">
        <h2 className="text-2xl font-extrabold py-2 max-w-min">Expenses</h2>
      </div>
      <div className="grid grid-cols-2 content-start max-w-max px-4">
        <div className="text-lg font-semibold">Expense</div>
        <div className="text-lg text-left font-semibold">Cost/Mo</div>
        <Row
          label="Vacancy"
          value={handleConversion(building, expenses.Vacancy)}
        />
        <Row
          label="Management"
          value={handleConversion(building, expenses.PropetyManagement)}
        />
        <Row
          label="Taxes"
          value={handleConversion(building, expenses.PropetyTaxes) / 12}
        />
        <Row
          label="Insurance"
          value={handleConversion(building, expenses.Insurance) / 12}
        />
        <Row
          label="Utilities"
          value={handleConversion(building, expenses.OwnerPaidUtilities)}
        />
        <Row
          label="Maintenance"
          value={handleConversion(building, expenses.Maintenance)}
        />
        <Row label="Total Costs" value={expenses.ExpensesTotal} />
      </div>
    </div>
  );
}
