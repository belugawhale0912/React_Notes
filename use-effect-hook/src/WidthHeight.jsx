
import React, {useState, useEffect, useDebugValue} from "react";

function WidthHeight(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }

    }, [])

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);


    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Width: {height}px</p>
    </>);

}

export default WidthHeight