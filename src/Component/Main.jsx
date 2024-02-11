import React from "react";
import cityData from "../Data/Cities.json";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Main = () => {
  const { cities } = cityData;

  return (
    <div className="container">
      {cities.map((city, index) => (
        <div key={index} className={`item item-${index + 1}`}>
          <Link to={`/chart/${city.name}`}>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={`Temperature: ${city.temperature}°C, Population: ${city.population}`}>
              <h1 className=" font-medium">{city.name}</h1>
            </a>
          </Link>
        </div>
      ))}
      <Tooltip id="my-tooltip" />
    </div>
  ); 
};

export default Main;
