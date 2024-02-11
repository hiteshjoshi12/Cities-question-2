import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useParams } from 'react-router-dom';
import cityData from "../Data/Cities.json";

const PieChart = () => {
  const pieChartRef = useRef(null);
  const pieChartInstance = useRef(null);
  const { cityName } = useParams();
  const selectedCity = cityData.cities.find((city) => city.name === cityName);

  useEffect(() => {
    if (pieChartRef.current && selectedCity) {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }

      const pieCtx = pieChartRef.current.getContext('2d');
      const { asset_allocation } = selectedCity;
      const labels = Object.keys(asset_allocation);
      const data = Object.values(asset_allocation);

      pieChartInstance.current = new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }

    return () => {
      if (pieChartInstance.current) {
        pieChartInstance.current.destroy();
      }
    };
  }, [selectedCity]);

  return (
    <div>
      <h2 className='text-center mt-2 uppercase font-semibold'>{selectedCity ? `${selectedCity.name} Asset Allocation Chart` : 'No City Selected'}</h2>
      <canvas ref={pieChartRef} className=' w-80 h-52' ></canvas>
    </div>
  );
}

export default PieChart;
