import React from "react";
import { DollarDisplayBox } from "../DollarDisplayBox";
import { ExpenseEntryBox } from "./ExpenseEntryBox";
import { Building, ExpenseCostType, Expenses } from "../types";
import { handleConversion } from "../helpers";
interface InterestCalculatorProps {
  building: Building;
  expenses: Expenses;
  setExpenses: React.Dispatch<React.SetStateAction<Expenses>>;
}
export function ExpensesCalculator(
  props: InterestCalculatorProps
): JSX.Element {
  const { expenses, setExpenses, building } = props;

  React.useEffect(() => {
    let totalExpenses = 0;
    totalExpenses += handleConversion(building, expenses.Vacancy);
    totalExpenses += handleConversion(building, expenses.PropetyManagement);
    totalExpenses += handleConversion(building, expenses.PropetyTaxes) / 12;
    totalExpenses += handleConversion(building, expenses.Insurance) / 12;
    totalExpenses += handleConversion(building, expenses.OwnerPaidUtilities);
    totalExpenses += handleConversion(building, expenses.Maintenance);
    setExpenses((expenses) => ({
      ...expenses,
      ExpensesTotal: Math.round(totalExpenses * 100) / 100,
    }));
  }, [
    building,
    expenses.Insurance,
    expenses.Maintenance,
    expenses.OwnerPaidUtilities,
    expenses.PropetyManagement,
    expenses.PropetyTaxes,
    expenses.Vacancy,
    setExpenses,
  ]);
  return (
    <div className=" overflow-auto rounded-lg border-l-gray-100 border-4 border border-gray-100 mt-4">
      <div className="flex flex-row sticky top-0 bg-gray-100">
        <h2 className="text-4xl text-gray-800 font-extrabold pl-4 pt-4 pb-2 min-w-max">
          Expense Calculator
        </h2>
      </div>
      <div className="px-4">
        <ExpenseEntryBox
          label={"Vacancy:"}
          value={expenses.Vacancy.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              Vacancy: { ...expenses.Vacancy, value: parseFloat(e) as number },
            });
          }}
          type={expenses.Vacancy.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              Vacancy: { ...expenses.Vacancy, type: e as ExpenseCostType },
            });
          }}
        />
        <ExpenseEntryBox
          label={"Property Management:"}
          value={expenses.PropetyManagement.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              PropetyManagement: {
                ...expenses.PropetyManagement,
                value: parseFloat(e) as number,
              },
            });
          }}
          type={expenses.PropetyManagement.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              PropetyManagement: {
                ...expenses.PropetyManagement,
                type: e as ExpenseCostType,
              },
            });
          }}
        />
        <ExpenseEntryBox
          label={"Property Taxes/Yr:"}
          value={expenses.PropetyTaxes.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              PropetyTaxes: {
                ...expenses.PropetyTaxes,
                value: parseFloat(e) as number,
              },
            });
          }}
          type={expenses.PropetyTaxes.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              PropetyTaxes: {
                ...expenses.PropetyTaxes,
                type: e as ExpenseCostType,
              },
            });
          }}
        />
        <ExpenseEntryBox
          label={"Insurance/Yr:"}
          value={expenses.Insurance.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              Insurance: {
                ...expenses.Insurance,
                value: parseFloat(e) as number,
              },
            });
          }}
          type={expenses.Insurance.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              Insurance: {
                ...expenses.Insurance,
                type: e as ExpenseCostType,
              },
            });
          }}
        />
        <ExpenseEntryBox
          label={"Owner Paid Utilities:"}
          value={expenses.OwnerPaidUtilities.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              OwnerPaidUtilities: {
                ...expenses.OwnerPaidUtilities,
                value: parseFloat(e) as number,
              },
            });
          }}
          type={expenses.OwnerPaidUtilities.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              OwnerPaidUtilities: {
                ...expenses.OwnerPaidUtilities,
                type: e as ExpenseCostType,
              },
            });
          }}
        />
        <ExpenseEntryBox
          label={"Maintenance:"}
          value={expenses.Maintenance.value}
          setValue={(e: any) => {
            setExpenses({
              ...expenses,
              Maintenance: {
                ...expenses.Maintenance,
                value: parseFloat(e) as number,
              },
            });
          }}
          type={expenses.Maintenance.type}
          setType={(e: any) => {
            setExpenses({
              ...expenses,
              Maintenance: {
                ...expenses.Maintenance,
                type: e as ExpenseCostType,
              },
            });
          }}
        />
        <DollarDisplayBox
          label={"Total Costs"}
          value={expenses.ExpensesTotal}
        />
      </div>
    </div>
  );
}
