import React from "react";
import { DollarDisplayBox } from "../DollarDisplayBox";
import { DollarEntryBox } from "../DollarEntryBox";
import { Loan, CostType } from "../../types";
import { OptionSelector } from "../OptionSelector";
import { handleConversion } from "./helpers";
interface LoanCalculatorProps {
  loan: Loan;
  setLoan: React.Dispatch<React.SetStateAction<Loan>>;
}
export function LoanCalculator(props: LoanCalculatorProps): JSX.Element {
  const { loan, setLoan } = props;

  React.useEffect(() => {
    const loanAmount =
      loan.DownPaymentType === CostType.percent
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
    loan.ClosingCostsType,
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
            const newItem = handleConversion(e, loan.DownPayment, 4, loan);
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
          type={loan.ClosingCostsType}
          setType={(e: any) => {
            const newItem = handleConversion(e, loan.ClosingCosts, 4, loan);
            setLoan({
              ...loan,
              ClosingCostsType: e,
              ClosingCosts: newItem,
            });
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
          }}
          type={CostType.percent}
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
