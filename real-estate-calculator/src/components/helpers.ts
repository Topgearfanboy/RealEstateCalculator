import { ExpenseCostType } from "./types";

export const handleConversion = function (
  MarketRentTotal: number,
  SquareFeetTotal: number,
  value: number,
  inputType: ExpenseCostType
) {
  switch (inputType) {
    case ExpenseCostType.perSf:
      return value * SquareFeetTotal;
    case ExpenseCostType.dollars:
      return value;
    case ExpenseCostType.percent:
      return value * 0.01 * MarketRentTotal;
    default:
      return 0;
  }
};
