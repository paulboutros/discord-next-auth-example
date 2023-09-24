//import './Dashboard.css';
import {useEffect, useState} from "react";
import axios from "axios";
import ChartWu from "./ChartWu";
import DataGrid1 from "./dataGrid1_component";
import ImageGrid from "./ImageGrid";



const DashBoard2 = () => {
   // const url = "https://charts.mongodb.com/charts-project_1-xoofl/public/dashboards/f93ab453-0d0a-4e87-87b1-c07f8a32507a";
   //const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState({});

  function getRandomInt(max) { return Math.floor(Math.random() * max); }
   
 
  
  /*
  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
      const randomCountryNumber = getRandomInt(res.data.countries.length);
      let randomCountry = res.data.countries[randomCountryNumber];
      setSelectedCountry(randomCountry);
      setFilterCountry({"country": randomCountry});
    })
  }, [])
 */


  useEffect(() => {
    if (selectedCountry !== "") {
      setFilterCountry({"country": selectedCountry});
    }
  }, [selectedCountry])

  return <div className="App">
    
    

    <div className="vertical-margin"></div>
      <div className="separator"></div>
      <div className="content">
        {/* Your page content goes here */}
      </div>


    <div className="ChartWu">
    
      <DataGrid1/>
   
      <ImageGrid/>
       
    </div>
    <div className="content">
     
      </div>
    <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

  </div>
};

export default DashBoard2;
