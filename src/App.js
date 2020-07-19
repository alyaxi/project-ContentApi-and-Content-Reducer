import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext';
// import Child from './Child'
function App() {
  return (
    <CounterContext.Provider value= {0}>
    <div>
    <Parent /> 
    </div>
    </CounterContext.Provider>
    );
}

export default App;
