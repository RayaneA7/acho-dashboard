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
  const [variance, setVariance] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        let results = await axios.get("http://127.0.0.1:5000/PCA", {
          headers: {
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*",
          },
        });
        setData( results.data["pca_result"]);
        setVariance(results.data['explained_variance_ratio'])
      } catch (error) {
        console.log(error);
      }
    };

    getData();
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

  const vars = [
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
  ];

  const data2 = [
    {
      val1: 3.2528357212558454,
      val2: -0.20166747372571964,
      val3: 3.670194537054562
    },
    {
      val1: -0.19834672500258818,
      val2: -0.4814539588811085,
      val3: -0.11705066221436006
    },
    {
      val1: -0.5624191780087385,
      val2: 1.8866891229038447,
      val3: 0.037484370153548024
    },
    {
      val1: -0.1905177836677391,
      val2: -0.47923997793980194,
      val3: -0.1327064587410104
    },
    {
      val1: -0.3783825964675916,
      val2: 0.7029183514321227,
      val3: -0.03971596866328354
    },
    {
      val1: -0.19405246208241247,
      val2: -0.48015075953513575,
      val3: -0.1270014918958017
    },
    {
      val1: -0.7403203260602051,
      val2: 3.0714161709138725,
      val3: 0.11437235567452637
    },
    {
      val1: -0.12837939455873548,
      val2: -0.46606519482944064,
      val3: -0.1894495536838087
    },
    {
      val1: -0.09458204061854925,
      val2: -0.4609766120771408,
      val3: -0.188420169590026
    },
    {
      val1: -0.19964036968355695,
      val2: -0.48050695097110796,
      val3: -0.13462000226045934
    },
    {
      val1: -0.3658018791853806,
      val2: 0.7061693811883695,
      val3: -0.06016482583408087
    },
    {
      val1: -0.3729534315923624,
      val2: 0.7044701084139968,
      val3: -0.05082494185760335
    },
    {
      val1: -0.2397474712085972,
      val2: -0.5138101415254293,
      val3: 0.28275602295902325
    },
    {
      val1: -0.18296247265425258,
      val2: -0.48065396029942953,
      val3: -0.09330243903100972
    },
    {
      val1: 0.034499851159519535,
      val2: -0.4361308846464034,
      val3: -0.2675638665090818
    },
    {
      val1: -0.37901353019088935,
      val2: 0.7028343368399066,
      val3: -0.039903759601946635
    },
    {
      val1: -0.11107062151245585,
      val2: -0.4631541965378337,
      val3: -0.19360450227734188
    },
    {
      val1: -0.7508057045841587,
      val2: 3.070520041067792,
      val3: 0.10357346899773295
    },
    {
      val1: -0.23874843463147596,
      val2: -0.5136260096168621,
      val3: 0.2822688136266849
    },
    {
      val1: 0.14051391853713502,
      val2: -0.42179321910768036,
      val3: -0.23940174037902726
    },
    {
      val1: -0.3301186056120312,
      val2: 1.9399535343905259,
      val3: -0.23623216303973532
    },
    {
      val1: -0.15057924316278778,
      val2: -0.4764760881068816,
      val3: -0.08160273047742678
    },
    {
      val1: -0.6451551137822736,
      val2: 1.8560612383395338,
      val3: 0.31394705719292415
    },
    {
      val1: -0.20074429110016886,
      val2: -0.48127434692438864,
      val3: -0.12542349705072695
    },
    {
      val1: -0.474987888221276,
      val2: 1.9036114638930737,
      val3: -0.017558255790346235
    },
    {
      val1: -0.019998007129144683,
      val2: -0.44889138318885224,
      val3: -0.19928682302347636
    },
    {
      val1: 9.497111749153335,
      val2: 1.0682255588484801,
      val3: -1.2022456152642165
    },
    {
      val1: -0.1952890043153994,
      val2: -0.4801811202252409,
      val3: -0.12943140614624984
    },
    {
      val1: -0.5017709022517255,
      val2: 1.8999619248947612,
      val3: -0.02425354694350494
    },
    {
      val1: -0.10550595702879235,
      val2: -0.4678963846948616,
      val3: -0.10776423061972576
    },
    {
      val1: -0.04280525206473593,
      val2: -0.45524409303469043,
      val3: -0.15516846167592982
    },
    {
      val1: -0.7511991702603557,
      val2: 3.070530176095622,
      val3: 0.1024963471918116
    },
    {
      val1: -0.19588137219500298,
      val2: -0.4800856769233212,
      val3: -0.13228411822606811
    },
    {
      val1: 0.03854512170005052,
      val2: -0.42812899827083295,
      val3: -0.3809438108966741
    },
    {
      val1: -0.20178638444635047,
      val2: -0.48271230210881605,
      val3: -0.10578698933003063
    },
    {
      val1: -0.23452688352838733,
      val2: -0.5099616203369791,
      val3: 0.23589598062908695
    },
    {
      val1: -0.24098634615141082,
      val2: -0.5139972837187069,
      val3: 0.28272773566132536
    },
    {
      val1: -0.02123703966376637,
      val2: -0.44893983432896717,
      val3: -0.20144482425807553
    },
    {
      val1: -0.1998510168557053,
      val2: -0.48240408004278934,
      val3: -0.10598643755902522
    },
    {
      val1: -0.2409123723085806,
      val2: -0.513943835004334,
      val3: 0.2820803800211061
    },
    {
      val1: -0.03758807311211794,
      val2: -0.45505601308495364,
      val3: -0.1458371759494502
    },
    {
      val1: -0.14826376569704913,
      val2: -0.4698646287279237,
      val3: -0.17768650335797875
    },
    {
      val1: -0.24004364539626175,
      val2: -0.5139035719650059,
      val3: 0.2834968192891592
    },
    {
      val1: -0.1995931666608575,
      val2: -0.4805230132539076,
      val3: -0.13426284364130353
    },
    {
      val1: -0.09211596469807405,
      val2: -0.45757626846214144,
      val3: -0.2348504839462206
    },
    {
      val1: -0.23480833448044244,
      val2: -0.5086771808823356,
      val3: 0.21551661334229327
    },
    {
      val1: -0.23741649233634698,
      val2: -0.5088839149426801,
      val3: 0.21258219080349688
    },
    {
      val1: -0.2775795172824319,
      val2: -0.520094429251323,
      val3: 0.29063501943682335
    },
    {
      val1: -0.20331385438197908,
      val2: -0.48138850693035523,
      val3: -0.12968883262664324
    },
    {
      val1: 0.0414915276162593,
      val2: -0.4346348737963338,
      val3: -0.27415747705686283
    },
    {
      val1: -0.20849958314561245,
      val2: -0.5086263933433127,
      val3: 0.27635333537311096
    },
    {
      val1: -0.19443288010670637,
      val2: -0.47987402796289064,
      val3: -0.13214115274260363
    },
    {
      val1: 0.043054130435259685,
      val2: -0.4278500234123306,
      val3: -0.3746666202060344
    },
    {
      val1: -0.240403194853786,
      val2: -0.5139244913459917,
      val3: 0.2829759141054319
    },
    {
      val1: -0.20353088444530068,
      val2: -0.48154727883017145,
      val3: -0.12775947923590214
    },
    {
      val1: -0.013875772555086614,
      val2: -0.4476965007391065,
      val3: -0.20329344174495098
    },
    {
      val1: 0.0007041581202895416,
      val2: -0.47698862045796253,
      val3: 0.2805798904688552
    },
    {
      val1: -0.18015248982609322,
      val2: -0.47690863085348806,
      val3: -0.14422392540351583
    },
    {
      val1: -0.043134411483310584,
      val2: -0.4554561090797771,
      val3: -0.1526842556301107
    },
    {
      val1: -0.1943195160181637,
      val2: -0.4798214104760691,
      val3: -0.13268349240522861
    },
    {
      val1: -0.018605359710483382,
      val2: -0.45469913482109087,
      val3: -0.10685787519464311
    }
  ]
  

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
          {/* <MultiSelect
          placeholder={'select variales'}
            value={value}
            onValueChange={(values) => {
              setValue(values);
              alert(values);
            }}
          >
            <MultiSelectItem value={"1"} icon={CalculatorIcon}>
              Kilometers
            </MultiSelectItem>
            <MultiSelectItem value={"2"} icon={CalculatorIcon}>
              Meters
            </MultiSelectItem>
            <MultiSelectItem value={"3"} icon={CalculatorIcon}>
              Miles
            </MultiSelectItem>
            <MultiSelectItem value={"4"} icon={CalculatorIcon}>
              Nautical Miles
            </MultiSelectItem>
          </MultiSelect> */}
        </div>{" "}
        <Card className="bg-gray2 w-full mb-8">
          <ul className="flex flex-wrap gap-4">
            {vars.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit px-4 py-2 mr-2`}
              >
                {variable.value}{" "}
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
