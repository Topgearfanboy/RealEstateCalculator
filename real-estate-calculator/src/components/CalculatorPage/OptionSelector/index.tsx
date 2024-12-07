import React from "react";
import { ButtonFormat } from "./helpers";

interface OptionSelectorProps {
  label: string;
  valueOptions: number[];
  value: number;
  setValue: Function;
}

export function OptionSelector(props: OptionSelectorProps): JSX.Element {
  const { label, setValue, valueOptions, value } = props;
  return (
    <div className="flex items-center">
      <p className="pr-2">{label}</p>
      <div className="grow" />
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <>
          {valueOptions.map((option, i) => {
            return (
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium  ${ButtonFormat(
                  option === value,
                  i,
                  valueOptions.length
                )}`}
                onClick={() => {
                  setValue(option);
                }}
              >
                {option.toString()}
              </button>
            );
          })}
        </>
      </div>
    </div>
  );
}
