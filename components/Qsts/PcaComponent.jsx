import { Card, BarChart, Title, Text } from "@tremor/react";


export default function PcaComponent({chartdata}) {
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
          `${number}`
        }
      />
    </Card>
  );
}
