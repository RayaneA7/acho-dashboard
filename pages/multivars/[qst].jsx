import { Card, Title, Text, Grid } from "@tremor/react";
import ScatterChartExample from "@/components/Qsts/FullQuestion3";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { CalculatorIcon } from "@heroicons/react/outline";


export default function Example() {
  return (
    <main className=" py-20 px-20 lg:px-[180px]">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      {/* Main section */}
      <Card className="mt-6">
      <div className="max-w-sm mx-auto space-y-6">
      <MultiSelect>
        <MultiSelectItem value="1" icon={CalculatorIcon}>
          Kilometers
        </MultiSelectItem>
        <MultiSelectItem value="2" icon={CalculatorIcon}>
          Meters
        </MultiSelectItem>
        <MultiSelectItem value="3" icon={CalculatorIcon}>
          Miles
        </MultiSelectItem>
        <MultiSelectItem value="4" icon={CalculatorIcon}>
          Nautical Miles
        </MultiSelectItem>
      </MultiSelect>
    </div>      </Card>
      <Card className="mt-6">
        <ScatterChartExample/>
      </Card>


      {/* KPI section */}
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
      </Grid>
    </main>
  );
}
