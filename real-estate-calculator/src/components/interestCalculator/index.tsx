import React from "react";
import { DollarDisplayBox } from "../DollarDisplayBox";
import { DollarEntryBox } from "../DollarEntryBox";
import { Loan, LoanCostType } from "../types";
import { YearSelector } from "../YearSelector";
export function InterestCalculator(): JSX.Element {
  const [loan, setLoan] = React.useState({
    LoanTerm: 10,
    PurchasePrice: "200000",
    DownPayment: "40000",
    DownPaymentType: LoanCostType.dollars,
    InterestRate: "6.543",
    LoanAmount: 80000,
  } as unknown as Loan);
  const [comparisonInterestRate, setComparisonInterestRate] = React.useState(1);
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
    setLoan({
      ...loan,
      LoanAmount: loanAmount,
      MonthlyPayment: monthlyPayment,
    });
  }, [loan]);
  return (
    <div className="w-1/4 bg-gray-100">
      <DollarEntryBox
        label={"Loan Amount:"}
        value={loan.PurchasePrice}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            PurchasePrice: e,
          });
          // UpdateLoan();
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
          // UpdateLoan();
        }}
        type={loan.DownPaymentType}
        setType={(e: any) => {
          const newItem = handleConversion(e, loan.DownPayment, 4);
          setLoan({
            ...loan,
            DownPaymentType: e,
            DownPayment: newItem,
          });
          // UpdateLoan();
        }}
      />
      <DollarEntryBox
        label={"Interest Rate:"}
        value={loan.InterestRate}
        setValue={(e: any) => {
          setLoan({
            ...loan,
            InterestRate: e,
          });
          // UpdateLoan();
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
          //UpdateLoan();
        }}
      />
      <DollarDisplayBox
        label={"Monthly Payment:"}
        value={Number(loan.MonthlyPayment).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Loan Amount:"}
        value={loan.LoanAmount.toFixed(2)}
      />
      <DollarDisplayBox
        label={"Total Payments:"}
        value={(loan.MonthlyPayment * loan.LoanTerm * 12).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Total Interest Paid:"}
        value={(
          loan.MonthlyPayment * loan.LoanTerm * 12 -
          parseFloat(loan.PurchasePrice)
        ).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Total Interest Paid:"}
        value={(
          loan.MonthlyPayment * loan.LoanTerm * 12 -
          parseFloat(loan.PurchasePrice)
        ).toFixed(2)}
      />
      <DollarEntryBox
        label={"Comparison Interest Rate:"}
        value={comparisonInterestRate.toString()}
        setValue={(e: any) => {
          setComparisonInterestRate(e);
        }}
        type={LoanCostType.percent}
      />
      <DollarDisplayBox
        label={"Comparison Interest Rate:"}
        value={(
          (parseFloat(loan.PurchasePrice) - loan.LoanAmount) *
          Math.pow(1 + (comparisonInterestRate * 0.01) / 12, 12 * loan.LoanTerm)
        ).toFixed(2)}
      />
      <DollarDisplayBox
        label={"Theoretical Future Property Value:"}
        value={(
          parseFloat(loan.PurchasePrice) *
          Math.pow(1 + (3.5 * 0.01) / 12, 12 * loan.LoanTerm)
        ).toFixed(2)}
      />
    </div>
  );
}
