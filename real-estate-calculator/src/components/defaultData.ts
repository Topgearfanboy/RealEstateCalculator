import { Building, ExpenseCostType, Loan, LoanCostType, Unit } from "./types";

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

export const emptyBuilding = {
  BedroomsTotal: 0,
  BathroomsTotal: 0,
  SquareFeetTotal: 0,
  CurrentRentTotal: 0,
  MarketRentTotal: 0,
  RealCurrentRentTotal: 0,
  RealMarketRentTotal: 0,
} as Building;

export const defaltLoan = {
  LoanTerm: 10,
  PurchasePrice: "200000",
  DownPayment: "40000",
  DownPaymentType: LoanCostType.dollars,
  InterestRate: "6.543",
  LoanAmount: 80000,
  ClosingCosts: "1000",
} as Loan;

export const defaultExpenses = {
  Vacancy: 0,
  VacancyType: ExpenseCostType.dollars,
  PropetyManagement: 0,
  PropetyManagementType: ExpenseCostType.dollars,
  PropetyTaxes: 0,
  PropetyTaxesType: ExpenseCostType.dollars,
  Insurance: 0,
  InsuranceType: ExpenseCostType.dollars,
  OwnerPaidUtilities: 0,
  OwnerPaidUtilitiesType: ExpenseCostType.dollars,
  Maintenance: 0,
  MaintenanceType: ExpenseCostType.dollars,
  ExpensesTotal: 0,
};
