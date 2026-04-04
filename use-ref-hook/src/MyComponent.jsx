// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             when you want a component to "remember" some information,
//             but you don't want that information to trigger new renders.

//             1. Accessing/Interacting with DOM elements
//             2. Handling Focus, Animations, and Transitions
//             3. Managing Timers and Intervals


import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    // let [number, setNumber] = useState(0); //everytime the number change the element rerenders

    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const inputref3 = useRef(null);
    const ref = useRef(0);

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick1(){
        // setNumber(prevNumber => prevNumber + 1);
        ref.current = ref.current + 1;
        console.log(ref.current);

        inputref1.current.focus();
        inputref1.current.style.backgroundColor = "yellow";
    }
    function handleClick2(){
        // setNumber(prevNumber => prevNumber + 1);
        ref.current = ref.current + 1;
        console.log(ref.current);

        inputref2.current.focus();
        inputref2.current.style.backgroundColor = "yellow";
    }
    function handleClick3(){
        // setNumber(prevNumber => prevNumber + 1);
        ref.current = ref.current + 1;
        console.log(ref.current);

        inputref3.current.focus();
        inputref3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick1}>Click Me 1</button>
            <input ref={inputref1} /> {/* ref is a special attribute used to create references to elements */}
            
            <button onClick={handleClick2}>Click Me 2</button>
            <input ref={inputref2} /> 
            
            <button onClick={handleClick3}>Click Me 3</button>
            <input ref={inputref3} />  
        </div>
    );

}

export default MyComponent;
 