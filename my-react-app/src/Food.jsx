function Food(){
    // we can write Javascript normally without curly braces when outside the return statement
    const food1 = "Watermelon";
    const food2 = "Mango";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2}</li>
        </ul>
    );
}

export default Food