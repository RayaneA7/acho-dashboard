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

export default function Example() {
  return (
    <Card className="bg-gray2">
      <Title> <span className="font-bold">Q3 :</span> A travers les marques
          suivantes vuelliez nous citer celles que vous connaissez ?</Title>
      <Text>Comparison between Sales and Profit</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Sales", "Profit"]}
        colors={["indigo", "fuchsia"]}
        stack={false}
        yAxisWidth={60}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
      />
    </Card>
  );
}
