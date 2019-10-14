import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from "mui-datatables";
import AddEntrie from './AddEntrie'


const columns = [
  {
   name: "name",
   label: "Name",
   options: {
    sort: true,
   }
  },
  {
   name: "company",
   label: "Company",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "city",
   label: "City",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: true,
    sort: false,
   }  
  },
 ];
 
 
 const options = {
   filterType: 'checkbox',
 };
 const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
 ];


const Customers = (props) => {
  const [customers, setCustomers] = useState([
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  ]);

  const [customer, setCustomer] = useState({
    name: "", company: "", city: "", state: ""
  })
  
  const addCustomer = () => {
    //customer = { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" };
    setCustomers([...customers, customer])
  }
    
  const handleChange =  e => {
    setCustomer({...customer, [e.target.id]: e.target.value})
    console.log(customer, 'e ')
  }
  
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <MUIDataTable
            title={"Employee List"}
            data={customers}
            responsive={'scrollMaxHeight'}
            columns={columns}
            options={options}
          />    
        </Grid>
        <Grid item xs={12}>
          <AddEntrie customer={customer} addCustomer={addCustomer} onChange={handleChange} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Customers;
