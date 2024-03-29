import React from "react";
import { Building, Expenses, Loan } from "../../../types";
import { Row } from "../row";
interface keyStatsProps {
  expenses: Expenses;
  building: Building;
  loan: Loan;
}
export function KeyStats(props: keyStatsProps): JSX.Element {
  const { expenses, building, loan } = props;

  return (
    <div className="bg-white p-2">
      <div className="flex flex-Row sticky w-full">
        <h2 className="text-2xl font-extrabold py-2 max-w-max">Key Stats</h2>
      </div>
      <div className="grid grid-cols-2 content-start max-w-max px-4">
        <Row
          label="NOI"
          value={building.RealMarketRentTotal - expenses.ExpensesTotal}
        />
        <Row
          label="Annual NOI"
          value={(building.RealMarketRentTotal - expenses.ExpensesTotal) * 12}
        />
        <Row
          label="Cap"
          value={
            (((building.RealMarketRentTotal - expenses.ExpensesTotal) * 12) /
              parseFloat(loan.PurchasePrice)) *
            100
          }
          percentage
        />
        <Row
          label="Monthly Net"
          value={
            building.RealMarketRentTotal -
            expenses.ExpensesTotal -
            loan.MonthlyPayment
          }
        />
        <Row
          label="Annualized Net"
          value={
            (building.RealMarketRentTotal -
              expenses.ExpensesTotal -
              loan.MonthlyPayment) *
            12
          }
        />
        <Row
          label="Annualized ROI"
          value={
            (((building.RealMarketRentTotal -
              expenses.ExpensesTotal -
              loan.MonthlyPayment) *
              12) /
              (parseFloat(loan.ClosingCosts) +
                (parseFloat(loan.PurchasePrice) - loan.LoanAmount))) *
            100
          }
        />
      </div>
    </div>
  );
}
