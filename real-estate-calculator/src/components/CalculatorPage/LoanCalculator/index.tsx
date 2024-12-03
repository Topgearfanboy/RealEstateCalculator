import React from "react";
import { DollarDisplayBox } from "../DollarDisplayBox";
import { DollarEntryBox } from "../DollarEntryBox";
import { Loan, LoanCostType } from "../../types";
import { OptionSelector } from "../OptionSelector";
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
    <div className=" overflow-auto rounded-lg border-l-gray-100 border-4 border border-gray-100  mt-4">
      <div className="flex flex-row sticky top-0 bg-gray-100 ">
        <h2 className="text-4xl text-gray-800 font-extrabold pl-4 pt-4 pb-2 min-w-max">
          Loan Calculator
        </h2>
      </div>
      <div className="px-4">
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
        <OptionSelector
          label={"Loan Term:"}
          value={loan.LoanTerm}
          setValue={(e: any) => {
            setLoan({
              ...loan,
              LoanTerm: e,
            });
          }}
          valueOptions={[10, 15, 20, 30]}
        />
        <DollarDisplayBox
          label={"Loan Amount:"}
          value={loan.LoanAmount.toFixed(2)}
        />
        <DollarDisplayBox
          label={"Monthly Payment:"}
          value={Number(loan.MonthlyPayment).toFixed(2)}
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
    </div>
  );
}
