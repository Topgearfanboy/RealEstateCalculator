import React from "react";
import CurrencyInput from "react-currency-input-field";
import { Building, Unit } from "../types";
import { UnitDisplay } from "./UnitDisplay";
interface BuildingBuilderProps {
  unitList: Unit[];
  setUnitList: React.Dispatch<React.SetStateAction<Unit[]>>;
  building: Building;
  setBuilding: React.Dispatch<React.SetStateAction<Building>>;
}
export function BuildingBuilder(props: BuildingBuilderProps): JSX.Element {
  const { unitList, setUnitList, building, setBuilding } = props;
  React.useEffect(() => {
    let BedroomsTotal = 0;
    let BathroomsTotal = 0;
    let SquareFeetTotal = 0;
    let CurrentRentTotal = 0;
    let MarketRentTotal = 0;
    let RealCurrentRentTotal = 0;
    let RealMarketRentTotal = 0;
    unitList.forEach((element) => {
      BedroomsTotal += (element.Bedrooms ?? 0) * (element.NumberOfUnits ?? 0);
      BathroomsTotal += (element.Bathrooms ?? 0) * (element.NumberOfUnits ?? 0);
      SquareFeetTotal +=
        (element.SquareFeet ?? 0) * (element.NumberOfUnits ?? 0);
      CurrentRentTotal +=
        (element.CurrentRent ?? 0) * (element.NumberOfUnits ?? 0);
      MarketRentTotal +=
        (element.MarketRent ?? 0) * (element.NumberOfUnits ?? 0);
      if (!element.OwnerOccupied) {
        RealCurrentRentTotal +=
          (element.CurrentRent ?? 0) * (element.NumberOfUnits ?? 0);
        RealMarketRentTotal +=
          (element.MarketRent ?? 0) * (element.NumberOfUnits ?? 0);
      }
    });
    setBuilding(
      (building) =>
        ({
          ...building,
          BedroomsTotal: BedroomsTotal,
          BathroomsTotal: BathroomsTotal,
          SquareFeetTotal: SquareFeetTotal,
          CurrentRentTotal: CurrentRentTotal,
          MarketRentTotal: MarketRentTotal,
          RealCurrentRentTotal: RealCurrentRentTotal,
          RealMarketRentTotal: RealMarketRentTotal,
        } as Building)
    );
  }, [setBuilding, unitList]);
  let units = unitList.map((unit, i) => (
    <UnitDisplay
      key={i}
      unit={unit}
      setUnit={(e: Unit | undefined) => {
        let temp = [...unitList];
        if (e) {
          temp[i] = e;
        } else {
          temp.splice(i, 1);
        }
        setUnitList(temp);
      }}
    />
  ));

  return (
    <div className="table-wrp block max-h-builder overflow-y-scroll rounded-lg border-l-Theme border-4 border border-Theme">
      <div className="flex flex-row sticky top-0 bg-gray-100">
        <h2 className="text-4xl font-extrabold pl-4 pt-4 bg-gray-100 min-w-max">
          Building Creator
        </h2>
        <div className="grow" />
        <div className="pr-20 pt-4 pl-4  flex min-w-min">
          <label className="p-1.5">Total Square Feet:</label>
          <CurrencyInput
            id="validation-example-2-field2"
            placeholder="3,000"
            allowDecimals={false}
            className={`form-control block p-1.5 m-auto  z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setBuilding({
                ...building,
                SquareFeetTotal: parseFloat(e ? e : "0"),
              } as Building);
            }}
            value={building.SquareFeetTotal}
            suffix={" sqft"}
            step={10}
            groupSeparator={","}
            spellCheck={false}
          />
        </div>
      </div>

      <table className="w-full">
        <thead className="bg-white border-b sticky top-14">
          <tr className="bg-gray-100">
            <th className="px-3 py-2">Number of Type</th>
            <th className="px-3 py-2">Bedrooms</th>
            <th className="px-3 py-2">Bathrooms</th>
            <th className="px-3 py-2">Market Rent</th>
            <th className="px-3 py-2">Current Rent</th>
            <th className="px-3 py-2">Owner Occupied</th>
            <th className="px-3 py-2">
              <button
                type="button"
                className="text-white bg-Theme hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-1.5 m-2"
                onClick={() => {
                  let temp = [
                    ...unitList,
                    {
                      ...unitList[unitList.length - 1],
                      NumberOfUnits: 1,
                    } as Unit,
                  ];
                  setUnitList(temp);
                }}
              >
                Add Unit
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="max-h-96 overflow-y-auto">
          {units}
          <tr className="bg-gray-50 border-b sticky -bottom-1 ">
            <td />
            <td className="px-3 py-2">
              <CurrencyInput
                className={`block p-1.5 w-full z-20 text-sm  rounded-lg ${
                  unitList.length
                    ? "text-gray-900 bg-gray-50"
                    : "text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme"
                }`}
                value={building.BedroomsTotal.toString()}
                onValueChange={(e) => {
                  setBuilding({
                    ...building,
                    BedroomsTotal: parseFloat(e ? e : "0"),
                  } as Building);
                }}
                disabled={unitList.length ? true : false}
              />
            </td>
            <td className="px-3 py-2">
              <CurrencyInput
                className={`block p-1.5 w-full z-20 text-sm  rounded-lg ${
                  unitList.length
                    ? "text-gray-900 bg-gray-50"
                    : "text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme"
                }`}
                value={building.BathroomsTotal.toString()}
                onValueChange={(e) => {
                  setBuilding({
                    ...building,
                    BathroomsTotal: parseFloat(e ? e : "0"),
                  } as Building);
                }}
                disabled={unitList.length ? true : false}
              />
            </td>
            <td className="px-3 py-2">
              <CurrencyInput
                className={`block p-1.5 w-full z-20 text-sm  rounded-lg ${
                  unitList.length
                    ? "text-gray-900 bg-gray-50"
                    : "text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme"
                }`}
                value={building.MarketRentTotal.toString()}
                onValueChange={(e) => {
                  setBuilding({
                    ...building,
                    MarketRentTotal: parseFloat(e ? e : "0"),
                  } as Building);
                }}
                prefix={"$"}
                groupSeparator={","}
                disabled={unitList.length ? true : false}
              />
            </td>
            <td className="px-3 py-2">
              <CurrencyInput
                className={`block p-1.5 w-full z-20 text-sm  rounded-lg ${
                  unitList.length
                    ? "text-gray-900 bg-gray-50"
                    : "text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme"
                }`}
                value={building.CurrentRentTotal.toString()}
                onValueChange={(e) => {
                  setBuilding({
                    ...building,
                    CurrentRentTotal: parseFloat(e ? e : "0"),
                  } as Building);
                }}
                prefix={"$"}
                groupSeparator={","}
                disabled={unitList.length ? true : false}
              />
            </td>
            <td />
            <td className="px-3 text-gray-900 text-center">Totals</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
