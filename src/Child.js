import React,{useContext} from 'react';
import counterContext from './CounterContext'

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    
    
    return(
        
        <div>
            <h1>This is First Child</h1>
            {/* <h2>My Name is {props.name}</h2> */}
            <h3>Counter Value is : {counterValue}</h3>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Add Value</button>

        </div>

    )
}
export default Child