import React from "react";
import { useParams } from "react-router-dom";
import { Analysis } from "./Analysis";
import { BuildingBuilder } from "../BuildingBuilder";
import {
  defaultUnits,
  defaultBuilding,
  defaltLoan,
  defaultExpenses,
  defaultReport,
} from "../defaultData";
import { ExpensesCalculator } from "../ExpensesCalculator";
import { LoanCalculator } from "../LoanCalculator";
import { NavBar } from "../navBar";
import { PropertInfo } from "../PropertyInfo";
import { Report } from "../types";

interface InitalState {
  //   report: Report;
  //   setReport: Function;
}

export function CalculatorPage(props: InitalState): JSX.Element {
  const [unitList, setUnitList] = React.useState(defaultUnits);
  const [building, setBuilding] = React.useState(defaultBuilding);
  const [loan, setLoan] = React.useState(defaltLoan);
  const [expenses, setExpenses] = React.useState(defaultExpenses);
  const [report, setReport] = React.useState<Report>();
  React.useEffect(() => {
    if (
      localStorage.getItem("data") &&
      localStorage.getItem("data") !== "undefined"
    ) {
      console.log(typeof localStorage.getItem("data"));
      let data: Report = JSON.parse(
        localStorage.getItem("data") ?? ""
      ) as Report;
      setUnitList(data.units);
      setBuilding(data.building);
      setLoan(data.loan);
      setExpenses(data.expenses);
    }
  }, []);

  let { id } = useParams();
  React.useEffect(() => {
    setReport((oldReport) => ({
      name: id ?? "",
      units: unitList,
      expenses: expenses,
      loan: loan,
      building: building,
    }));
  }, [unitList, expenses, loan, building]);
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(report));
  }, [report]);
  return (
    <>
      <NavBar />
      <div className="mt-4 mx-4">
        <PropertInfo report={report ?? ({} as Report)} />
      </div>
      <div className="flex flex-col xl:flex-row">
        <div>
          <div className="ml-4 my-4">
            <LoanCalculator loan={loan} setLoan={setLoan} />
          </div>
          <div className="ml-4 my-4">
            <ExpensesCalculator
              expenses={expenses}
              setExpenses={setExpenses}
              building={building}
            />
          </div>
        </div>
        <div className="m-4">
          <BuildingBuilder
            unitList={unitList}
            setUnitList={setUnitList}
            building={building}
            setBuilding={setBuilding}
          />
          <Analysis expenses={expenses} building={building} loan={loan} />
        </div>
      </div>
    </>
  );
}
