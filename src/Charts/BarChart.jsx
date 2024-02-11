import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import cityData from "../Data/Cities.json";

const BarChart = () => {
  const barChartRef = useRef(null);
  const barChartInstance = useRef(null);

  useEffect(() => {
    if (barChartRef.current) {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      const barCtx = barChartRef.current.getContext('2d');
      const labels = [];
      const data = [];

      cityData.cities.forEach((city) => {
        labels.push(city.name);
        data.push(city.volume);
      });

      barChartInstance.current = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Volume',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2 className='text-center mt-2 uppercase font-semibold'>Volume Chart for All Cities</h2>
      <canvas ref={barChartRef} className='w-80 h-52'></canvas>
    </div>
  );
}

export default BarChart;
