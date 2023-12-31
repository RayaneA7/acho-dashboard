import { Card, Title, Text, ScatterChart } from "@tremor/react";

export default function PcaComponentScatter({ chartdata }) {




  return (
    <Card>
      <Title>Tracé des deux premières composantes</Title>
      {
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          yAxisWidth={50}
          data={chartdata}
          category="val3"
          x="val2"
          y="val1"
          showOpacity={true}
          autoMinYValue={true}
          autoMinXValue={true}
          valueFormatter={{
            x: (amount) => `${amount}`,
            y: (lifeExp) => `${lifeExp}`,
          }}
          showLegend={false}
        />
      }
    </Card>
  );
}
