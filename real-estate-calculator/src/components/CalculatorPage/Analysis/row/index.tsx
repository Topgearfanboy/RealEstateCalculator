import React from "react";
import CurrencyInput from "react-currency-input-field";
interface BuildingBuilderProps {
  label: string;
  value: number;
  percentage?: boolean;
}
export function Row(props: BuildingBuilderProps): JSX.Element {
  const { label, value, percentage } = props;

  return (
    <>
      <div className="text-left pr-4">{label}</div>
      <div className="text-right">
        {/* <p>{value}</p> */}
        {!percentage ? (
          <CurrencyInput
            className={"bg-white"}
            value={value}
            prefix={"$"}
            groupSeparator={","}
            disabled={true}
            decimalsLimit={2}
            decimalScale={2}
          />
        ) : (
          <CurrencyInput
            className={"bg-white"}
            value={value}
            suffix={"%"}
            groupSeparator={","}
            disabled={true}
            decimalsLimit={4}
            decimalScale={4}
          />
        )}
      </div>
    </>
  );
}
