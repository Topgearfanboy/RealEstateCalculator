import React from "react";
import { useParams } from "react-router-dom";
import { Analysis } from "./Analysis";
import { BuildingBuilder } from "./BuildingBuilder";
import {
  defaultUnits,
  defaultBuilding,
  defaltLoan,
  defaultExpenses,
} from "../defaultData";
import { ExpensesCalculator } from "./ExpensesCalculator";
import { LoanCalculator } from "./LoanCalculator";
import { NavBar } from "../navBar";
import { PropertInfo } from "./PropertyInfo";
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
  const [name, setName] = React.useState("Default Name");
  const [report, setReport] = React.useState<Report>();
  let { id } = useParams();
  React.useEffect(() => {
    if (
      localStorage.getItem(id?.toString() ?? "") &&
      localStorage.getItem(id?.toString() ?? "") !== "undefined"
    ) {
      console.log(typeof localStorage.getItem(id?.toString() ?? ""));
      let data: Report = JSON.parse(
        localStorage.getItem(id?.toString() ?? "") ?? ""
      ) as Report;
      setUnitList(data.units);
      setBuilding(data.building);
      setLoan(data.loan);
      setExpenses(data.expenses);
      setName(data.name);
    }
  }, [id]);

  React.useEffect(() => {
    setReport((oldReport) => ({
      id: oldReport?.id ?? 0,
      name: name,
      units: unitList,
      expenses: expenses,
      loan: loan,
      building: building,
    }));
  }, [unitList, expenses, loan, building, id, name]);
  React.useEffect(() => {
    localStorage.setItem(id?.toString() ?? "data", JSON.stringify(report));
  }, [report, id]);
  return (
    <>
      <NavBar />
      <div className="mt-4 mx-4">
        <PropertInfo name={name} setName={setName} />
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
