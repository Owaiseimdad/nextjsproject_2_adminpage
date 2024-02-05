"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: Math.floor(Math.random() * 5000),
    click: 2400,
  },
  {
    name: "Mon",
    visit: Math.floor(Math.random() * 5000),
    click: 1398,
  },
  {
    name: "Tue",
    visit: Math.floor(Math.random() * 5000),
    click: 3800,
  },
  {
    name: "Wed",
    visit: Math.floor(Math.random() * 5000),
    click: 3908,
  },
  {
    name: "Thu",
    visit: Math.floor(Math.random() * 5000),
    click: 4800,
  },
  {
    name: "Fri",
    visit: Math.floor(Math.random() * 5000),
    click: 3800,
  },
  {
    name: "Sat",
    visit: Math.floor(Math.random() * 5000),
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly data</h2>
      <ResponsiveContainer
        width="100%"
        height="90%"
        className={styles.chartTable}
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
