import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {
  const [userIP, setUserIP] = useState();
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const fetchIP = async () => {
      await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
        )
        .then((response) => {
          // console.log(response.data)
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
    // console.log(userIP)
    console.log(userLocation)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Your location is: {userIP}
        </p>
        <p>
        {userLocation ? (
          <>
            <h3>Your location is: {userLocation.city}</h3>
            <h3>Your region is: {userLocation.region}</h3>
            <h3>Your country is: {userLocation.country}</h3>
            <h3>Your latitude is: {userLocation.lat}</h3>
            <h3>Your longitude is: {userLocation.lng}</h3>
          </>
        ) : (
          "Loading..."
        )}
        </p>
      </header>
    </div>
  );
}

export default App;
