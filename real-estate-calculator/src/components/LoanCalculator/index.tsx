import React from "react";
import { DollarDisplayBox } from "../DollarDisplayBox";
import { DollarEntryBox } from "../DollarEntryBox";
import { Loan, LoanCostType } from "../types";
import { YearSelector } from "./YearSelector";
interface InterestCalculatorProps {
  loan: Loan;
  setLoan: React.Dispatch<React.SetStateAction<Loan>>;
}
export function LoanCalculator(props: InterestCalculatorProps): JSX.Element {
  const { loan, setLoan } = props;
  const handleConversion = function (
    e: any,
    converting: string,
    trailingDigits: number
  ) {
    return e === LoanCostType.dollars
      ? (parseFloat(converting) * 0.01 * parseFloat(loan.PurchasePrice))
          .toFixed(0)
          .replace(/\.0+$/, "")
      : ((parseFloat(converting) / parseFloat(loan.PurchasePrice)) * 100)
          .toFixed(trailingDigits)
          .replace(/\.0+$/, "");
  };
  React.useEffect(() => {
    const loanAmount =
      loan.DownPaymentType === LoanCostType.percent
        ? parseFloat(loan.PurchasePrice) -
          parseFloat(loan.DownPayment) * 0.01 * parseFloat(loan.PurchasePrice)
        : parseFloat(loan.PurchasePrice) - parseFloat(loan.DownPayment);
    const interestRate = (parseFloat(loan.InterestRate) * 0.01) / 12;
    const numOfPayments = loan.LoanTerm * 12;
    const monthlyPayment =
      loanAmount /
      ((Math.pow(1 + interestRate, numOfPayments) - 1) /
        (interestRate * Math.pow(1 + interestRate, numOfPayments)));
    setLoan((loan) => ({
      ...loan,
      LoanAmount: loanAmount,
      MonthlyPayment: monthlyPayment,
    }));
  }, [
    loan.DownPayment,
    loan.DownPaymentType,
    loan.InterestRate,
    loan.LoanTerm,
    loan.PurchasePrice,
    setLoan,
  ]);
  return (
    <div className="rounded-lg border-l-Theme border-4 border border-Theme bg-gray-100 p-2">
      <h2 className="text-4xl font-extrabold px-2 bg-gray-100">
        Loan Calculator
      </h2>
      <DollarEntryBox
        label={"Purchase Price:"}
        value={loan.PurchasePrice}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            PurchasePrice: e,
          });
        }}
      />
      <DollarEntryBox
        label={"Down Payment:"}
        value={loan.DownPayment}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            DownPayment: e,
          });
        }}
        type={loan.DownPaymentType}
        setType={(e: any) => {
          const newItem = handleConversion(e, loan.DownPayment, 4);
          setLoan({
            ...loan,
            DownPaymentType: e,
            DownPayment: newItem,
          });
        }}
      />
      <DollarEntryBox
        label={"Closing Costs:"}
        value={loan.ClosingCosts}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            ClosingCosts: e,
          });
        }}
        type={LoanCostType.dollars}
      />
      <DollarEntryBox
        label={"Interest Rate:"}
        value={loan.InterestRate}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            InterestRate: e,
          });
        }}
        type={LoanCostType.percent}
      />
      <YearSelector
        label={"Loan Term:"}
        value={loan.LoanTerm}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            LoanTerm: e,
          });
        }}
      />
      <DollarDisplayBox
        label={"Loan Amount:"}
        value={loan.LoanAmount.toFixed(2)}
      />
      <DollarDisplayBox
        label={"Theoretical Future Property Value (3.5%):"}
        value={(
          parseFloat(loan.PurchasePrice) *
          Math.pow(1 + (3.5 * 0.01) / 12, 12 * loan.LoanTerm)
        ).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Monthly Payment:"}
        value={Number(loan.MonthlyPayment).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Total Payments:"}
        value={(loan.MonthlyPayment * loan.LoanTerm * 12).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Total Interest Paid:"}
        value={(
          loan.MonthlyPayment * loan.LoanTerm * 12 -
          loan.LoanAmount
        ).toFixed(2)}
      />
      {/* <DollarEntryBox
        label={"Comparison Rate:"}
        value={comparisonInterestRate.toString()}
        setValue={(e: any) => {
          setComparisonInterestRate(e);
        }}
        type={LoanCostType.percent}
      />
      <DollarDisplayBox
        label={"Comparison Value:"}
        value={(
          (parseFloat(loan.PurchasePrice) - loan.LoanAmount) *
          Math.pow(1 + (comparisonInterestRate * 0.01) / 12, 12 * loan.LoanTerm)
        ).toFixed(2)}
      /> */}
    </div>
  );
}
