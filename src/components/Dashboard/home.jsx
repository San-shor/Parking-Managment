import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'

const Home=()=>{
  const [parkData, setParkData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [vehiclesParkedForTwoHours, setVehiclesParkedForTwoHours] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("parkData");
    const parsedData = JSON.parse(storedData);
    setParkData(parsedData);
    setFilterData(parsedData);
    filterDataByDate(parsedData);
  }, []);

  useEffect(() => {
    filterDataByDate(parkData);
    setVehiclesParkedForTwoHours(getVehiclesParkedForTwoHours());
  }, [filterData, parkData]);

  const filterDataByDate = (data) => {
    const filtered = data.filter((item) => item.entry_date === getCurrentDate());
    setFilterData(filtered);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const getVehiclesParkedForTwoHours = () => {
    const twoHourThreshold = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
    const now = new Date().getTime();

    const parkedForTwoHours = filterData.filter((item) => {
      const entryTime = new Date(item.entry_date).getTime();
      const parkedDuration = now - entryTime;
      return parkedDuration >= twoHourThreshold;
    });

    return parkedForTwoHours;
  };


    return(
      <div>
        <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/add-park" className="navbar-link">
              Add park
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/view-park-list" className="navbar-link">
              View Park List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      
      

    </div>
    
  );
};


export default Home;3