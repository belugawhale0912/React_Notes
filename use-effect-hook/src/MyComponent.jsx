//  useEffect() = React Hook that tells React to do some code when:
//  The component re-renders
//  This component mounts
//  The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-render
// 1. useEffect(() => {}, [])       // Runs only on mount
// 1. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count}` //runs everytime this component rerender
    // });

    // useEffect(() => {
    //     document.title = `Counter Program` //runs only once when the component mounts
    // }, []);

    useEffect(() => {
        document.title = `Count: ${count} ${color}` //runs when the component mount and everytime the dependency value changes
    }, [count, color]);

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }

    function changeColor(){
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )

}

export default MyComponent