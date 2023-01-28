import { Building, Expense, ExpenseCostType } from "./types";

export const handleConversion = function (
  building: Building,
  expense: Expense
): number {
  switch (expense.type) {
    case ExpenseCostType.perSf:
      return (expense.value * building.SquareFeetTotal) as number;
    case ExpenseCostType.dollars:
      return expense.value as number;
    case ExpenseCostType.percent:
      return (expense.value * 0.01 * building.MarketRentTotal) as number;
    default:
      return 0;
  }
};
