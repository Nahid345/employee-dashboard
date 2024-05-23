import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <img
        src={employee.image}
        alt={`${employee.name}`}
        className="employee-image"
      />
      <h3 className="employee-name">{employee.name}</h3>
    </div>
  );
};

export default EmployeeCard;
