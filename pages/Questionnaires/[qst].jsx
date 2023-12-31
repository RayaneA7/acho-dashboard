import Statistics from "@/components/Home/Statistics";

import {
  DonutChart,
  BarChart,
  Card,
  Title,
  LineChart,
  Button,
  Icon,
} from "@tremor/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import FormikControl from "@/components/formComponents/ControlComponents/FormikControl";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import MyChart from "@/components/Qsts/Chart";


export default function Questionnaire() {
  const [datacharts, setDatacharts] = useState([]);
  const [selectedChart, setSelectedChart] = useState("donut");
  const [unires, setUnires] = useState([]);
  const [multivis, setMultivis] = useState([]);
  const [vars, setVars] = useState([]);
  const [univarData,setUnivarData] = useState([])
  const [multivarData,setMultivarData] = useState([])
  const [wordCloudDataMultivis,setWordCloudDataMultivis]=useState([])

  const router = useRouter();

  const initialValues = {
    isDonator: true,
  };



  useEffect(() => {
    const { qst } = router.query;

    const getData = async () => {
      try {
        console.log(qst);

        const results = await axios.get(
          `http://127.0.0.1:5000/vars?file=${qst}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(results.data);
        setVars(results.data);
        // console.log(datachart);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(()=> {

    console.log(univarData)
    console.log(multivarData)

    setDatacharts([...univarData,...multivarData]);
  },[univarData,multivarData])


  
  const submitUnivis = async () => {
    try {

      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({ column_names: unires, original_filename: qst });

      let response = await axios.post(
        "http://localhost:5000/univis",
        bodyContent,
        {
          headers: headersList,
        }
      );

      let data = response.data;
      setUnivarData(data.result)
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("veillez selctionner les bonnes variables");

    }
  };

  const submitMultivis = async (qst) => {

    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };
      console.log(qst)

      let bodyContent = JSON.stringify({ column_names: multivis, original_filename: qst});

      let response = await axios.post(
        "http://localhost:5000/multivis",
        bodyContent,
        {
          headers: headersList,
        }
      );

      let data = response.data;
      setMultivarData(data.result)
      setWordCloudDataMultivis(data.plot_data)
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("veillez selctionner les bonnes variables");

    }
  };

  const message = router.query.message 
  const { qst } = router.query;

  return (
    <div className="bg-white py-20 px-20 lg:px-[180px] w-full">
      <div className="hero bg-opacity-50  min-h-[200px] mb-16">
        {" "}
        <div className="max-w-[1920px] mx-auto flex justify-center pt-16">
        
          <h1 className="font-bold md:text-[48px] lg:text-[60px] ml-6 text-left">
          <span className="text-bleu1 lg:text-clip block">
              
              {" "}
              {message}
            </span>
          </h1>{" "}
        </div>
      </div>
      <div className="md:pb-8">
        <Statistics></Statistics>
      </div>
      <div>
        <div className="max-w-sm mx-auto space-y-6 mb-6 ">
          <Formik
            initialValues={initialValues}

            // onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className=" flex items-end ">
                  <FormikControl
                    control="select"
                    label="variables à réponses uniques"
                    name="is"
                    options={vars}
                    onChange={(e) => {
                      setUnires([...unires, e.target.value]);
                      formik.handleChange(e);
                    }}
                  />
                  <Button
                    onClick={() => {
                      submitUnivis(qst);
                    }}
                    type="submit"
                    className=" ml-2 my-0.5 py-3"
                  >
                    Soumettre
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>

        <Card className="bg-gray2 w-full mb-8">
          <ul className="flex flex-wrap gap-4">
            {unires.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={(e) => {
                  console.log(e.target.innerText);

                  setUnires((prevSelectedVars) =>
                    prevSelectedVars.filter((item) => item !== variable)
                  );
                }}
              >
                {variable} <Icon size="xs" icon={XIcon} color="white" />{" "}
              </li>
            ))}
          </ul>
        </Card>

        <div className="max-w-sm mx-auto space-y-6 mb-6 ">
          <Formik initialValues={initialValues}>
            {(formik) => {
              return (
                <Form className=" flex items-end ">
                  <FormikControl
                    control="select"
                    label="variables à réponses multiples"
                    name="isMultivis"
                    options={vars}
                    onChange={(e) => {
                      setMultivis([...multivis, e.target.value]);
                      formik.handleChange(e);
                    }}
                  />
                  <Button
                    onClick={() => {
                      submitMultivis(qst);
                    }}
                    className=" ml-2 my-0.5 py-3"
                  >
                    Soumettre
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>

        <Card className="bg-gray2 w-full mb-8">
          <ul className="flex flex-wrap gap-4">
            {multivis.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={(e) => {
                  console.log(e.target.innerText);

                  setMultivis((prevSelectedVars) =>
                    prevSelectedVars.filter((item) => item !== variable)
                  );
                }}
              >
                {variable} <Icon size="xs" icon={XIcon} color="white" />{" "}
              </li>
            ))}
          </ul>
        </Card>

        <div>
          <Formik initialValues={"donut"}>
            {(formik) => {
              return (
                <Form className=" flex items-end ">
                  <FormikControl
                    control="select"
                    label="type de Tracé"
                    name="Chart"
                    options={[
                      { key: "DonutChart", value: "donut" },
                      { key: "barChart", value: "bar" },
                      { key: "LineChart", value: "line" },
                    ]}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSelectedChart(e.target.value);
                      //formik.handleChange(e);
                    }}
                  />
                </Form>
              );
            }}
          </Formik>

          {selectedChart === "donut" ? (
            datacharts.map((datachart, index) => (
              <Card className="bg-gray2 mt-2" key={index}>
                {console.log(index)}
                <Title>Variable : {datachart["column_name"]}</Title>
                <DonutChart
                  variant="pie"
                  showTooltip={true}
                  className="mt-4 h-80"
                  data={datachart["values"]}
                  index={datachart["column_name"]}
                  categories={["value"]}
                  yAxisWidth={60}
                  valueFormatter={(number) =>
                    ` ${Intl.NumberFormat("us").format(number).toString()}`
                  }
                />
              </Card>
            ))
          ) : selectedChart === "bar" ? (
            datacharts.map((datachart, index) => (
              <Card className="bg-gray2 mt-2" key={index}>
                <Title>Variable : {datachart["column_name"]}</Title>
                <BarChart
                  className="mt-4 h-80"
                  data={datachart["values"]}
                  index={datachart["column_name"]}
                  categories={["value"]}
                  yAxisWidth={60}
                  valueFormatter={(number) =>
                    ` ${Intl.NumberFormat("us").format(number).toString()}`
                  }
                />
              </Card>
            ))
          ) : selectedChart === "line" ? (
            datacharts.map((datachart, index) => (
              <Card className="bg-gray2 mt-2" key={index}>
                {" "}
                <Title>Variable : {datachart["column_name"]}</Title>
                <LineChart
                  className="mt-4 h-80"
                  data={datachart["values"]}
                  index={datachart["column_name"]}
                  categories={["value"]}
                  yAxisWidth={60}
                  valueFormatter={(number) =>
                    ` ${Intl.NumberFormat("us").format(number).toString()}`
                  }
                />
              </Card>
            ))
          ) : (
            <p>Choisi un type de graph a afficher</p>
          )}
          <div className=" flex flex-col items-center justify-center  mx-auto my-4">

          { wordCloudDataMultivis.map((elem)=>(
           <div >  <MyChart wordCloudDataMultivis={elem} ></MyChart> </div>
          )
          )}
          </div>
         
        </div>
      </div>
    </div>
  );
}
