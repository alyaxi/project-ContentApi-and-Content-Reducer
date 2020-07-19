import React, { useReducer } from 'react';
import counterReducer from './CounterReducer'

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,0)
    console.log(state);
    

    return(
        <div>
             <h1>This is Second Child Reducer : {state} </h1>
            <button onClick = { ()=>{dispatch('INCREMENT')} }> Increase Value </button>
            <br/>
            <button onClick = { ()=>{dispatch('Decrement')} }> Decrease Value </button>
            <br/>
            <button onClick = { ()=>{dispatch('Reset') } }> Reset </button>
            
        </div>
    )
}

export default Child2