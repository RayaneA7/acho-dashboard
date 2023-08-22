"use client"
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  
  const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  

export default  () => {
  return <div className="bg-gray1 rounded-3xl py-4 w-full">
    <h1 className="h1">dfkjalkf;jdkla</h1>

    <Card className="max-w-lg bg-white">
    <Title>Sales</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
  </div>;
};
