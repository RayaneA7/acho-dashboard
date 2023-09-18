import Statistics from "@/components/Home/Statistics";
// import DonutChart from "@/components/Qsts/Question";
import Question from "@/components/Qsts/FullQuestion";
import Question2 from "@/components/Qsts/FullQuestions2";
import ScatterChartExample from "@/components/Qsts/FullQuestion3";
import Question1 from "@/components/Qsts/FullQeuestion1";
import {
  DonutChart,
  BarChart,
  Card,
  Title,
  LineChart,
  Button,
} from "@tremor/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import FormikControl from "@/components/formComponents/ControlComponents/FormikControl";

export default function Questionnaire() {
  const [datacharts, setDatacharts] = useState([]);
  const [selectedChart, setSelectedChart] = useState("donut");

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

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await axios.get("http://127.0.0.1:5000/univis", {
          headers: {
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(results.data);
        setDatacharts(results.data);
        // console.log(datachart);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="bg-white py-20 px-20 lg:px-[180px]">
      <div className="hero bg-opacity-50  min-h-[200px] mb-16">
        {" "}
        <div className="max-w-[1920px] mx-auto flex justify-center pt-16">
          <h1 className="font-bold md:text-[48px] lg:text-[60px] ml-6 text-left">
            Qualite de connexion internet{" "}
            <span className="text-bleu1 lg:text-clip block">
              {" "}
              [Deuxieme quinizaine mai 2023]
            </span>
          </h1>{" "}
        </div>
      </div>
      <div className="md:pb-8">
        <Statistics></Statistics>
      </div>
      <div>
        <div>
          <Formik
          initialValues = {'bar'}
          >
            {(formik) => {
              return (
                <Form className=" flex items-end ">
                  <FormikControl
                    control="select"
                    label="choisi le graph ici"
                    name="Chart"
                    options={[
                      { key: "barChart", value: "bar" },
                      { key: "DonutChart", value: "donut" },
                      { key: "LineChart", value: "line" },
                    ]}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setSelectedChart(e.target.value);
                      //formik.handleChange(e);
                    }}
                  />
                </Form>
              );
            }}
          </Formik>

          {selectedChart === "donut" ? (
            datacharts.map((datachart) => {
              return (
                <Card className="bg-gray2 mt-2" key={Date.now()}>
                  <Title>Variable : {datachart["column_name"]}</Title>
                  <DonutChart
                    variant="pie"
                    showTooltip={true}
                    className="mt-4 h-80"
                    data={datachart["response_counts"]}
                    index={datachart["column_name"]}
                    categories={["value"]}
                    yAxisWidth={60}
                    valueFormatter={(number) =>
                      ` ${Intl.NumberFormat("us").format(number).toString()}`
                    }
                    
                  />
                </Card>
              );
            })
          ) : selectedChart === "bar" ? (
            datacharts.map((datachart) => {
              return (
                <Card className="bg-gray2 mt-2" key={Date.now()}>
                  <Title>Variable : {datachart["column_name"]}</Title>
                  <BarChart
                    className="mt-4 h-80"
                    data={datachart["response_counts"]}
                    index={datachart["column_name"]}
                    categories={["value"]}
                    yAxisWidth={60}
                    valueFormatter={(number) =>
                      ` ${Intl.NumberFormat("us").format(number).toString()}`
                    }
                  />
                </Card>
              );
            })
          ) : selectedChart === "line" ? (
            datacharts.map((datachart) => {
              return (
                <Card className="bg-gray2 mt-2" key={Date.now()}>
                  <Title>Variable : {datachart["column_name"]}</Title>
                  <LineChart
                    className="mt-4 h-80"
                    data={datachart["response_counts"]}
                    index={datachart["column_name"]}
                    categories={["value"]}
                    yAxisWidth={60}
                    valueFormatter={(number) =>
                      ` ${Intl.NumberFormat("us").format(number).toString()}`
                    }
                  />
                </Card>
              );
            })
          ) : (
            <p>Choisi un type de graph a afficher</p>
          )}
        </div>
        {/* <Question /> */}
        {/* <ScatterChartExample /> */}
        {/* <Question1 /> */}

        {/* <Card className="bg-gray2">
          <Title>Variable : {datachart["column_name"]}</Title>
          <BarChart
            className="mt-4 h-80"
            data={datachart["response_counts"]}
            index={datachart["column_name"]}
            categories={["value"]}
            stack={false}
            yAxisWidth={60}
            valueFormatter={(number) =>
              ` ${Intl.NumberFormat("us").format(number).toString()}`
            }
          />
        </Card> */}

        {/* <Card className="bg-gray2">
          <Title>Variable : {datachart["column_name"]}</Title>
          <DonutChart
            variant="pie"
            className="mt-4 h-80"
            data={datachart["response_counts"]}
            index={datachart["column_name"]}
            categories={["value"]}
            // colors={["indigo"]}
            stack={false}
            yAxisWidth={60}
            valueFormatter={(number) =>
              ` ${Intl.NumberFormat("us").format(number).toString()}`
            }
          />
        </Card>


        <Card className="bg-gray2">
          <Title>Variable : {datachart["column_name"]}</Title>
          <LineChart
            className="mt-4 h-80"
            data={datachart["response_counts"]}
            index={datachart["column_name"]}
            categories={["value"]}
            // colors={["indigo"]}
            stack={false}
            yAxisWidth={60}
            valueFormatter={(number) =>
              ` ${Intl.NumberFormat("us").format(number).toString()}`
            }
          />
        </Card> */}

        {/* <DonutChart /> */}
      </div>
    </div>
  );
}
