
function Footer(){
    return(
        <footer>
            {/* use curly braces to include Javascript inside the return statement*/}
            <p>&copy; {new Date().getFullYear()} Beluga React</p>
        </footer>
    );
}

export default Footer