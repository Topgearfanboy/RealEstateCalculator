import {
  Building,
  Expense,
  ExpenseCostType,
  Expenses,
  Loan,
  LoanCostType,
  Report,
  Unit,
} from "./types";

export const defaultUnits = [
  {
    NumberOfUnits: 1,
    Bedrooms: 4,
    Bathrooms: 2,
    SquareFeet: 100,
    MarketRent: 400,
    CurrentRent: 800,
    OwnerOccupied: true,
  },
  {
    NumberOfUnits: 2,
    Bedrooms: 5,
    Bathrooms: 2,
    SquareFeet: 200,
    MarketRent: 500,
    CurrentRent: 700,
    OwnerOccupied: false,
  },
] as Unit[];

export const defaultBuilding = {
  BedroomsTotal: 0,
  BathroomsTotal: 0,
  SquareFeetTotal: 0,
  CurrentRentTotal: 0,
  MarketRentTotal: 0,
  RealCurrentRentTotal: 0,
  RealMarketRentTotal: 0,
} as Building;

export const defaltLoan: Loan = {
  LoanTerm: 10,
  PurchasePrice: "200000",
  DownPayment: "40000",
  DownPaymentType: LoanCostType.dollars,
  InterestRate: "6.543",
  LoanAmount: 80000,
  ClosingCosts: "1000",
  MonthlyPayment: 0,
};

export const defaultExpenses: Expenses = {
  Vacancy: { value: 0, type: ExpenseCostType.dollars } as Expense,
  PropetyManagement: { value: 0, type: ExpenseCostType.dollars } as Expense,
  PropetyTaxes: { value: 0, type: ExpenseCostType.dollars } as Expense,
  Insurance: { value: 0, type: ExpenseCostType.dollars } as Expense,
  OwnerPaidUtilities: { value: 0, type: ExpenseCostType.dollars } as Expense,
  Maintenance: { value: 0, type: ExpenseCostType.dollars } as Expense,
  ExpensesTotal: 0,
};

export const defaultReport: Report = {
  name: "change me",
  units: defaultUnits,
  loan: defaltLoan,
  building: defaultBuilding,
  expenses: defaultExpenses,
};
