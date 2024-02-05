import { Typography } from "@mui/material";
import React from "react";
import { defaultReport } from "../defaultData";
import { NavBar } from "../navBar";
import { PropertyCard } from "./PropertyCard";

interface InitalState {
  //   report: Report;
  //   setReport: Function;
}

export function PropertiesPage(props: InitalState): JSX.Element {
  //   const yourProperties = localStorage.getItem("YourProperties");
  const [propertyList, setPropertyList] = React.useState<number[]>(
    localStorage.getItem("PropertyList")
      ? (JSON.parse(localStorage.getItem("PropertyList") ?? "{}") as number[])
      : []
  );
  React.useEffect(() => {
    localStorage.setItem("PropertyList", JSON.stringify(propertyList));
  }, [propertyList]);
  let items = propertyList.map((item) => {
    if (localStorage.getItem(item.toString())) {
      return (
        <PropertyCard
          key={item}
          reportId={item}
          propertyList={propertyList}
          setPropertyList={setPropertyList}
        />
      );
    } else {
      return <></>;
    }
  });
  return (
    <>
      <NavBar />
      <Typography
        variant="h3"
        sx={{ fontWeight: 500 }}
        color="#22aeff"
        className="min-w-max p-6"
      >
        Your Properties
      </Typography>
      <div className=" mx-4 flex flex-wrap">
        {items}
        <button
          type="button"
          className=" h-10 m-4 w-10 text-white bg-Theme hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
          onClick={() => {
            let temp = 1;
            while (propertyList.includes(temp)) {
              temp++;
            }
            localStorage.setItem(
              `${temp}`,
              JSON.stringify({ ...defaultReport, name: `New Property ${temp}` })
            );
            setPropertyList([...propertyList, temp]);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </>
  );
}
