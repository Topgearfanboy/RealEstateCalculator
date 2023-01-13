import React from "react";
import CurrencyInput from "react-currency-input-field";
import { Building, Unit } from "../types";
import { UnitDisplay } from "../UnitDisplay";
export function BuildingBuilder(): JSX.Element {
  const [unitList, setUnitList] = React.useState([
    {
      Bedrooms: 4,
      Bathrooms: 2,
      SquareFeet: 100,
      MarketRent: 400,
      CurrentRent: 800,
      OwnerOccupied: true,
    },
    {
      Bedrooms: 5,
      Bathrooms: 2,
      SquareFeet: 200,
      MarketRent: 500,
      CurrentRent: 700,
      OwnerOccupied: false,
    },
  ] as Unit[]);
  const [building, setBuilding] = React.useState({
    BedroomsTotal: 0,
    BathroomsTotal: 0,
    SquareFeetTotal: 0,
    CurrentRentTotal: 0,
    MarketRentTotal: 0,
  } as Building);
  React.useEffect(() => {
    let BedroomsTotal = 0;
    let BathroomsTotal = 0;
    let SquareFeetTotal = 0;
    let CurrentRentTotal = 0;
    let MarketRentTotal = 0;
    unitList.forEach((element) => {
      BedroomsTotal += element.Bedrooms;
      BathroomsTotal += element.Bathrooms;
      SquareFeetTotal += element.SquareFeet;
      CurrentRentTotal += element.CurrentRent;
      MarketRentTotal += element.MarketRent;
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
        } as Building)
    );
  }, [unitList]);
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
    <div className="flex flex-row">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Bedrooms
              </th>
              <th scope="col" className="px-6 py-3">
                Bathrooms
              </th>
              <th scope="col" className="px-6 py-3">
                Square Feet
              </th>
              <th scope="col" className="px-6 py-3">
                Market Rent
              </th>
              <th scope="col" className="px-6 py-3">
                Current Rent
              </th>
              <th scope="col" className="px-6 py-3">
                Owner Occupied
              </th>
              <th className="flex flex-col items-center">
                <button
                  type="button"
                  className="text-white bg-Theme hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2"
                  onClick={() => {
                    let temp = [
                      ...unitList,
                      {
                        ...unitList[unitList.length - 1],
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
          <tbody>
            {units}
            <tr className="bg-gray-50 border-b ">
              <td className="px-6 py-4">
                <CurrencyInput
                  className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg `}
                  value={building.BedroomsTotal.toString()}
                  disabled={true}
                />
              </td>
              <td className="px-6 py-4">
                <CurrencyInput
                  className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg `}
                  value={building.BathroomsTotal.toString()}
                  disabled={true}
                />
              </td>
              <td className="px-6 py-4">
                <CurrencyInput
                  className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg `}
                  value={building.SquareFeetTotal.toString()}
                  suffix={" sqft"}
                  groupSeparator={","}
                  disabled={true}
                />
              </td>
              <td className="px-6 py-4">
                <CurrencyInput
                  className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg `}
                  value={building.MarketRentTotal.toString()}
                  prefix={"$"}
                  groupSeparator={","}
                  disabled={true}
                />
              </td>
              <td className="px-6 py-4">
                <CurrencyInput
                  className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg `}
                  value={building.CurrentRentTotal.toString()}
                  prefix={"$"}
                  groupSeparator={","}
                  disabled={true}
                />
              </td>
              <td />
              <td className="px-6 py-4 text-gray-900 text-center">Totals</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
