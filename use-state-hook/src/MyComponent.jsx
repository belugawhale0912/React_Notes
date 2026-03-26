import React, {useState} from "react"

function MyComponent(){

   
    const [name, setName] = useState("Guest"); //the usestate function returns a variable and a setter function
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    // use deconstrut to store the returned values

    

    // Problem: The variable is changed in the console but not in React, 
    //          The virtual DOM does not get the updated variable
    // const updateName = () => {
    //     name = "Spongebob";
    //     console.log(name);
    // }

    // Solution: Use the setter from useState hook
    const updateName = () => {
        setName("Spongebob")
    }
    // Why this work: When we use the setter function of a stateful variable
    //                It will trigger a render of the virtual DOM, normal variable doesn't

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle</button>
        </div>
    );
}

export default MyComponent