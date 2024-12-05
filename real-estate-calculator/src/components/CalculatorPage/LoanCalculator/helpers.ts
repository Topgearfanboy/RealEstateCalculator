import { Loan, LoanCostType } from "../../types";

export const handleConversion = function (
  e: any,
  converting: string,
  trailingDigits: number,
  loan: Loan
) {
  return e === LoanCostType.dollars
    ? (parseFloat(converting) * 0.01 * parseFloat(loan.PurchasePrice))
        .toFixed(0)
        .replace(/\.0+$/, "")
    : ((parseFloat(converting) / parseFloat(loan.PurchasePrice)) * 100)
        .toFixed(trailingDigits)
        .replace(/\.0+$/, "");
};
