import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import MyMap from './MyMap';
import CountryInfo from './CountryInfo';

function App() {
  const [userIP, setUserIP] = useState();
  const [userLocation, setUserLocation] = useState({
    city: "Rosario",
    country: "AR",
    geonameId: 3838583,
    lat: -32.94682,
    lng: -60.63932,
    postalCode: "",
    region: "Santa Fe Province",
    timezone: "-03:00"
  });

  useEffect(() => {
    const fetchIP = async () => {
      await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
        )
        .then((response) => {
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        Your IP is: {userIP}
        </p>
        <p>
        {userLocation ? (
          <>
          <ol>
            <li>Your location is: {userLocation.city}</li>
            <li>Your region is: {userLocation.region}</li>
            <li>Your country is: {userLocation.country}</li>
            <li>Your latitude is: {userLocation.lat}</li>
            <li>Your longitude is: {userLocation.lng}</li>
          </ol>
          </>
        ) : (
          "Loading..."
        )}
        </p>

        <MyMap props={userLocation}/>
        <CountryInfo  userCountry={userLocation.country}/>
      </header>
    </div>
  );
}

export default App;
