import React from "react";
import CurrencyInput from "react-currency-input-field";

interface EntryBoxProps {
  label: string;
  value: string | number;
}

export function DollarDisplayBox(props: EntryBoxProps): JSX.Element {
  const { label, value } = props;
  return (
    <div className="flex flex-row py-2">
      <p className="pr-2 min-w-min">{label}</p>
      <div className="grow" />
      <div className="relative">
        <CurrencyInput
          id="validation-example-2-field2"
          placeholder="$200,000"
          allowDecimals={false}
          className={`shadow-sm form-control block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-Theme border-l border border-Theme focus:ring-blue-500 focus:border-blue-500`}
          value={value}
          prefix={"$"}
          step={10}
          groupSeparator={","}
          disabled={true}
        />
      </div>
    </div>
  );
}
