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
      size: 8,
    },
  };

  const lines = loadings.map((loading, index) => ({
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
