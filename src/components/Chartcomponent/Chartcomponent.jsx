import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './chart.css';
Chart.register(...registerables);
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

//ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chartcomponent = ({ data: { confirmed, deaths}, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length
    ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: "rgba(75,192,192,1)",
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          fill: true,
        }]
      }} 
    />) : null
  );

  const barChart = (
    confirmed ?
    (
      <Bar
        data={{
          labels: ['Infected', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(75,192,192,1)',
              'rgba(255, 0, 0, 1)'
            ],
            data: [confirmed.value, deaths.value]
          }]
        }}
        options={{
          legend: {display: 'false'},
          title: {display: 'true', text: `Current state in ${country}`}
        }}
      />
    ) : null
  )

  return (
    <div className="chart-container">
        {country ? barChart : lineChart}
    </div>
  )
}

export default Chartcomponent;