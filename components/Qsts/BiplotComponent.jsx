// <<<<<<< HEAD
// // import React from 'react';
// // import Plot from 'react-plotly.js';

// // const BiplotComponent = ({ pcaResult, loadings, variableLabels }) => {
// //   const scatterData = {
// //     type: 'scatter',
// //     mode: 'markers',
// //     x: pcaResult.map(point => point[0]),
// //     y: pcaResult.map(point => point[1]),
// //     marker: {
// //       color: 'blue',
// //       size: 8,
// //     },
// //   };

// //   const lines = loadings.map((loading, index) => ({
// //     type: 'scatter',
// //     x: [0, loading[0]],
// //     y: [0, loading[1]],
// //     mode: 'lines+text',
// //     line: { color: 'red' },
// //     text: [variableLabels[index], ''],
// //     textposition: 'top center',
// //     hoverinfo: 'none',
// //   }));

// //   const layout = {
// //     title: 'PCA Biplot with Lines',
// //     xaxis: { title: 'Principal Component 1' },
// //     yaxis: { title: 'Principal Component 2' },
// //     showlegend: false,
// //   };

// //   return <Plot data={[scatterData, ...lines]} layout={layout} style={{maxHeight:"100%",maxWidth:"100%",width:"auto",height:"auto"}} />;
// // };

// // export default BiplotComponent;


// import React from 'react';
// import Plot from 'react-plotly.js';

// const BiplotComponent = ({ pcaResult, loadings, variableLabels }) => {
//   const scatterData = {
//     type: 'scatter',
//     mode: 'markers',
//     x: pcaResult.map(point => point[0]),
//     y: pcaResult.map(point => point[1]),
//     marker: {
//       color: 'blue',
// =======
import { Card, Title } from "@tremor/react";
import React from "react";
import Plot from "react-plotly.js";

const BiplotComponent = ({ pcaResult, loadings, variableLabels }) => {
  const scatterData = {
    type: "scatter",
    mode: "markers",
    x: pcaResult.map((point) => point[0]),
    y: pcaResult.map((point) => point[1]),
    marker: {
      color: "blue",
// >>>>>>> cb4c510536e6c7375feffc949330146ac48d269c
      size: 8,
    },
  };

  const lines = loadings.map((loading, index) => ({
// <<<<<<< HEAD
//     type: 'scatter',
//     x: [0, loading[0]],
//     y: [0, loading[1]],
//     mode: 'lines',
//     line: { color: 'red' },
//     hoverinfo: 'none',
//   }));

//   const annotations = loadings.map((loading, index) => ({
//     x: loading[0],
//     y: loading[1],
//     xref: 'x',
//     yref: 'y',
//     text: variableLabels[index],
//     showarrow: false,
    
//   }));

//   const layout = {
//     title: 'PCA Biplot with Lines',
//     xaxis: { title: 'Principal Component 1' },
//     yaxis: { title: 'Principal Component 2' },
//     showlegend: false,
//     annotations: [...annotations],
//   };

//   return <Plot data={[scatterData, ...lines]} layout={layout} style={{maxHeight:"100%",maxWidth:"100%",width:"auto",height:"auto"}}/>;
// };

// export default BiplotComponent;
// =======
    type: "scatter",
    x: [0, loading[0]],
    y: [0, loading[1]],
    mode: "lines+text",
    line: { color: "red" },
    text: [variableLabels[index], ""],
    textposition: "top center",
    hoverinfo: "none",
  }));

  const layout = {
    title: "PCA Biplot with Lines",
    xaxis: { title: "Principal Component 1" },
    yaxis: { title: "Principal Component 2" },
    showlegend: false,
  };

  return (
    <Card className="bg-gray2 w-full mb-8">
     <Plot
        data={[scatterData, ...lines]}
        layout={layout}
        className="max-w-md"
      />
    </Card>
  )
}

export default BiplotComponent;
// >>>>>>> cb4c510536e6c7375feffc949330146ac48d269c
