import React from "react";
import "./EmployeList.css";
import { EmployeeData } from "../../data/Data";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  return (
    <div>
      <h4 className="employee-title">Employee Database</h4>
      <div className="employee-list">
        {EmployeeData.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
