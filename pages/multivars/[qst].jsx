import axios from 'axios'
import { Card, Title, Text, Grid, Button } from '@tremor/react'
import ScatterChartExample from '@/components/Qsts/FullQuestion3'
import ScatterLda from '@/components/Qsts/ScatterLda'
import Question from '@/components/Qsts/FullQuestions2'
import Question2 from '@/components/Qsts/FullQeuestion1'
import { MultiSelect, MultiSelectItem } from '@tremor/react'
import { CalculatorIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { Form, Formik } from 'formik'
import FormikControl from '@/components/formComponents/ControlComponents/FormikControl'
import * as Yup from 'yup'
import { XIcon } from '@heroicons/react/solid'
import { Icon } from '@tremor/react'
import dynamic from 'next/dynamic'
import ChartTest from '@/components/Qsts/LineChart'
const DynamicBiplotComponent = dynamic(
  () => import('@/components/Qsts/BiplotComponent'),
  {
    ssr: false // Render only on the client side
  }
)

export default function Example () {
  // const list_items = [];
  // const options = [
  //   { key: "Donator", value: true },
  //   { key: "Requester", value: false },
  // ];

    const initialValues = {
      isDonator: true
    }

  const validationSchema = Yup.object({
    isDonator: Yup.string()
  })

  // const onSubmit = async (values) => {
  //   console.log("Form data", values);
  // };

  // const [selectedVars,setSelectedvars]=useState([])
  const [data, setData] = useState([])
  const [variance, setVariance] = useState([])
  const [loadings, setLoading] = useState([])
  const [selectedvars, setSelectedvars] = useState([])
  const [selectedvarsLda, setSelectedvarsLda] = useState([])
  const [selectedTargetsLda, setSelectedTargetsLda] = useState([])
  const [dataLda, setDataLda] = useState([])
  const [vars, setVars] = useState([
    { key: 'variable1', value: 'variable1' },
    { key: 'variable2', value: 'variable2' },
    { key: 'variable3', value: 'variable3' },
    { key: 'variable4', value: 'variable4' },
    { key: 'variable5', value: 'variable5' },
    { key: 'variable6', value: 'variable6' },
    { key: 'variable7', value: 'variable7' },
    { key: 'variable8', value: 'variable8' },
    { key: 'variable9', value: 'variable9' },
    { key: 'variable11', value: 'variable11' },
    { key: 'variable12', value: 'variable12' },
    { key: 'variable13', value: 'variable13' },
    { key: 'variable14', value: 'variable94' },
    { key: 'variable15', value: 'variable15' }
  ])
  const [selectedvarsTSNE, setselectedVarsTSNE] = useState([])
  const [dataTsne, setDataTsne] = useState([])
  useEffect(() => {
    const getVars = async () => {
      try {
        let results = await axios.get('http://127.0.0.1:5000/vars', {
          headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          }
        })
        console.log(results.data)
        setVars(
          results.data.map(result => {
            return { key: result, value: result }
          })
        )
      } catch (error) {
        console.log(error)
      }
    }

    getVars()
  }, [])

  const chartdata = [
    {
      Country: 'Argentina',
      Life_expectancy: 76.3,
      GDP: 13467.1236,
      Population: 43417765
    },
    {
      Country: 'Australia',
      Life_expectancy: 82.8,
      GDP: 56554.3876,
      Population: 23789338
    },
    {
      Country: 'Austria',
      Life_expectancy: 81.5,
      GDP: 43665.947,
      Population: 8633169
    }
    // ...
  ]

  const submitPca = async () => {
    try {
      console.log(selectedvars)
      let headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        accestoken: 'your_access_token',
        'Content-Type': 'application/json'
      }

      let bodyContent = JSON.stringify({ columns_for_pca: selectedvars })

      let response = await axios.post(
        'http://localhost:5000/PCA',
        bodyContent,
        {
          headers: headersList
        }
      )

      let data = response.data
      setData(data['pca_result'])
      setVariance(data['explained_variance_ratio'])
      setLoading(data['loadings'])
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const submitLda = async () => {
    try {
      let headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        accestoken: 'your_access_token',
        'Content-Type': 'application/json'
      }

      let bodyContent = JSON.stringify({
        features: selectedvarsLda,
        target: selectedTargetsLda
      })

      let response = await axios.post(
        'http://localhost:5000/LDA',
        bodyContent,
        {
          headers: headersList
        }
      )

      let data = response.data
      // setData(data["pca_result"]);
      // setVariance(data["explained_variance_ratio"]);
      // setLoading(data["loadings"])
      // console.log(data);
      setDataLda(data)
      // setDataLda(data["Presence Condor sur RS"])
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const submitTsne = async () => {
    try {
      let headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        accestoken: 'your_access_token',
        'Content-Type': 'application/json'
      }

      let bodyContent = JSON.stringify({
        columns: selectedvarsTSNE,
      })

      let response = await axios.post(
        'http://localhost:5000/TSNE',
        bodyContent,
        {
          headers: headersList
        }
      )

      let data = response.data
      // setData(data["pca_result"]);
      // setVariance(data["explained_variance_ratio"]);
      // setLoading(data["loadings"])
      // console.log(data);
      setDataTsne(data)
      // setDataLda(data["Presence Condor sur RS"])
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <main className=' py-20 px-20 lg:px-[180px]'>
      <Title>PCA</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      {/* Main section */}
      <Card className='mt-6 '>
        <div className='max-w-sm mx-auto space-y-6 mb-6 '>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form className=' flex items-end '>
                  <FormikControl
                    control='select'
                    label='Variables à sélectionner'
                    name='isDonator'
                    options={vars}
                    onChange={e => {
                      setSelectedvars([...selectedvars, e.target.value])
                      formik.handleChange(e)
                    }}
                  />
                  <Button
                    onClick={() => {
                      submitPca()
                    }}
                    className=' ml-2 my-0.5 py-3'
                  >
                    Submit{' '}
                  </Button>
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
              )
            }}
          </Formik>
        </div>{' '}
        <Card className='bg-gray2 w-full mb-8'>
          <ul className='flex flex-wrap gap-4'>
            {selectedvars.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={e => {
                  console.log(e.target.innerText)

                  setSelectedvars(
                    selectedvars.filter(item => {
                      item !== e.target.innerText
                    })
                  )
                }}
              >
                {variable} <Icon size='xs' icon={XIcon} color='white' />{' '}
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
      <Card className='mt-6'>
        <ScatterChartExample chartdata={data} />
      </Card>

      {/* KPI section */}
      <Grid numItemsMd={2} className='mt-6 gap-6'>
        <Card className='my-auto'>
          {/* Placeholder to set height */}
          <Question chartdata={variance} />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <DynamicBiplotComponent
            pcaResult={data}
            loadings={loadings}
            variableLabels={selectedvars}
          />
        </Card>
      </Grid>

      {/* ***************************************LDA********************************************* */}
      <Title>LDA</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Card className='mt-6 '>
        {/************************************* the input for the lda features ********************************************************** */}
        <div className='max-w-sm mx-auto space-y-6 mb-6 '>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form className=' flex items-end '>
                  <FormikControl
                    control='select'
                    label='Variables à sélectionner pour  features '
                    name='isDonator'
                    options={vars}
                    onChange={e => {
                      setSelectedvarsLda([...selectedvarsLda, e.target.value])
                      formik.handleChange(e)
                    }}
                  />
                  {/* <Button onClick={()=>{submitPca()}} className=" ml-2 my-0.5 py-3">Submit </Button> */}
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
              )
            }}
          </Formik>
        </div>{' '}
        <Card className='bg-gray2 w-full mb-8'>
          <ul className='flex flex-wrap gap-4'>
            {selectedvarsLda.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={e => {
                  console.log(e.target.innerText)

                  setSelectedvarsLda(
                    selectedvarsLda.filter(item => {
                      item !== e.target.innerText
                    })
                  )
                }}
              >
                {variable} <Icon size='xs' icon={XIcon} color='white' />{' '}
              </li>
            ))}
          </ul>
        </Card>
        {/************************************* the input for the lda target ********************************************************** */}
        <div className='max-w-sm mx-auto space-y-6 mb-6 '>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form className=' flex items-end '>
                  <FormikControl
                    control='select'
                    label='Variables à sélectionner pour target'
                    name='isDonator'
                    options={vars}
                    onChange={e => {
                      setSelectedTargetsLda([
                        ...selectedTargetsLda,
                        e.target.value
                      ])
                      formik.handleChange(e)
                    }}
                  />
                  <Button
                    onClick={() => {
                      submitLda()
                    }}
                    className=' ml-2 my-0.5 py-3'
                  >
                    Submit{' '}
                  </Button>
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
              )
            }}
          </Formik>
        </div>{' '}
        <Card className='bg-gray2 w-full mb-8'>
          <ul className='flex flex-wrap gap-4'>
            {selectedTargetsLda.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={e => {
                  console.log(e.target.innerText)

                  setSelectedvarsLda(
                    selectedTargetsLda.filter(item => {
                      item !== e.target.innerText
                    })
                  )
                }}
              >
                {variable} <Icon size='xs' icon={XIcon} color='white' />{' '}
              </li>
            ))}
          </ul>
        </Card>
        {/************************************* the end of the second input  ********************************************************** */}
        {/* {selectedTargetsLda.map((value,index)=>(
          {(Object.keys(dataLda[`${value}`][0]).length) >= 2 &&
           (<Card key={index} className="mt-6">
            <ScatterLda chartdata={dataLda[`${value}`]} />
           </Card>)
          }
        ))} */}
        {/* {selectedTargetsLda.map(
          (value, index) =>
           
             ( <Card key={index} className='mt-6'>
                <ScatterLda chartdata={dataLda[value]} />
               </Card>)
            
         )}  */}
        {/* {selectedTargetsLda.map((target, index) => {
          const targetData = dataLda[target]

          // Check if the first object in targetData has more than 2 elements (keys)
          const firstObjectKeysCount = Object.keys(targetData[0]).length
          const shouldRender = firstObjectKeysCount >= 2

          if (shouldRender) {
            return (
              <Card key={index} className='mt-6'>
                <ScatterLda chartdata={targetData} />
              </Card>
            )
          }
          return null
        })} */}
        {selectedTargetsLda.map((target, index) => {
          const targetData = dataLda[target]

          // Check if targetData is defined and has at least one object
          if (targetData && targetData.length > 0) {
            const firstObjectKeysCount = Object.keys(targetData[0]).length
            const shouldRender = firstObjectKeysCount >= 2

            if (shouldRender) {
              return (
                <Card className='mt-6'>
                  <ScatterLda chartdata={targetData} targetName={target} />
                  {/* <ChartTest chartdata={targetData}></ChartTest>  */}
                </Card>
              )
            }
          }

          return null
        })}
      </Card>

      <Title>TSNE</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Card className='mt-6 '>
        {/************************************* the input for the TSNE features ********************************************************** */}
        <div className='max-w-sm mx-auto space-y-6 mb-6 '>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            {formik => {
              return (
                <Form className=' flex items-end '>
                  <FormikControl
                    control='select'
                    label='Variables à sélectionner pour target'
                    name='isDonator'
                    options={vars}
                    onChange={e => {
                      setselectedVarsTSNE([...selectedvarsTSNE, e.target.value])
                      formik.handleChange(e)
                    }}
                  />
                  <Button
                    onClick={() => {
                      submitTsne()
                    }}
                    className=' ml-2 my-0.5 py-3'
                  >
                    Submit{' '}
                  </Button>
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
              )
            }}
          </Formik>
        </div>{' '}
        <Card className='bg-gray2 w-full mb-8'>
          <ul className='flex flex-wrap gap-4'>
            {selectedvarsTSNE.map((variable, index) => (
              <li
                key={index}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-white bg-bleu1 rounded-xl w-fit pl-4 pr-2 py-2 mr-2`}
                onClick={e => {
                  console.log(e.target.innerText)

                  selectedvarsTSNE(
                    selectedTargetsLda.filter(item => {
                      item !== e.target.innerText
                    })
                  )
                }}
              >
                {variable} <Icon size='xs' icon={XIcon} color='white' />{' '}
              </li>
            ))}
          </ul>
        </Card>
        {/************************************* the end of the second input  ********************************************************** */}
        <Card className='mt-6'>
        <ScatterChartExample chartdata={dataTsne} />
          {/* <ChartTest chartdata={targetData}></ChartTest>  */}
        </Card>
      </Card>
    </main>
  )
}
