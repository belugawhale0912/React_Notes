import React, {useState} from "react"; 

function MyComponent() {

    const [foods, setFoods] = useState(["Grape", "HoneyDew", "Watermelon"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(prevFood=>[...prevFood, newFood]); //set foods to a new array, containg all the elements from the original array by using spread operator and the new food we passed in

    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index)) //use filter function to remove the selected food
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={()=>handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyComponent