import React from "react";
import CurrencyInput from "react-currency-input-field";
import { CostType } from "../../types";

interface EntryBoxProps {
  label: string;
  value: string;
  setValue: Function;
  type?: string;
  setType?: Function;
  showInfo?: boolean;
}

export function DollarEntryBox(props: EntryBoxProps): JSX.Element {
  const { label, type, setType, value, setValue, showInfo } = props;
  return (
    <div className="flex flex-row py-2">
      <p className="pr-2 min-w-min	">{label}</p>
      <div className="grow" />
      <div className="relative">
        {type === CostType.percent ? (
          <CurrencyInput
            id="validation-example-2-field"
            placeholder="3.452%"
            allowDecimals={true}
            className={`shadow-sm form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-ThemeLight dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setValue(e ? e : "0");
            }}
            value={value}
            suffix={"%"}
            step={10}
            decimalsLimit={4}
          />
        ) : (
          <CurrencyInput
            id="validation-example-2-field2"
            placeholder="$200,000"
            allowDecimals={false}
            className={`shadow-sm form-control block p-1.5 pr-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-ThemeLight dark:focus:border-blue-500 `}
            onValueChange={(e) => {
              setValue(e ? e : "0");
            }}
            value={value}
            prefix={"$"}
            step={10}
            groupSeparator={","}
          />
        )}

        {setType && (
          <div className="absolute top-0 right-0 p-1.5 text-sm font-medium text-ThemeLight bg-Theme rounded-r-lg border border-Theme pr-2">
            <select
              className="text-ThemeLight bg-Theme"
              value={type}
              onChange={(e) => {
                if (setType && e) {
                  setType((e.target as any).value);
                }
              }}
            >
              <option value={CostType.dollars}>$</option>
              <option value={CostType.percent}>%</option>
            </select>
          </div>
        )}
      </div>
      {showInfo && (
        <p className="min-w-full">
          Info: {value} {type}
        </p>
      )}
    </div>
  );
}
