import React, { useState } from 'react';
import  "./workoutDisplay.css"

const WorkoutPlanDisplay = ({ workoutPlan }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  
  if (!workoutPlan) return null;
  
  const { overview, workout_plans, total_weeks, notes } = workoutPlan;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Overview Section */}
      <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-xl p-8 text-neutral-50">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          Workout Plan Overview
          <span className="ml-3 text-sm bg-neutral-700/30 px-3 py-1 rounded-full">
            {total_weeks} Week Program
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-700/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-neutral-300">Goal</div>
            <div className="font-medium text-lg">{overview.goal}</div>
          </div>
          <div className="bg-neutral-700/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-neutral-300">Frequency</div>
            <div className="font-medium text-lg">{overview.session_frequency}</div>
          </div>
          <div className="bg-neutral-700/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-neutral-300">Duration</div>
            <div className="font-medium text-lg">{overview.session_duration_minutes} minutes</div>
          </div>
          <div className="bg-neutral-700/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-neutral-300">Location</div>
            <div className="font-medium text-lg">{overview.location}</div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="text-neutral-300 mb-3">Equipment Needed</div>
          <div className="flex flex-wrap gap-2">
            {overview.equipment_needed.split(',').map((equipment, index) => (
              <span 
                key={index}
                className="bg-neutral-700/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm"
              >
                {equipment.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Workouts */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-200">
        {/* Day Selection Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {workout_plans.map((workout) => (
            <button
              key={workout.day}
              onClick={() => setSelectedDay(workout.day)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                selectedDay === workout.day
                  ? 'bg-neutral-800 text-white shadow-lg'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              Day {workout.day}
            </button>
          ))}
        </div>

        {/* Selected Day's Workout */}
        {workout_plans
          .filter((workout) => workout.day === selectedDay)
          .map((workout) => (
            <div key={workout.day} className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-neutral-800 to-neutral-900 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md">
                {workout.focus}
              </div>

              <div className="grid gap-6">
                {workout.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-neutral-50 to-white"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-neutral-800">
                      {exercise.name}
                    </h3>
                    <div className="flex gap-4 mb-4">
                      <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg font-medium">
                        {exercise.sets} sets
                      </span>
                      <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg font-medium">
                        {exercise.reps} reps
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium text-neutral-700 mb-1">Progression</div>
                        <p className="text-neutral-600 bg-neutral-50 p-3 rounded-lg">{exercise.progression}</p>
                      </div>
                      {exercise.notes && (
                        <div>
                          <div className="font-medium text-neutral-700 mb-1">Notes</div>
                          <p className="text-neutral-600 bg-neutral-50 p-3 rounded-lg">{exercise.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* General Notes */}
      {notes.length > 0 && (
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg p-8 border border-neutral-200">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800">Important Notes</h2>
          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-neutral-100 text-neutral-600 rounded-full mr-3 mt-1">
                  {index + 1}
                </span>
                <span className="text-neutral-600">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanDisplay;