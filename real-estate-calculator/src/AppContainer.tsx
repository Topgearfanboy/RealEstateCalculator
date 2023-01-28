import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorPage } from "./components/CalculatorPage";

interface InitalState {}

export function AppContainer(props: InitalState): JSX.Element {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CalculatorPage />} /> */}
        <Route path="/properties/:id" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}
