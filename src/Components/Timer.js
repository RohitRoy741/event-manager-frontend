import React, { useState, useEffect } from "react";
function calculateSecDiff(eventDate, currentDate) {
    return Math.floor(((eventDate.getTime() - currentDate.getTime())/1000)%60);
}
function calculateMinDiff(eventDate, currentDate) {
    return Math.floor(((eventDate.getTime() - currentDate.getTime())/60000)%60);
}
function calculateHourDiff(eventDate, currentDate) {
    return Math.floor(((eventDate - currentDate)/3600000));
}

function Timer(props) {
    let date = new Date(props.eventDate);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [secDiff, setSecDiff] = useState(calculateSecDiff(date, currentDate));
    const [minDiff, setMinDiff] = useState(calculateMinDiff(date, currentDate));
    const [hourDiff, setHourDiff] = useState(calculateHourDiff(date, currentDate));
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [currentDate]);
    useEffect(() => {
        setSecDiff(calculateSecDiff(date, currentDate));
    }, [currentDate, secDiff]);
    useEffect(() => {
        setMinDiff(calculateMinDiff(date, currentDate));
    }, [currentDate, minDiff]);
    useEffect(() => {
        setHourDiff(calculateHourDiff(date, currentDate));
    }, [currentDate, hourDiff]);
    return (
        <h3 className="timer">Starts In: {hourDiff} Hours, {minDiff} minutes and {secDiff} seconds</h3>
    )    
}
export default Timer;