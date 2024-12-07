import { Building, Unit } from "../../types";

export const summarizeBuilding = function (units: Unit[], building: Building) {
  let BedroomsTotal = 0;
  let BathroomsTotal = 0;
  let CurrentRentTotal = 0;
  let MarketRentTotal = 0;
  let RealCurrentRentTotal = 0;
  let RealMarketRentTotal = 0;
  units.forEach((element) => {
    BedroomsTotal += (element.Bedrooms ?? 0) * (element.NumberOfUnits ?? 0);
    BathroomsTotal += (element.Bathrooms ?? 0) * (element.NumberOfUnits ?? 0);
    CurrentRentTotal +=
      (element.CurrentRent ?? 0) * (element.NumberOfUnits ?? 0);
    MarketRentTotal += (element.MarketRent ?? 0) * (element.NumberOfUnits ?? 0);
    if (!element.OwnerOccupied) {
      RealCurrentRentTotal +=
        (element.CurrentRent ?? 0) * (element.NumberOfUnits ?? 0);
      RealMarketRentTotal +=
        (element.MarketRent ?? 0) * (element.NumberOfUnits ?? 0);
    }
  });
  return {
    ...building,
    BedroomsTotal: BedroomsTotal,
    BathroomsTotal: BathroomsTotal,
    CurrentRentTotal: CurrentRentTotal,
    MarketRentTotal: MarketRentTotal,
    RealCurrentRentTotal: RealCurrentRentTotal,
    RealMarketRentTotal: RealMarketRentTotal,
  } as Building;
};
