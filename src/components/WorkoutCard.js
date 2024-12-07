import React from "react";

function WorkoutCard({ title, duration, calories }) {
    return (
        <div style={{ border: "1px solid #ccc",  padding: "1rem", margin: "1rem"}}>
            <h3>{title}</h3>
            <p>Duration: {duration} minutes</p>
            <p>Calories Burned: {calories}</p>
        </div>
    );
};

export default WorkoutCard;