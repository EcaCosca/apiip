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
          console.log(response.data)
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
    console.log(userIP)
    console.log(userLocation)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {userIP}
        </p>
        <p>
          {/* {userLocation.city} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
