import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { Expenses } from "../../types";
interface keyStatsProps {
  expenses: Expenses;
}

export function ExpenseChart(props: keyStatsProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expenses } = props;
  const data = [
    { name: "network 1", value: 2 },
    { name: "network 3", value: 4 },
  ];
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={70}
        fill="#8884d8"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index,
        }) => {
          console.log("handling label?");
          const RADIAN = Math.PI / 180;
          // eslint-disable-next-line
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          // eslint-disable-next-line
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          // eslint-disable-next-line
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#8884d8"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {data[index].name}
            </text>
          );
        }}
      />
    </PieChart>
  );
}
