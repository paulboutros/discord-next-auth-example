 
//import './Dashboard.css';
import {useEffect, useState} from "react";
//import axios from "axios";
import ChartWu from "./ChartWu";
//import Home from "./dataGrid1_component";

let oneDimArray;
const imageObjects = [
  {tokenId: 1, name: 'he01' },
  {tokenId: 2, name: 'he02' },
  {tokenId: 3, name: 'he03' },
  {tokenId: 4, name: 'he04' },
  {tokenId: 5, name: 'he05' },
  {tokenId: 6, name: 'he06' },
  {tokenId: 7, name: 'he07' },
  {tokenId: 8, name: 'he08' },
  {tokenId: 9, name: 'he09' },
  {tokenId: 10, name: 'he10' }
    
   
     
];
const layerToInt = new Map([
  ["he01", 8],["he02", 7],["he03", 6],["he04", 5],["he05", 4],["he06", 3],["he07", 2],["he08", 1],
  
  ["he09", 10],["he10", 9]
]);

 
const ImageGrid = () => {
     

  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  
  useEffect(()=>{
    (async ()=> {
 
       const result  = await fetch("/api/findUsersWithNonZeroProperties");
     const resultsJson = await result.json();
      
     setRowData(resultsJson );
 
     })();

 }, []);
    


  return <div className="App">
    
    <div className="image-grid ">
  {rowData ? (
    rowData.map((obj, index) => (
      <div key={index} className="image-container">
        <img
          src={`/img/${  layerToInt.get(obj.layerName)  }.png`}
          alt={`Image ${  layerToInt.get(obj.layerName) }`}
          
          className="image rounded-border"
        />
        <div className="image-description-label rounded-border">
          <div>{`Name: ${obj.layerName}`}</div>
          <div>{`${obj.walletshort}`}</div>
          
        </div>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>

    
 

    <div className="vertical-margin"></div>
      <div className="separator"></div>
      <div className="content">
        {/* Your page content goes here */}
      </div>


    <div className="ChartWu">
    
      
       <ChartWu height={'600px'} width={'1000px'}   chartId={'c624e10c-8057-4ff5-8444-1bd5ae69b1bc'}/>
       
    </div>
      

  </div>
};

export default ImageGrid;




/*


import React from 'react';

const ImageGrid = () => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
  ];

  return (
    <div className="banniere"> 
      {images.map((image, index) => (
        <img
          key={index}
          src={require(`../public/img/${image}`).default}
          alt={`Image ${index + 1}`}
          className="image"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
*/