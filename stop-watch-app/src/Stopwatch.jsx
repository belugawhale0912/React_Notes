import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false); //status of the stopwatch: running = true, stop = false
    const [elapsedTime, setElapsedTime] = useState(0); ////total milliseconds elapsed, does not reset on pause so the stopwatch can resume where it left off
    const intervalIdRef = useRef(null); //stores the interval ID so we can cancel the interval later
    const startTimeRef = useRef(0); //stores the adjusted start time

    // The engine of the whole stopwatch program, trigers the side effect when isRunning Changes
    // Since is running is false by default, it will run whenever user click start
    // It fires up a setInterval that runs every 10ms. Each 10ms it does:
    //   - Date.now() - startTimeRef.current which gives us how much time has elapsed and update the state to triggers re-render
    // The return() => {} is the cleanup function that runs whenver the useEffect re-runs and the component unmounts so the interval doesnt leak
    useEffect(() => { 

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);

            return () => {
                clearInterval(intervalIdRef.current);
            }

        }

    }, [isRunning]);

    function start(){ //sets isRunning to true to trigger the useEffect
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime; //record the current time minus the elapsed time
    }

    function stop(){ //sets isRunning to false to trigger the useEffect cleanup to kill the interval
        setIsRunning(false);
    }

    function reset(){ //sets both elapsedTime and isRunning back to default, resetting the program
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){ //format raw values into readable format for display

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime %1000) /10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>
    );

}

export default Stopwatch



/*
 * Stopwatch Logic Summary:
 * - isRunning triggers useEffect to start/clear a 10ms interval
 * - Each tick calculates elapsedTime as Date.now() - startTimeRef
 * - On resume, startTimeRef is set to Date.now() - elapsedTime, reverse-engineering
 *   the original reference point so the display continues from where it paused
 */