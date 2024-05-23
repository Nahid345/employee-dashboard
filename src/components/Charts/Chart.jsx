import React, { PureComponent } from "react";
import "./Chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    quarter: "Q1",
    team: "Alpa Team",
    value: 5000,
    date: "2024-01-15",
  },
  {
    quarter: "Q2",
    team: "Bita Team",
    value: 6000,
    date: "2024-04-15",
  },
  {
    quarter: "Q3",
    team: "Grama Team",
    value: 3500,
    date: "2024-07-15",
  },
  {
    quarter: "Q4",
    team: "Codeforce Team",
    value: 7000,
    date: "2024-10-15",
  },
  {
    quarter: "Q5",
    team: "Codeshef Team",
    value: 8000,
    date: "2025-01-15",
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`Date: ${data.date}`}</p>
        <p>{`Team: ${data.team}`}</p>
        <p>{`Value: ${data.value}`}</p>
      </div>
    );
  }
  return null;
};

export default class Example extends PureComponent {
  render() {
    const renderQuarterTick = (tickProps) => {
      const { x, y, payload } = tickProps;
      const quarter = payload.value;

      return (
        <text x={x} y={y} dy={16} textAnchor="middle">
          {quarter}
        </text>
      );
    };

    return (
      <div className="ChartContainer">
        <h2 className="Chart-title">Team Performance</h2>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="quarter" tick={renderQuarterTick} height={50} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" barSize={50} name="Design " />
            <Bar dataKey="value" fill="#82ca9d" barSize={50} name="Dev " />
            <Bar dataKey="value" fill="#ffc658" barSize={50} name="QA " />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
