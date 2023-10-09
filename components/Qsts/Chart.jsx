import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';

const MyChart = ({wordCloudDataMultivis}) => {

    
      var layout = {
       
        autosize: true,
        xaxis: {
          range: [ 0.75, 5.25 ]
        },
        yaxis: {
          range: [0, 8]
        },
        legend: {
          y: 0.5,
          yref: 'paper',
          font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: 'grey',
          }
        },
        title:`Nuages de mots similaires de ${Object.keys(wordCloudDataMultivis)[0]}`
      };
      
      console.log(wordCloudDataMultivis)
      console.log(Object.values(wordCloudDataMultivis)[0])
      console.log(Object.keys(wordCloudDataMultivis)[0])
    //   Plotly.newPlot('myDiv', data, layout);
      
  // Render the Plotly.js chart component

  
  return(
    <div>

      
      <div className='w-full'><Plot data={Object.values(wordCloudDataMultivis)[0]} layout={layout} /></div> 
    
 
  
    </div>
  )
};

export default MyChart;