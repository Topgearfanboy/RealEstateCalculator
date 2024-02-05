export type Loan = {
  PurchasePrice: string;
  DownPayment: string;
  DownPaymentType: LoanCostType;
  LoanAmount: number;
  InterestRate: string;
  LoanTerm: number;
  MonthlyPayment: number;
  ClosingCosts: string;
};

export type Unit = {
  NumberOfUnits: number;
  Bedrooms: number;
  Bathrooms: number;
  SquareFeet: number;
  CurrentRent: number;
  MarketRent: number;
  OwnerOccupied: boolean;
};

export type Building = {
  BedroomsTotal: number;
  BathroomsTotal: number;
  SquareFeetTotal: number;
  CurrentRentTotal: number;
  MarketRentTotal: number;
  RealCurrentRentTotal: number;
  RealMarketRentTotal: number;
};

export type Expenses = {
  Vacancy: Expense;
  PropetyManagement: Expense;
  PropetyTaxes: Expense;
  Insurance: Expense;
  OwnerPaidUtilities: Expense;
  Maintenance: Expense;
  ExpensesTotal: number;
};

export type Expense = {
  value: number;
  type: ExpenseCostType;
};

export type Report = {
  id: number;
  name: string;
  expenses: Expenses;
  units: Unit[];
  building: Building;
  loan: Loan;
};

export enum LoanCostType {
  percent = "Percent",
  dollars = "Dollars",
}

export enum ExpenseCostType {
  percent = "Percent",
  perSf = "Per Sf",
  dollars = "Dollars",
}
