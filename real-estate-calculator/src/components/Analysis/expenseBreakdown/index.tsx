import React from "react";
import { handleConversion } from "../../helpers";
import { Building, Expenses } from "../../types";
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
        <div className=" text-lg font-semibold">Expense</div>
        <div className="text-lg font-semibold">Cost/Mo</div>
        <Row
          label="Vacancy"
          value={`$${handleConversion(
            building.MarketRentTotal,
            building.SquareFeetTotal,
            expenses.Vacancy,
            expenses.VacancyType
          ).toFixed(2)}`}
        />
        <Row
          label="Property Management"
          value={`$${handleConversion(
            building.MarketRentTotal,
            building.SquareFeetTotal,
            expenses.PropetyManagement,
            expenses.PropetyManagementType
          ).toFixed(2)}`}
        />
        <Row
          label="Property Taxes"
          value={`$${(
            handleConversion(
              building.MarketRentTotal,
              building.SquareFeetTotal,
              expenses.PropetyTaxes,
              expenses.PropetyTaxesType
            ) / 12
          ).toFixed(2)}`}
        />
        <Row
          label="Insurance"
          value={`$${(
            handleConversion(
              building.MarketRentTotal,
              building.SquareFeetTotal,
              expenses.Insurance,
              expenses.InsuranceType
            ) / 12
          ).toFixed(2)}`}
        />
        <Row
          label="Owner Paid Utilities"
          value={`$${handleConversion(
            building.MarketRentTotal,
            building.SquareFeetTotal,
            expenses.OwnerPaidUtilities,
            expenses.OwnerPaidUtilitiesType
          ).toFixed(2)}`}
        />
        <Row
          label="Maintenance"
          value={`$${handleConversion(
            building.MarketRentTotal,
            building.SquareFeetTotal,
            expenses.Maintenance,
            expenses.MaintenanceType
          ).toFixed(2)}`}
        />
        <Row
          label="Total Costs"
          value={`$${expenses.ExpensesTotal.toFixed(2)}`}
        />
      </div>
    </div>
  );
}
