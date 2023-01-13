import React from "react";
import CurrencyInput from "react-currency-input-field";
import { Unit } from "../types";

interface EntryBoxProps {
  unit: Unit;
  setUnit: (e: Unit | undefined) => void;
}

export function UnitDisplay(props: EntryBoxProps): JSX.Element {
  const { unit, setUnit } = props;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="1,200"
          allowDecimals={false}
          className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, Bedrooms: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.Bedrooms}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-6 py-4">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="1,200"
          allowDecimals={false}
          className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, Bathrooms: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.Bathrooms}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-6 py-4">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="1,200"
          allowDecimals={false}
          className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, SquareFeet: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.SquareFeet}
          suffix={" sqft"}
          step={10}
          groupSeparator={","}
          spellCheck={false}
        />
      </td>
      <td className="px-6 py-4">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="$1,000"
          allowDecimals={false}
          className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, MarketRent: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.MarketRent}
          prefix={"$"}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-6 py-4">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="$1,000"
          allowDecimals={false}
          className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setUnit({ ...unit, CurrentRent: parseFloat(e ? e : "0") } as Unit);
          }}
          value={unit.CurrentRent}
          prefix={"$"}
          step={10}
          groupSeparator={","}
        />
      </td>
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={unit.OwnerOccupied}
          onChange={() => {
            setUnit({ ...unit, OwnerOccupied: !unit.OwnerOccupied } as Unit);
          }}
        />
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="text-white flex bg-Theme hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            setUnit(undefined);
          }}
        >
          Delete Unit
        </button>
      </td>
    </tr>
  );
}
