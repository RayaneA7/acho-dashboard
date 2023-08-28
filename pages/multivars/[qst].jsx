import axios from "axios";
import { Card, Title, Text, Grid } from "@tremor/react";
import ScatterChartExample from "@/components/Qsts/FullQuestion3";
import Question from "@/components/Qsts/FullQuestions2";
import Question2 from "@/components/Qsts/FullQeuestion1";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { CalculatorIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import FormikControl from "@/components/formComponents/ControlComponents/FormikControl";
import * as Yup from "yup";
import { XIcon } from "@heroicons/react/solid";
import { Icon } from "@tremor/react";

export default function Example() {
  const list_items = [];

  const options = [
    { key: "Donator", value: true },
    { key: "Requester", value: false },
  ];

  const initialValues = {
    isDonator: true,
  };

  const validationSchema = Yup.object({
    isDonator: Yup.string(),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
  };

  const [data, setData] = useState([]);
  const [variance, setVariance] = useState([]);
  const [selectedvars, setSelectedvars] = useState([]);
  const [vars, setVars] = useState([
    { key: "variable1", value: "variable1" },
    { key: "variable2", value: "variable2" },
    { key: "variable3", value: "variable3" },
    { key: "variable4", value: "variable4" },
    { key: "variable5", value: "variable5" },
    { key: "variable6", value: "variable6" },
    { key: "variable7", value: "variable7" },
    { key: "variable8", value: "variable8" },
    { key: "variable9", value: "variable9" },
    { key: "variable11", value: "variable11" },
    { key: "variable12", value: "variable12" },
    { key: "variable13", value: "variable13" },
    { key: "variable14", value: "variable94" },
    { key: "variable15", value: "variable15" },
  ]);
  useEffect(() => {
    const getData = async () => {
      try {
        let results = await axios.get("http://127.0.0.1:5000/PCA", {
          headers: {
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
          },
        });
        setData(results.data["pca_result"]);
        setVariance(results.data["explained_variance_ratio"]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    const getVars = async () => {
      try {
        let results = await axios.get("http://127.0.0.1:5000/vars", {
          headers: {
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(results.data);
        setVars(
          results.data.map((result) => {
            return { key: result, value: result };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getVars();
  }, []);

  const chartdata = [
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
    },
    // ...
  ];

  return (
    <main className=" py-20 px-20 lg:px-[180px]">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      {/* Main section */}
      <Card className="mt-6 ">
        <div className="max-w-sm mx-auto space-y-6 mb-6 ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="">
                  <FormikControl
                    control="select"
                    label="Variables à sélectionner"
                    name="isDonator"
                    options={vars}
                    onChange={(e) => {
                      setSelectedvars([...selectedvars, e.target.value]);

                      formik.handleChange(e);
                    }}
                  />
                  {/* <div className="form-control mt-6 md:mt-12">
                  <button
                    className={`btn btn-primary bg-red-500`}
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                </div> */}
                </Form>
              );
            }}
          </Formik>
        </div>{" "}
        <Card className="bg-gray2 w-full mb-8">
          <ul className="flex flex-wrap gap-4">
            {selectedvars.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={(e)=>{
                  console.log(e.target.innerText)

                  setSelectedvars(selectedvars.filter(item => {
                    item !== e.target.innerText}))

                }}
              >
                {variable} <Icon size="xs" icon={XIcon} color="white" />{" "}
              </li>
            ))}
          </ul>
        </Card>
        {/* <Card className="bg-gray1 w-full">
          {list_items.length === 0 ? (
            <div className="h-28" />
          ) : (
            list_items?.map((item, index) => {
              <div key={index}>item.value</div>;
            })
          )}
        </Card> */}
      </Card>
      <Card className="mt-6">
        <ScatterChartExample chartdata={data} />
      </Card>

      {/* KPI section */}
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <Card>
          {/* Placeholder to set height */}
          <Question chartdata={variance} />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <Question2 />
        </Card>
      </Grid>
    </main>
  );
}
