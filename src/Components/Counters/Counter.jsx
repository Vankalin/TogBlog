import React from 'react';
import './style.css';
import { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)
    //-------------------------------------------
        function ShowCount() { console.log(count) }
        function Increment() {
            setCount(count + 1)
            ShowCount()
        }

        function Decrement() {
            setCount(count - 1)
            ShowCount()
        }

        function Pow() {
            setCount(count * count)
            ShowCount()
        }

        function Fido() {
            setCount(count + count + 1)
            ShowCount()
        }
        function Zero() {
            setCount(0)
            ShowCount()
        }
    //-------------------------------------------
    return(
        <div className='counter'>
            <div className="text">
                <h1>{count}</h1>
            </div>
            <div className="controls">
                <button onClick = { Increment } > Increment </button>  
                <button onClick = { Decrement } > Decrement </button>  
                <button onClick = { Pow } > Pow </button>  
                <button onClick = { Fido } > Fibo </button> 
                <button onClick = { Zero } > Zero </button> 
            </div>


        </div>
        
        
    )
  

}
export default Counter;