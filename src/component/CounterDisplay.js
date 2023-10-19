import './CounterDisplay.css';
import { useEffect } from 'react';


const CounterDisplay = ({counter}) => {
/***
 * 
    useEffect(()=>{
        console.log("CounterDisplay > counter:"+ counter)
        //didupdate
    },[counter])
 */
    return(
        <div className="counter-display">
            {counter}
        </div>
    )
}

export default CounterDisplay;