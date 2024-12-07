import React from "react";
import { Building, Expenses, Loan } from "../../../types";
import { Row } from "../row";
interface keyStatsProps {
  expenses: Expenses;
  building: Building;
  loan: Loan;
}
export function OtherStats(props: keyStatsProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expenses, building, loan } = props;

  return (
    <div className="bg-white p-2">
      <div className="flex flex-Row sticky w-full">
        <h2 className="text-2xl font-extrabold py-2 max-w-max">Other Stats</h2>
      </div>
      <div className="grid grid-cols-2 content-start max-w-max px-4">
        <Row
          label="Total Payments:"
          value={loan.MonthlyPayment * loan.LoanTerm * 12}
        />
        <Row
          label="Total Interest:"
          value={loan.MonthlyPayment * loan.LoanTerm * 12 - loan.LoanAmount}
        />
      </div>
    </div>
  );
}
