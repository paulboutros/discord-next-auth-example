
//A G layou texample

//import '../styles/globals.css';
import Head from 'next/head';
import clientPromise from '../lib/mongodb';

import { useState, useRef, useEffect, useMemo, useCallback} from 'react'

 
//import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS
//import { constrainedMemory } from 'process';

//import { ChartLayerScore } from './ChartLayerScore'; // the AG Grid React Component



 
export default function HomeSS({} ) {

  console.log(  "   export default function Home "    );
  const short =75;
  //loading  2 css class pass
  const cellClassRules = {
    'cell-pass': params => params.value > 3,
    'cell-fail': params => params.value <= 3
  };

  // AG GRDI CODE
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([

    //{field: 'ID', pinned: "left" },  //  discord id
    {field: 'wallet'  , pinned: "left" },
    {field: 'discord' , pinned: "left" },
    {field: 'date'},

    {field: 'scoreShare',  cellClass: "cell-sub-result" },
    {field: 'totalScore' , cellClass: "cell-sub-result" },
    
 
    
    {field: 'allLayerScore'   },
      
    {field: 'heScore' , cellClass: "cell-sub-result" }, //  cellClassRules: cellClassRules
    {field: 'he01' ,width: short },{field: 'he02',width: short },{field: 'he03',width: short },{field: 'he04',width: short },{field: 'he05',width: short },{field: 'he06',width: short },{field: 'he07',width: short,width: short },{field: 'he08' ,width: short},{field: 'he09',width: short },{field: 'he10',width: short },
   
    {field: 'shScore' , cellClass: "cell-sub-result" },
    {field: 'sh01',width: short },{field: 'sh02',width: short },{field: 'sh03',width: short },{field: 'sh04',width: short },{field: 'sh05' ,width: short},{field: 'sh06',width: short },{field: 'sh07',width: short },{field: 'sh08',width: short },{field: 'sh09',width: short },{field: 'sh10',width: short },
    
    {field: 'weScore', cellClass: "cell-sub-result"  },
    {field: 'we01',width: short },{field: 'we02' ,width: short},{field: 'we03',width: short },{field: 'we04',width: short ,width: short},{field: 'we05',width: short },{field: 'we06' ,width: short},{field: 'we07',width: short },{field: 'we08' ,width: short},{field: 'we09' ,width: short},{field: 'we10',width: short },
    
    {field: 'boScore', cellClass: "cell-sub-result"  }, 
    {field: 'bo01',width: short },{field: 'bo02',width: short },{field: 'bo03' ,width: short},{field: 'bo04',width: short },{field: 'bo05',width: short },{field: 'bo06',width: short },{field: 'bo07',width: short },{field: 'bo08',width: short },{field: 'bo09',width: short },{field: 'bo10',width: short } ,

    {field: 'invite_use'},{field: 'invite_code' }
  ]);

  /* @type {import('ag-grid-community').GridOptions} */
const gridOptions = {
  defaultColDef: {
    resizable: true,
  },
  columnDefs: columnDefs,
  rowData: null,
};




  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(  () =>({
    sortable : true, 
    filter : true//,
   //domLayout: 'autoWidth', // Automatically adjust the column widths
   }) , []);
    
   

  useEffect(()=>{
    (async ()=> {


     const result  = await fetch("/api/list");
     const resultsJson = await result.json();
     setRestaurants(resultsJson);
     setRowData(resultsJson );
 


     })();

 }, []);
   
 

  // Example of consuming Grid Event
  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);
 

  // Example using Grid's API
  const buttonListener = useCallback( e => {
    gridRef.current.api.deselectAll();
  }, []);
  // AGI GRID STOP
  
    const [ restaurants, setRestaurants ]= useState([]);

    


  return (
 
    <div className="container">
      

       <main>
         
         <div>
      

      {/* <div className="header"> </div> */}
        
          
      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-balham" style={{width:  '100%', height: 400}}>
        
      <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API

          rowData={rowData} // Row Data for Rows
          pagination ={true}
        // columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          gridOptions={gridOptions}
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows

          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
      />
      
       </div>
        

          </div>
 
         
      </main>
 
    </div>
  );
}


export async function getServerSideProps() {


 console.log(  "getServerSideProps "    );

  try {
    await clientPromise;
    

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
