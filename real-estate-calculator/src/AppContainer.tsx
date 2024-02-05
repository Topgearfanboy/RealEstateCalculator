import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CalculatorPage } from "./components/CalculatorPage";
import { HomePage } from "./components/HomePage";
import { PropertiesPage } from "./components/YourPropertiesPage";

interface InitalState {}

export function AppContainer(props: InitalState): JSX.Element {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CalculatorPage />} /> */}
        <Route path="/properties/:id" element={<CalculatorPage />} />
        <Route path="/PropertiesPage" element={<PropertiesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
