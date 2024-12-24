from langchain_openai import ChatOpenAI
from models import (
    PhysicalAssessment, FitnessGoal, TimeCommitment, 
    EquipmentEnvironment, GeneratedWorkoutPlan
)
from prompt import RAG_CONTEXT_PROMPT, WORKOUT_GENERATION_PROMPT
from calisthenicsRAG import CalisthenicsRAG
import json

class WorkoutGenerator:
    def __init__(self, openai_api_key, pdf_path):
        self.llm = ChatOpenAI(
            api_key=openai_api_key, 
            model="gpt-4-turbo", 
            temperature=0.7
        )
        self.rag = CalisthenicsRAG(pdf_path=pdf_path, openai_api_key=openai_api_key)

    def generate_workout_plan(
        self,
        physical_assessment: PhysicalAssessment,
        fitness_goal: FitnessGoal,
        time_commitment: TimeCommitment,
        equipment_environment: EquipmentEnvironment
    ) -> GeneratedWorkoutPlan:
        context_query = f"""
        Create a calisthenics workout plan for {fitness_goal.primary_goal} 
        with {time_commitment.workout_days} per week, 
        considering {equipment_environment.equipment} equipment
        """

        rag_context = self.rag.retrieve_context(context_query)

        input_data = {
            "physical_assessment": physical_assessment.model_dump_json(),
            "fitness_goal": fitness_goal.model_dump_json(),
            "time_commitment": time_commitment.model_dump_json(),
            "equipment": equipment_environment.model_dump_json(),
            "rag_context": rag_context
        }

        response = self.llm.invoke(WORKOUT_GENERATION_PROMPT.format(**input_data))
        
        try:
            if hasattr(response, 'content'):
                response_text = response.content
            else:
                response_text = str(response)
            
            response_text = response_text.strip()
            if response_text.startswith('```json'):
                response_text = response_text[7:-3]
            
            workout_data = json.loads(response_text)
            return GeneratedWorkoutPlan(**workout_data)
            
        except Exception as e:
            raise ValueError(f"Failed to parse workout plan: {str(e)}\nResponse was: {response_text}")