import React from "react";
interface BuildingBuilderProps {
  label: string;
  value: string;
}
export function Row(props: BuildingBuilderProps): JSX.Element {
  const { label, value } = props;

  return (
    <>
      <div className="text-left  px-4">{label}</div>
      <div className="text-left  px-4">
        <p>{value}</p>
      </div>
    </>
  );
}
