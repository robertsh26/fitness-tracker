import React, { useState} from "react";

function WorkoutForm({ addWorout }) {
    const [ title, setTitle ] = useState("");
    const [ duration, setDuration ] = useState("");
    const [ calories, setCalories ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWorkout = {
            title,
            duration,
            calories,
        };

        addWorout(newWorkout);

        setTitle("");
        setDuration("");
        setCalories("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Workout Title</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>
            
        </form>
    )
}