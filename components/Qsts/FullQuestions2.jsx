import { Card, BarChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  // ...
  {
    Month: "Jan 22",
    Sales: 3890,
    Profit: 2980,
  },
];

export default function Example({chartdata}) {
  return (
    <Card className="bg-gray2">
      <Title>Ration variance entre les composantes</Title>
      <BarChart
        className="mt-4 h-80"
        data={chartdata}
        index="comp"
        categories={["var"]}
        colors={["indigo"] }
        stack={false}
        yAxisWidth={60}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
      />
    </Card>
  );
}
