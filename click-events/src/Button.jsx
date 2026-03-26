// NOTES

// 1. Function Declarations vs. Expressions
// Declarations (function name() {}) are hoisted. You can call them before they appear in the code.

// Expressions (const name = () => {}) are not hoisted. They enforce a "define before use" structure, which is generally cleaner and prevents bugs in large files.

// Named Expressions (e.g., const x = function y() {}) help with debugging because the name y shows up in error stack traces.

// 2. Event Handling in React
// Reference vs. Execution: Passing a function name (onClick={handleClick}) gives React a reference to run later. Adding parentheses (onClick={handleClick()}) executes it immediately during render.

// The "Result" Trap: If you call a function directly in onClick, the button's click handler becomes whatever that function returns (usually undefined), causing the button to do nothing when clicked.

// 3. Passing Arguments
// The Wrapper Pattern: To pass a parameter (like "Beluga") without triggering the function immediately, you must wrap it in an anonymous arrow function: onClick={() => handleClick("Beluga")}.

// Execution Flow: React calls the outer arrow function when the click happens; that outer function then executes your inner function with the specific argument.

function Button(){

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    // Problem: When we add parantheses after function it is invoke right away, so in this case the function run without the button being clicked
    // return(<button onClick={handleClick2("Beluga")}>Click Me👆🏻</button>); 
    
    // Solution: we set the callback function that calls the function
    // return(<button onClick={() => handleClick2("Beluga")}>Click Me👆🏻</button>);


    // EXAMPLE 2: With Conditions
    //     let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`Ouch! ${name} you clicked me ${count} times`)
    //     }
    //     else{
    //         console.log(`${name} Stop Clicking ME!`)
    //     } 
    // };

    // return(<button onClick={()=>handleClick("Beluga")}>Click Me👆🏻</button>);


    // EXAMPLE 3 Using Event Object
    const handleClick = (e) => e.target.textContent = "OUCH!";
    return(<button onClick={(e)=>handleClick(e)}>Click Me👆🏻</button>);
}
export default Button