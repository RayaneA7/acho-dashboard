// pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Plotly.js chart component
const MyChart = dynamic(() => import('../components/Qsts/Chart.jsx'), { ssr: false });

// Create a custom chart component

// Render the custom chart component
export default function Test() {
  return <MyChart />;
}
