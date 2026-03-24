// conditional rendering = allows us to control what gets rendered
//                         in our application based on certain conditions
//                         show, hide, or change component

import UserGreeting from "./UserGreeting.jsx";


function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Beluga"/>
    </>
  );
  
}

export default App
