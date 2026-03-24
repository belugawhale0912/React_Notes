// STYLING REACT COMPONENTS WITH CSS
// 1. External - Good For Global Styles
// 2. Modules - Good For Individual Components 
// 3. Inline - Good For Small Components With Minimal Styling

import ExternalButton from "./Button.jsx"
import ModulesButton from "./Button/Button.jsx"
import InlineButton from "./InlineButton.jsx"

function App() {
    return(
        <>
            <ExternalButton></ExternalButton>
            <ModulesButton></ModulesButton>
            <InlineButton></InlineButton>
        </>
    );
}

export default App
