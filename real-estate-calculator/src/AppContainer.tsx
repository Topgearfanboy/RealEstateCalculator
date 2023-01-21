import React from "react";
import { BuildingBuilder } from "./components/BuildingBuilder";
import { ExpensesCalculator } from "./components/ExpensesCalculator";
import {
  defaltLoan,
  defaultExpenses,
  defaultUnits,
  emptyBuilding,
} from "./components/defaultData";
import { LoanCalculator } from "./components/LoanCalculator";
import { Analysis } from "./components/Analysis";

interface InitalState {}

export function AppContainer(props: InitalState): JSX.Element {
  const [unitList, setUnitList] = React.useState(defaultUnits);
  const [building, setBuilding] = React.useState(emptyBuilding);
  const [loan, setLoan] = React.useState(defaltLoan);
  const [expenses, setExpenses] = React.useState(defaultExpenses);

  return (
    <div className="flex flex-col xl:flex-row 	">
      <div>
        <div className="m-4">
          <LoanCalculator loan={loan} setLoan={setLoan} />
        </div>
        <div className="m-4">
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
  );
}
