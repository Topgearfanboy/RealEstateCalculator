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
  Vacancy: number;
  VacancyType: ExpenseCostType;
  PropetyManagement: number;
  PropetyManagementType: ExpenseCostType;
  PropetyTaxes: number;
  PropetyTaxesType: ExpenseCostType;
  Insurance: number;
  InsuranceType: ExpenseCostType;
  OwnerPaidUtilities: number;
  OwnerPaidUtilitiesType: ExpenseCostType;
  Maintenance: number;
  MaintenanceType: ExpenseCostType;
  ExpensesTotal: number;
};
export type Expense = {
  value: number;
  type: ExpenseCostType;
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
