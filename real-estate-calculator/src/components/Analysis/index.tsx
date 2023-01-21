import { Building, Expenses, Loan } from "../types";
import { ExpenseBreakdown } from "./expenseBreakdown";
import { ExpenseChart } from "./ExpenseChart";
import { KeyStats } from "./keyStats";
interface BuildingBuilderProps {
  expenses: Expenses;
  building: Building;
  loan: Loan;
}
export function Analysis(props: BuildingBuilderProps): JSX.Element {
  const { expenses, building, loan } = props;

  return (
    <div className="table-wrp block max-h-builder overflow-y-scroll rounded-lg border-l-Theme border-4 border border-Theme mt-4">
      <div className="flex flex-row sticky top-0 bg-gray-100">
        <h2 className="text-4xl font-extrabold px-4 pt-4 bg-gray-100 max-w-max">
          Analysis
        </h2>
      </div>
      <div className="flex flex-row">
        <ExpenseBreakdown expenses={expenses} building={building} />
        <KeyStats expenses={expenses} building={building} loan={loan} />
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}
