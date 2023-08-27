import { Card, Title, Text, ScatterChart } from "@tremor/react";
import { useEffect,useState } from "react";
import axios from "axios";

export default function ScatterChartExample({ chartdata }) {




  return (
    <Card>
      <Title>Plot des deux premieres composantes</Title>
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
            x: (amount) => `${(amount / 1000).toFixed(1)}`,
            y: (lifeExp) => `${lifeExp}`,
            size: (population) =>
              `${(population / 1000000).toFixed(1)}`,
          }}
          showLegend={false}
        />
      }
    </Card>
  );
}
