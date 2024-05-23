import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Onsite", value: 400, fill: "#0000FF" }, // Blue color for Onsite
  { name: "Remote", value: 100, fill: "#008000" }, // Green color for Remote
];

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
  };

  render() {
    return (
      <div className="pieChartContainer" style={containerStyle}>
        <h2 className="pie-title" style={titleStyle}>
          Employee Type
        </h2>
        <div style={chartWrapperStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={this.state.activeIndex}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50} // Adjust as needed
                outerRadius={80} // Adjust as needed
                fill="#8884d8"
                dataKey="value"
              />
              <Legend
                align="center"
                verticalAlign="bottom"
                layout="horizontal"
                iconType="circle"
                wrapperStyle={legendWrapperStyle}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Box shadow style
  padding: "25px", // Padding for content inside the container
  borderRadius: "10px", // Border radius for rounded corners
  width: "270px", // Width of the container
  height: "270px", // Increased height to accommodate title and legend
  marginTop: "95px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between", // Space out title, chart, and legend
};

const titleStyle = {
  margin: "0", // Remove default margin
  padding: "0", // Remove default padding
  textAlign: "center",
};

const chartWrapperStyle = {
  width: "100%",
  height: "70%", // Adjust to fit within the container
};

const legendWrapperStyle = {
  width: "100%",
  paddingTop: "10px",
};
