"use client";

import {
  Card,
  Title,
  DonutChart,
  LineChart,
  CategoryBar,
  Legend,
  ScatterChart,
} from "@tremor/react";

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

const chartdata1 = [
  {
    Country: "Argentina",
    Life_expectancy: 76.3,
    GDP: 13467.1236,
    Population: 43417765,
  },
  {
    Country: "Australia",
    Life_expectancy: 82.8,
    GDP: 56554.3876,
    Population: 23789338,
  },
  {
    Country: "Austria",
    Life_expectancy: 81.5,
    GDP: 43665.947,
    Population: 8633169,
  }
];
const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
  //...
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export default () => {
  return (
    <div className="">
      <Card className=" bg-gray1 w-full mb-8">
        <Title>
          <span className="font-bold">Q2 :</span> A travers les marques
          suivantes vuelliez nous citer celles que vous connaissez ?
        </Title>
        <div className="flex">
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            variant="pie"
            label="differentes marques"
            showTooltip={true}
            showLabel={true}
            categories={[
              "New York",
              "London",
              "Hong Kong",
              "San Francisco",
              "Singapore",
              "Zurich",
            ]}
          />
          {/* <CategoryBar
            className="mt-4"
            values={[6724, 3621]}
            colors={["emerald", "red"]}
          />
          <Legend
            className="mt-3"
            categories={["Active users", "Inactive users"]}
            colors={["emerald", "red"]}
          /> */}
        </div>
      </Card>

      <Card>
        <Title>Life expectancy vs. GDP per capita</Title>
        <Text>As of 2015. Source: Our World in Data </Text>
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          yAxisWidth={50}
          data={chartdata1}
          category="Country"
          x="GDP"
          y="Life_expectancy"
          size="Population"
          showOpacity={true}
          minYValue={60}
          valueFormatter={{
            x: (amount) => `$${(amount / 1000).toFixed(1)}K`,
            y: (lifeExp) => `${lifeExp} yrs`,
            size: (population) =>
              `${(population / 1000000).toFixed(1)}M people`,
          }}
          showLegend={false}
        />

      </Card>

      <Card className=" bg-gray1 w-full mb-8">
        <Title>
          <span className="font-bold">Q2 :</span> A travers les marques
          suivantes vuelliez nous citer celles que vous connaissez ?
        </Title>
        <LineChart
          className="mt-6"
          data={chartdata}
          index="year"
          categories={["Export Growth Rate", "Import Growth Rate"]}
          colors={["emerald", "gray"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
};
