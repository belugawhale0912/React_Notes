import React, {useState} from "react" //import useState hook from react

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF"); //define useState variable

    function handleColorChange(event){ //function to react to user color input
        setColor(event.target.value); //extract the value from user input event and set useState variable value
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>

            <div className="color-display" style={{backgroundColor: color}}> {/*css properties need to be enclose within a JavaScript object, refer to #1 */}
                <p>Selected Color: {color}</p>
            </div>

            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
    );

}

export default ColorPicker

// Notes

// #1
// In regular HTML, style accepts a plain string
// But in React, you're writing JSX, which is JavaScript — not HTML. 
// So the style attribute expects a JavaScript object instead of a string, because JSX compiles down to React.
// createElement() calls under the hood.