import React from "react";
import { ExpenseCostType } from "../types";

interface EntryBoxProps {
  label: string;
  type: string;
  setType: Function;
  value: string;
  setValue: Function;
  showInfo?: boolean;
}

export function ExpenseEntryBox(props: EntryBoxProps): JSX.Element {
  const { label, type, setType, value, setValue, showInfo } = props;
  return (
    <div className="flex items-center">
      <p className="px-4 min-w-full">{label}</p>
      <div className="relative w-1/2 min-w-full ">
        <input
          type="number"
          id="location-search"
          className="block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          name="email"
          value={value}
          onChange={(e) => {
            setValue(e ? (e.target as any).value : 0);
          }}
          required
        />

        <div className="absolute top-0 right-0 p-1.5 text-sm font-medium text-white bg-Theme rounded-r-lg border border-Theme pr-4">
          <select
            className="text-white bg-Theme "
            value={type}
            onChange={(e) => {
              setType(e ? (e.target as any).value : 0);
            }}
          >
            <option value={ExpenseCostType.total}>Total</option>
            <option value={ExpenseCostType.perSf}>Per Square Foot</option>
            <option value={ExpenseCostType.percent}>%</option>
          </select>
        </div>
      </div>
      {showInfo && (
        <p className="min-w-full">
          Info: {value} {type}
        </p>
      )}
    </div>
  );
}
