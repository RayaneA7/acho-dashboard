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
import dynamic from 'next/dynamic';
const DynamicBiplotComponent = dynamic(() => import('@/components/Qsts/BiplotComponent'), {
  ssr: false, // Render only on the client side
});


export default function Example() {
  const list_items = [];



  
  
    const datas = {
      "loadings":[[-0.1997534039008589,0.9877174227144953,0.03434439055976765],[-0.9323439849692684,-0.061032480778635385,-0.37904669454870127],[0.9234271156174289,0.15203869213199106,-0.37527758380155846]],"pca_result":[[3.252835721255845,-0.20166747372571345,3.670194537054562],[-0.19834672500258954,-0.4814539588811086,-0.11705066221436045],[-0.5624191780087411,1.8866891229038427,0.03748437015354833],[-0.1905177836677384,-0.4792399779398018,-0.13270645874101059],[-0.37838259646759254,0.7029183514321217,-0.03971596866328345],[-0.19405246208241175,-0.4801507595351355,-0.12700149189580187],[-0.7403203260602097,3.07141617091387,0.11437235567452682],[-0.1283793945587348,-0.46606519482944037,-0.18944955368380884],[-0.09458204061854851,-0.4609766120771404,-0.18842016959002614],[-0.19964036968355628,-0.48050695097110774,-0.13462000226045948],[-0.3658018791853816,0.7061693811883685,-0.06016482583408082],[-0.3729534315923634,0.7044701084139958,-0.05082494185760327],[-0.23974747120859638,-0.513810141525429,0.2827560229590233],[-0.18296247265425195,-0.4806539602994293,-0.09330243903100986],[0.034499851159520076,-0.43613088464640304,-0.267563866509082],[-0.37901353019089035,0.7028343368399056,-0.03990375960194656],[-0.11107062151245511,-0.46315419653783346,-0.19360450227734202],[-0.7508057045841631,3.070520041067789,0.10357346899773345],[-0.2387484346314752,-0.5136260096168618,0.2822688136266849],[0.14051391853713555,-0.4217932191076798,-0.2394017403790274],[-0.33011860561203393,1.9399535343905239,-0.23623216303973527],[-0.150579243162787,-0.47647608810688136,-0.08160273047742689],[-0.6451551137822765,1.8560612383395312,0.31394705719292454],[-0.20074429110016823,-0.48127434692438853,-0.12542349705072708],[-0.47498788822127885,1.9036114638930712,-0.017558255790345985],[-0.019998007129143968,-0.4488913831888518,-0.19928682302347653],[9.49711174915333,1.06822555884849,-1.2022456152642167],[-0.19528900431539872,-0.4801811202252408,-0.12943140614625004],[-0.5017709022517285,1.8999619248947588,-0.024253546943504744],[-0.10550595702879163,-0.4678963846948613,-0.10776423061972587],[-0.04280525206473528,-0.45524409303469004,-0.15516846167593],[-0.75119917026036,3.070530176095619,0.1024963471918121],[-0.19588137219500223,-0.480085676923321,-0.13228411822606825],[0.038545121700051074,-0.4281289982708326,-0.38094381089667434],[-0.2017863844463498,-0.4827123021088159,-0.10578698933003068],[-0.23452688352838647,-0.5099616203369788,0.23589598062908698],[-0.2409863461514101,-0.5139972837187068,0.2827277356613254],[-0.02123703966376569,-0.44893983432896684,-0.20144482425807567],[-0.1998510168557045,-0.4824040800427891,-0.10598643755902531],[-0.2409123723085798,-0.5139438350043338,0.282080380021106],[-0.03758807311211731,-0.45505601308495325,-0.1458371759494503],[-0.14826376569704838,-0.46986462872792345,-0.17768650335797886],[-0.24004364539626097,-0.5139035719650057,0.28349681928915926],[-0.19959316666085675,-0.4805230132539074,-0.13426284364130361],[-0.09211596469807332,-0.4575762684621411,-0.23485048394622077],[-0.23480833448044156,-0.5086771808823354,0.21551661334229325],[-0.23741649233634624,-0.5088839149426799,0.2125821908034969],[-0.27757951728243113,-0.5200944292513228,0.29063501943682335],[-0.20331385438197833,-0.481388506930355,-0.12968883262664332],[0.041491527616259814,-0.4346348737963334,-0.27415747705686283],[-0.2084995831456116,-0.5086263933433124,0.27635333537311096],[-0.19443288010670562,-0.4798740279628904,-0.1321411527426037],[0.0430541304352601,-0.42785002341233025,-0.3746666202060347],[-0.24040319485378517,-0.5139244913459915,0.282975914105432],[-0.2035308844452999,-0.48154727883017134,-0.12775947923590225],[-0.01387577255508592,-0.4476965007391061,-0.20329344174495112],[0.0007041581202902742,-0.4769886204579621,0.2805798904688553],[-0.1801524898260925,-0.47690863085348795,-0.14422392540351603],[-0.04313441148330987,-0.45545610907977674,-0.1526842556301108],[-0.1943195160181629,-0.47982141047606897,-0.13268349240522873],[-0.018605359710482716,-0.4546991348210905,-0.10685787519464318]]
    }
  
  
    const variableLabels = ['Variable 1', 'Variable 2', 'Variable 3'];
  




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
        <Card className="my-auto">
          {/* Placeholder to set height */}
          <Question chartdata={variance} />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <DynamicBiplotComponent  pcaResult={datas.pca_result} loadings={datas.loadings} variableLabels={variableLabels} />

        </Card>
      </Grid>
    </main>
  );
}
