"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 18000,
  },
  {
    name: "Feb",
    total: 19200,
  },
  {
    name: "Mar",
    total: 20800,
  },
  {
    name: "Apr",
    total: 21500,
  },
  {
    name: "May",
    total: 22300,
  },
  {
    name: "Jun",
    total: 23400,
  },
  {
    name: "Jul",
    total: 24300,
  },
  {
    name: "Aug",
    total: 23800,
  },
  {
    name: "Sep",
    total: 22900,
  },
  {
    name: "Oct",
    total: 22000,
  },
  {
    name: "Nov",
    total: 21500,
  },
  {
    name: "Dec",
    total: 22800,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          labelFormatter={(label) => `Month: ${label}`}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "6px",
            padding: "8px",
          }}
        />
        <Bar dataKey="total" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
