import React from "react";
import CurrencyInput from "react-currency-input-field";
import { Unit } from "../../types";

interface EntryBoxProps {
  unit: Unit;
  setUnit: (e: Unit | undefined) => void;
}

export function UnitDisplay(props: EntryBoxProps): JSX.Element {
  const { unit, setUnit } = props;
  return (
    <tr>
      <td className="px-3 py-3">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="1"
          className={`block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({
              ...unit,
              NumberOfUnits: parseFloat(e ? e : "0"),
            } as Unit);
          }}
          value={unit.NumberOfUnits}
        />
      </td>
      <td className="px-3 py-3">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="2"
          allowDecimals={false}
          className={`block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, Bedrooms: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.Bedrooms}
        />
      </td>
      <td className="px-3 py-3">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="1"
          allowDecimals={false}
          className={`block p-1.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, Bathrooms: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.Bathrooms}
        />
      </td>
      <td className="px-3 py-3">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="$1,000"
          allowDecimals={false}
          className={`block p-1.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, MarketRent: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.MarketRent}
          prefix={"$"}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-3 py-3">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="$1,000"
          allowDecimals={false}
          className={`block p-1.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, CurrentRent: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.CurrentRent}
          prefix={"$"}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-3 py-10 flex justify-center ">
        <input
          type="checkbox"
          className=""
          checked={unit.OwnerOccupied}
          onChange={() => {
            setUnit({ ...unit, OwnerOccupied: !unit.OwnerOccupied } as Unit);
          }}
        />
      </td>
      <td className="px-3 py-3">
        <button
          type="button"
          className="text-white bg-Theme hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 py-1.5 m-2"
          onClick={() => {
            setUnit(undefined);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
