import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from "mui-datatables";


const styles = theme => ({
  deskCard: {
    
  },
});

const columns = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
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


const Catalog = (props) => {
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

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <MUIDataTable
          title={"Employee List"}
          data={customers}
          responsive={'scrollMaxHeight'}
          columns={columns}
          options={options}
        />    
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Catalog);
