import React, {useState} from "react";

function MyComponent(){
    
    const [car, setCar] = useState({year: 1992, 
                                    make: "BMW", 
                                    model: "E36"});

    function handleYearChange(e){
        setCar(prevCar => ({...prevCar, year: e.target.value})); //when using updater function, wrap javascript object with paranthesis
    }

    function handleMakeChange(e){
        setCar(prevCar => ({...prevCar, make: e.target.value}));
    }

    function handleModelChange(e){
        setCar(prevCar => ({...prevCar, model: e.target.value}));
    }

    return(
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/>

        </div>
    )
}

export default MyComponent