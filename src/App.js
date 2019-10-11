import React from 'react';
import './App.css';
import ExpenseCard from './components/entries/ExpenseCard';
import Paperbase from './components/homepage/Paperbase';


function App() {
  return (
    <Paperbase />
    // <div className="App">
    //   <header className="App-header">
    //    <ExpenseCard name='Opa' value='400' category='food'/>
    //   </header>
    // </div>
  );
}

export default App;
