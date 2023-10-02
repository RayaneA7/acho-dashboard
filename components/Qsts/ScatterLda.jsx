import { Card, Title, Text, ScatterChart } from "@tremor/react";
import { useEffect } from "react";

export default function ScatterLda({ chartdata,targetName }) {


useEffect(()=>{
    console.log(chartdata)
},)

  return (
    <Card>
      <Title>Tracé des deux premières composantes de *{targetName}* </Title>
      {
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          yAxisWidth={50}
          data={chartdata}
          category="placeholder"
          x="val1"
          y="val2"
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
