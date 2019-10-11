import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  deskCard: {
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    width: 284,
    height: 170,
    padding: '12px 16px',
    margin: 8,
    color: '#fff',
    backgroundColor: '#47b972',
    borderRadius: 3,
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.15)',
    transform: 'translateZ(0)',
    '&:hover': {
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.2)',
      transform: 'translateY(-2px) translateZ(0)',

    }
  },
  paper: {
    width: '100%',
    minHeight: 100,
    margin: 'auto',
    overflow: 'hidden',
    padding: 10,
  },
  content:{
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
});


const Desk = (props) => {

  const { addCustomer, classes, onChange, customer } = props;

  return (
    <React.Fragment>
      <div className={classes.deskCard}>
        opa
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(Desk);
