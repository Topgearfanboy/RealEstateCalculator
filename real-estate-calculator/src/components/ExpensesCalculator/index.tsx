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
    totalExpenses += handleConversion(
      building.MarketRentTotal,
      building.MarketRentTotal,
      expenses.Vacancy,
      expenses.VacancyType
    );
    totalExpenses += handleConversion(
      building.MarketRentTotal,
      building.MarketRentTotal,
      expenses.PropetyManagement,
      expenses.PropetyManagementType
    );
    totalExpenses +=
      handleConversion(
        building.MarketRentTotal,
        building.MarketRentTotal,
        expenses.PropetyTaxes,
        expenses.PropetyTaxesType
      ) / 12;
    totalExpenses +=
      handleConversion(
        building.MarketRentTotal,
        building.MarketRentTotal,
        expenses.Insurance,
        expenses.InsuranceType
      ) / 12;
    totalExpenses += handleConversion(
      building.MarketRentTotal,
      building.MarketRentTotal,
      expenses.OwnerPaidUtilities,
      expenses.OwnerPaidUtilitiesType
    );
    totalExpenses += handleConversion(
      building.MarketRentTotal,
      building.MarketRentTotal,
      expenses.Maintenance,
      expenses.MaintenanceType
    );
    setExpenses((expenses) => ({
      ...expenses,
      ExpensesTotal: Math.round(totalExpenses * 100) / 100,
    }));
  }, [
    building.MarketRentTotal,
    building.SquareFeetTotal,
    expenses.Insurance,
    expenses.InsuranceType,
    expenses.Maintenance,
    expenses.MaintenanceType,
    expenses.OwnerPaidUtilities,
    expenses.OwnerPaidUtilitiesType,
    expenses.PropetyManagement,
    expenses.PropetyManagementType,
    expenses.PropetyTaxes,
    expenses.PropetyTaxesType,
    expenses.Vacancy,
    expenses.VacancyType,
    setExpenses,
  ]);
  return (
    <div className="rounded-lg border-l-Theme border-4 border border-Theme bg-gray-100 p-2">
      <h2 className="text-4xl font-extrabold px-2 bg-gray-100">Expenses</h2>
      <ExpenseEntryBox
        label={"Vacancy:"}
        value={expenses.Vacancy}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            Vacancy: e,
          });
        }}
        type={expenses.VacancyType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            VacancyType: e as ExpenseCostType,
          });
        }}
      />
      <ExpenseEntryBox
        label={"Property Management:"}
        value={expenses.PropetyManagement}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            PropetyManagement: e,
          });
        }}
        type={expenses.PropetyManagementType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            PropetyManagementType: e as ExpenseCostType,
          });
        }}
      />
      <ExpenseEntryBox
        label={"Property Taxes/Yr:"}
        value={expenses.PropetyTaxes}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            PropetyTaxes: e,
          });
        }}
        type={expenses.PropetyTaxesType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            PropetyTaxesType: e as ExpenseCostType,
          });
        }}
      />
      <ExpenseEntryBox
        label={"Insurance/Yr:"}
        value={expenses.Insurance}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            Insurance: e,
          });
        }}
        type={expenses.InsuranceType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            InsuranceType: e as ExpenseCostType,
          });
        }}
      />
      <ExpenseEntryBox
        label={"Owner Paid Utilities:"}
        value={expenses.OwnerPaidUtilities}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            OwnerPaidUtilities: e,
          });
        }}
        type={expenses.OwnerPaidUtilitiesType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            OwnerPaidUtilitiesType: e as ExpenseCostType,
          });
        }}
      />
      <ExpenseEntryBox
        label={"Maintenance:"}
        value={expenses.Maintenance}
        setValue={(e: any) => {
          setExpenses({
            ...expenses,
            Maintenance: e as number,
          });
        }}
        type={expenses.MaintenanceType}
        setType={(e: any) => {
          setExpenses({
            ...expenses,
            MaintenanceType: e as ExpenseCostType,
          });
        }}
      />
      <DollarDisplayBox label={"Total Costs"} value={expenses.ExpensesTotal} />
    </div>
  );
}
