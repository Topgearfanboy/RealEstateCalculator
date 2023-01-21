import React from "react";
import CurrencyInput from "react-currency-input-field";
import { ExpenseCostType } from "../../types";

interface EntryBoxProps {
  label: string;
  value: number;
  setValue: Function;
  type: ExpenseCostType;
  setType: Function;
  showInfo?: boolean;
}

export function ExpenseEntryBox(props: EntryBoxProps): JSX.Element {
  const { label, type, setType, value, setValue, showInfo } = props;
  return (
    <div className="flex flex-row py-2">
      <p className="px-4 min-w-min	">{label}</p>
      <div className="grow" />
      <div className="relative">
        {type === ExpenseCostType.percent && (
          <CurrencyInput
            id="validation-example-2-field"
            placeholder="3.452%"
            allowDecimals={true}
            className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setValue(e ? e : "0");
            }}
            value={value}
            suffix={"%"}
            step={10}
            decimalsLimit={4}
          />
        )}
        {type === ExpenseCostType.dollars && (
          <CurrencyInput
            id="validation-example-2-field2"
            placeholder="$200,000"
            allowDecimals={false}
            className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setValue(e ? parseFloat(e) : 0);
            }}
            value={value}
            prefix={"$"}
            step={10}
            groupSeparator={","}
          />
        )}
        {type === ExpenseCostType.perSf && (
          <CurrencyInput
            id="validation-example-2-field"
            placeholder="3.452%"
            allowDecimals={true}
            className={`form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setValue(e ? e : "0");
            }}
            value={value}
            prefix={"$"}
            step={10}
            decimalsLimit={4}
          />
        )}
        <div className="absolute top-0 right-0 p-1.5 text-sm font-medium text-white bg-Theme rounded-r-lg border border-Theme ">
          <select
            className="text-white bg-Theme"
            value={type}
            onChange={(e) => {
              setType((e.target as any).value);
            }}
          >
            <option value={ExpenseCostType.perSf} className="text-center">
              PSF
            </option>
            <option value={ExpenseCostType.percent} className="text-center">
              %
            </option>
            <option value={ExpenseCostType.dollars} className="text-center">
              $
            </option>
          </select>
        </div>
      </div>
      {showInfo && (
        <p>
          Info: {value} {type}
        </p>
      )}
    </div>
  );
}
