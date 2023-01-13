export type Loan = {
  PurchasePrice: string;
  DownPayment: string;
  DownPaymentType: LoanCostType;
  LoanAmount: number;
  InterestRate: string;
  LoanTerm: number;
  MonthlyPayment: number;
};

export type Unit = {
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
};

export enum LoanCostType {
  percent = "Percent",
  dollars = "Dollars",
}

export enum ExpenseCostType {
  percent = "Percent",
  perSf = "Per Sf",
  total = "Total",
}
