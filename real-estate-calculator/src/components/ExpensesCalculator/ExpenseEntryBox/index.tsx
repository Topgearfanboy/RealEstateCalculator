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
  const determinePlaceholder = () => {
    switch (type) {
      case ExpenseCostType.perSf:
        return "3.452%";
      case ExpenseCostType.dollars:
        return "$200,000";
      case ExpenseCostType.percent:
        return "3.452%";
      default:
        return "";
    }
  };
  const determineSuffix = () => {
    switch (type) {
      case ExpenseCostType.perSf:
        return " PSF";
      case ExpenseCostType.dollars:
        return "";
      case ExpenseCostType.percent:
        return "%";
      default:
        return "";
    }
  };
  return (
    <div className="flex flex-row py-2">
      <p className="pr-2 min-w-min	">{label}</p>
      <div className="grow" />
      <div className="relative ">
        <CurrencyInput
          id="validation-example-2-field"
          placeholder={determinePlaceholder()}
          allowDecimals={type !== ExpenseCostType.dollars}
          className={`shadow-sm form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-ThemeLight dark:focus:border-blue-500 `}
          onValueChange={(e) => {
            setValue(e ? e : 0);
          }}
          value={value}
          suffix={determineSuffix()}
          prefix={type === ExpenseCostType.dollars ? "$" : ""}
          step={10}
          decimalsLimit={4}
        />
        <div className="absolute top-0 right-0 p-1.5 text-sm font-medium text-ThemeLight bg-Theme rounded-r-lg border border-Theme ">
          <select
            className="text-ThemeLight bg-Theme"
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
