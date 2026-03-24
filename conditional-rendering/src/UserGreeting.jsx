
function UserGreeting(props){


    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;

    const loginPrompt = <h2 className="login-prompt">Please Login to cotinue</h2>;
    // Ternary Operator
    return(props.isLoggedIn ?  welcomeMessage : loginPrompt);


    // IF ELSE APPROACH
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Login to cotinue</h2>
    // }


}

export default UserGreeting