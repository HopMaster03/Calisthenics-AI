from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, Optional
from fastapi.middleware.cors import CORSMiddleware
from models import PhysicalAssessment, FitnessGoal, TimeCommitment, EquipmentEnvironment
from calisthenics_generator import WorkoutGenerator
from dotenv import load_dotenv
import os
# Load environment variables
load_dotenv()
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Pydantic models for the data incoming from the Form
class BasicMetrics(BaseModel):
    pushUps: int
    pullUps: int
    squats: int

class PhysicalLimitations(BaseModel):
    previousInjuries: bool
    jointProblems: bool
    mobilityRestrictions: bool
    limitationsDescription: str

class Equipment(BaseModel):
    pullUpBar: bool
    resistanceBands: bool
    gymnasticRings: bool
    parallettes: bool

class TrainingPreferences(BaseModel):
    primaryGoal: str
    weeklyWorkoutDays: str
    sessionDuration: str

class EquipmentLocation(BaseModel):
    workoutLocation: str
    availableEquipment: Equipment
    otherEquipment: str

class TrainingData(BaseModel):
    basicMetrics: BasicMetrics
    physicalLimitations: PhysicalLimitations
    trainingPreferences: TrainingPreferences
    equipmentLocation: EquipmentLocation

def transform_form_to_ai_format(form_data: TrainingData) -> tuple[PhysicalAssessment, FitnessGoal, TimeCommitment, EquipmentEnvironment]:
    # Transform Physical Assessment
    physical_assessment = PhysicalAssessment(
        max_pushups=form_data.basicMetrics.pushUps,
        max_pullups=form_data.basicMetrics.pullUps,
        max_squats=form_data.basicMetrics.squats,
        physical_limitations=any([
            form_data.physicalLimitations.previousInjuries,
            form_data.physicalLimitations.jointProblems,
            form_data.physicalLimitations.mobilityRestrictions
        ]),
        limitations_description=form_data.physicalLimitations.limitationsDescription
    )

    # Transform Fitness Goal
    fitness_goal = FitnessGoal(
        primary_goal=form_data.trainingPreferences.primaryGoal,
        goal_description=None  # Can be added if needed in the future
    )

    # Transform Time Commitment
    time_commitment = TimeCommitment(
        workout_days=form_data.trainingPreferences.weeklyWorkoutDays,
        session_duration=form_data.trainingPreferences.sessionDuration
    )

    # Create equipment list from boolean fields
    available_equipment = []
    equipment_mapping = {
        'pullUpBar': 'Pull-up Bar',
        'resistanceBands': 'Resistance Bands',
        'gymnasticRings': 'Gymnastic Rings',
        'parallettes': 'Parallettes'
    }
    
    for field, equipment_name in equipment_mapping.items():
        if getattr(form_data.equipmentLocation.availableEquipment, field):
            available_equipment.append(equipment_name)

    # Add other equipment if specified
    if form_data.equipmentLocation.otherEquipment:
        available_equipment.append(form_data.equipmentLocation.otherEquipment)

    # Transform Equipment Environment
    equipment_environment = EquipmentEnvironment(
        workout_location=form_data.equipmentLocation.workoutLocation,
        equipment=available_equipment,
        other_equipment=form_data.equipmentLocation.otherEquipment
    )

    return physical_assessment, fitness_goal, time_commitment, equipment_environment

@app.post("/api/submit-training-data")
async def submit_training_data(data: TrainingData):
    # Transform the form data to AI format
    physical_assessment, fitness_goal, time_commitment, equipment_environment = transform_form_to_ai_format(data)
    
    # Initialize workout generator
    generator = WorkoutGenerator(
        openai_api_key=os.getenv("OPENAI_API_KEY"),
        pdf_path="C:/Users/Ammar/source/repos/Capstone Project/Calisthenics_RAG.pdf"
    )
    
    # Generate workout plan
    workout_plan = generator.generate_workout_plan(
        physical_assessment,
        fitness_goal,
        time_commitment,
        equipment_environment
    )
    
    return {
        "status": "success",
        "message": "Workout plan generated successfully",
        "data": workout_plan.dict()
    }