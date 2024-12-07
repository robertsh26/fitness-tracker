import React, { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm"

const Dashboard = () => {
    const [workouts, setWorkOuts ] = useState([])

    const addWorkout = (newWorkout) => {
        setWorkOuts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    }

    return (
        <div>
            <h1>Welcome to Track My Heart Fitness Tracker</h1>
            <WorkoutForm addWorkout={addWorkout} />{addWorkout}
            <div>
                {workouts.length > 0 ? (
                    workouts.map((workout, index) => (
                        <WorkoutCard
                        key ={index}
                        title={workout.title}
                        duration={workout.duration}
                        calories={workout.calories}
                        />
                    ))
                ) : (
                    <p>No workouts added yet</p>
                )}
            </div>
            <p>Track your workouts and progress here</p>
        </div>
    );
};

export default Dashboard;