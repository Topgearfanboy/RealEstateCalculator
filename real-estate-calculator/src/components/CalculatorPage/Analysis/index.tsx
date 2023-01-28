import { Building, Expenses, Loan } from "../../types";
import { ExpenseBreakdown } from "./expenseBreakdown";
import { ExpenseChart } from "./ExpenseChart";
import { KeyStats } from "./keyStats";
import { OtherStats } from "./otherStats";
interface BuildingBuilderProps {
  expenses: Expenses;
  building: Building;
  loan: Loan;
}
export function Analysis(props: BuildingBuilderProps): JSX.Element {
  const { expenses, building, loan } = props;

  return (
    <div className=" overflow-auto rounded-lg border-l-gray-100 border-4 border border-gray-100  mt-4">
      <div className="flex flex-row sticky top-0 bg-gray-100 ">
        <h2 className="text-4xl text-gray-800 font-extrabold pl-4 pt-4 pb-2 min-w-max">
          Analysis
        </h2>
      </div>
      <div className="flex flex-col	px-4">
        <div className="flex flex-row">
          <ExpenseBreakdown expenses={expenses} building={building} />
          <KeyStats expenses={expenses} building={building} loan={loan} />
          <OtherStats expenses={expenses} building={building} loan={loan} />
        </div>
        <ExpenseChart expenses={expenses} building={building} loan={loan} />
      </div>
    </div>
  );
}
