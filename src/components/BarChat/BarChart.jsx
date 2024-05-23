import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", attendance: 4000, status: "On Time" },
  { name: "Tue", attendance: 3000, status: "Late" },
  { name: "Wed", attendance: 2000, status: "Absent" },
  { name: "Thu", attendance: 2780, status: "On Time" },
  { name: "Fri", attendance: 1890, status: "Late" },
  { name: "Sat", attendance: 2390, status: "On Time" },
  { name: "Sun", attendance: 3490, status: "Absent" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default class Example extends PureComponent {
  render() {
    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2>Attendance Statistics</h2>
          <select style={dropdownStyle}>
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
            <option>Week 4</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="attendance"
              barSize={25}
              background={{ fill: "#eee" }}
              shape={(props) => {
                const { x, y, width, height, index } = props;
                let color = "";
                if (data[index].status === "On Time") color = "blue";
                if (data[index].status === "Late") color = "blueviolet";
                if (data[index].status === "Absent") color = "red";
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={color}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
        <div style={legendStyle}>
          <span style={{ ...legendItemStyle, backgroundColor: "blue" }}>
            On Time
          </span>
          <span style={{ ...legendItemStyle, backgroundColor: "blueviolet" }}>
            Late
          </span>
          <span style={{ ...legendItemStyle, backgroundColor: "red" }}>
            Absent
          </span>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  width: "86%",
  height: "645px",
  padding: "20px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  margin: "15px",
  marginBottom: "10px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const dropdownStyle = {
  padding: "5px 10px",
  fontSize: "16px",
  borderRadius: "5px",
};

const legendStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
};

const legendItemStyle = {
  padding: "5px 10px",
  color: "white",
  borderRadius: "5px",
  textAlign: "center",
};
