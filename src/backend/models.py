from pydantic import BaseModel, Field
from typing import List, Optional

class PhysicalAssessment(BaseModel):
    max_pushups: int = Field(..., description="Maximum number of push-ups in one set")
    max_pullups: int = Field(..., description="Maximum number of pull-ups in one set")
    max_squats: int = Field(..., description="Maximum number of bodyweight squats in one set")
    physical_limitations: bool = Field(default=False, description="Presence of physical limitations")
    limitations_description: Optional[str] = Field(None, description="Details of physical limitations")

class FitnessGoal(BaseModel):
    primary_goal: str = Field(..., description="Primary fitness goal")
    goal_description: Optional[str] = Field(None, description="Specific details about the fitness goal")

class TimeCommitment(BaseModel):
    workout_days: str = Field(..., description="Available workout days per week")
    session_duration: str = Field(..., description="Typical session duration in minutes")

class EquipmentEnvironment(BaseModel):
    workout_location: str = Field(..., description="Primary workout location")
    equipment: List[str] = Field(..., description="Available equipment")
    other_equipment: Optional[str] = Field(None, description="Additional equipment details")

class Exercise(BaseModel):
    name: str = Field(..., description="Name of the exercise")
    sets: int = Field(..., description="Number of sets")
    reps: int = Field(..., description="Number of repetitions or duration")
    progression: str = Field(..., description="Progression instructions")
    notes: Optional[str] = Field(None, description="Additional exercise notes")

class DailyWorkout(BaseModel):
    day: int = Field(..., description="Day identifier")
    focus: str = Field(..., description="Focus area of the workout")
    exercises: List[Exercise] = Field(..., description="List of exercises for the day")

class WorkoutOverview(BaseModel):
    goal: str = Field(..., description="Primary workout goal")
    session_frequency: str = Field(..., description="Frequency of sessions")
    session_duration_minutes: int = Field(..., description="Duration of each session")
    equipment_needed: str = Field(..., description="Required equipment")
    location: str = Field(..., description="Workout location")

class GeneratedWorkoutPlan(BaseModel):
    total_weeks: int = Field(..., description="Total weeks of the workout plan")
    workout_plans: List[DailyWorkout] = Field(..., description="Detailed workout plans")
    overview: WorkoutOverview = Field(..., description="Overview of the workout plan")
    notes: List[str] = Field(..., description="General notes and instructions")