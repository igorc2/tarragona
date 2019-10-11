import React, {useEffect, useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


const columnDefs = [
  { headerName: "Name", field: "name", sortable: true, filter: true  },
  { headerName: "Region", field: "region", sortable: true, filter: true  },
  { headerName: "Capital", field: "capital", sortable: true, filter: true },
  { headerName: "Area(Km²)", field: "area", sortable: true, filter: true },
  { headerName: "Native Name", field: "nativeName", sortable: true, filter: true },
  { headerName: "Language", field: "languages[0].name", sortable: true, filter: true },
];

const Countries = (props) => {
  
  const [ rowData, setRowData ] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2')
      .then(result => result.json())
      .then(rowData => { console.log(rowData); setRowData(rowData)})
  }, []);

  return (
    <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '100%' }} 
      >
      <AgGridReact
        animateRows={true}
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
    </div>
  );
}

export default Countries;
