// Updater function = A function passed as an argument to setState()
//                    Usually: setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with mutiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);

    function increment(){

        setCount( prevCount => prevCount + 1);
        setCount( prevCount => prevCount + 1);
        setCount( prevCount => prevCount + 1);

    }

    function decrement(){
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent

