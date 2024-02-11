import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useParams } from 'react-router-dom';
import cityData from "../Data/Cities.json";

const LineChart = () => {
  const lineChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const { cityName } = useParams();
  const selectedCity = cityData.cities.find((city) => city.name === cityName);

  useEffect(() => {
    if (lineChartRef.current && selectedCity) {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }

      const lineCtx = lineChartRef.current.getContext('2d');
      const { fund_performance } = selectedCity;
      const years = Object.keys(fund_performance);
      const values = Object.values(fund_performance);

      lineChartInstance.current = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Fund Performance',
              data: values,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointRadius: 5,
              pointHoverRadius: 7,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Year',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Performance',
              },
            },
          },
        },
      });
    }

    return () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }
    };
  }, [selectedCity]);

  return (
    <div>
      <h2 className='text-center mt-2 uppercase font-semibold'>{selectedCity ? `${selectedCity.name} Fund Performance Chart` : 'No City Selected'}</h2>
      <canvas ref={lineChartRef} className='w-80 h-52'></canvas>
    </div>
  );
}

export default LineChart;
