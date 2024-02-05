import { Typography } from "@mui/material";
import React from "react";
import { NavBar } from "../navBar";
import House from "./house.svg";
// import Background from "./background.jpg";

interface InitalState {
  //   report: Report;
  //   setReport: Function;
}

export function HomePage(props: InitalState): JSX.Element {
  return (
    <div className=" h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-[url('../components/HomePage/background.jpg')] bg-opacity-25">
      <NavBar />
      <div className=" mt-20 flex justify-center flex-col md:flex-row ">
        <div className=" max-w-min flex flex-row ">
          <div className="flex flex-col mr-10">
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium" }}
              color="#22aeff"
              className="min-w-max"
            >
              Analyze Properties
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: "medium" }}
              color="#22aeff"
              className="pb-10 min-w-max"
            >
              Today
            </Typography>
            <Typography variant="h5" color="#22aeff" className="pb-10">
              Calculate your key stats and see if the property is right for you
            </Typography>
            <a href="/PropertiesPage">
              <button
                type="button"
                className="text-white bg-Theme hover:bg-ThemeDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none max-w-max"
              >
                Get Started Today
              </button>
            </a>
          </div>
        </div>

        <img src={House} alt="React Logo" className="w-1/4" />
      </div>
    </div>
  );
}
