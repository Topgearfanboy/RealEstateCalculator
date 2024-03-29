import React from "react";

interface EntryBoxProps {
  label: string;
  value: number;
  setValue: Function;
}

export function YearSelector(props: EntryBoxProps): JSX.Element {
  const { label, setValue, value } = props;
  return (
    <div className="flex items-center">
      <p className="pr-2">{label}</p>
      <div className="grow" />
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium  ${
            value === 10 ? "bg-Theme text-white" : "bg-white text-gray-900"
          } border-t border-b border-l border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:z-10 hover:ring-2 hover:ring-Theme rounded-l-md`}
          onClick={() => {
            setValue(10);
          }}
        >
          10
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            value === 15 ? "bg-Theme text-white" : "bg-white text-gray-900"
          } border-t border-b border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:z-10 hover:ring-2 hover:ring-Theme`}
          onClick={() => {
            setValue(15);
          }}
        >
          15
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium  ${
            value === 20 ? "bg-Theme text-white" : "bg-white text-gray-900"
          } border-t border-b border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:z-10 hover:ring-2 hover:ring-Theme`}
          onClick={() => {
            setValue(20);
          }}
        >
          20
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium  ${
            value === 30 ? "bg-Theme text-white" : "bg-white text-gray-900"
          } border-t border-b  border-r border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:z-10 hover:ring-2 hover:ring-Theme rounded-r-md`}
          onClick={() => {
            setValue(30);
          }}
        >
          30
        </button>
      </div>
    </div>
  );
}
