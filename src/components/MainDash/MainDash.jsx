import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Chart from "../Charts/Chart";
import EmployeeList from "../EmployeeList/EmployeeList";

const MainDash = () => {
  return (
    <div className="maindashContainer">
      <h1>
        <span>Employee </span>Dashboard
      </h1>
      <Cards />
      <Chart />
      <EmployeeList />
    </div>
  );
};

export default MainDash;
