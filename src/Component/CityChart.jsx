import React from "react";
import { useParams } from "react-router-dom";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";

const CityChart = () => {
  const { cityName } = useParams();

  return (
    <div className="min-h-screen rounded-2xl ">
      <h1 className=" text-center mt-11 uppercase text-3xl font-semibold">Charts for {cityName}</h1> 
      <div className="flex justify-center items-center gap-4 px-16 pt-10">
        <div className="border">
          <div className="border rounded p-2">
            <PieChart />
          </div>
        </div>

        <div className="border ">
          <div className="border rounded p-2">
            <BarChart />
          </div>
        </div>

        <div className="">
          <div className="border rounded p-2">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityChart;
