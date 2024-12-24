from langchain.prompts import PromptTemplate

# RAG Context Retrieval Prompt
RAG_CONTEXT_PROMPT = PromptTemplate(
    input_variables=["query"],
    template="""
    Retrieve the most relevant information from the calisthenics book 
    that relates to the following query: {query}. 
    Focus on extracting specific details that can help in creating a personalized workout plan.
    """
)

# Workout Generation Prompt
WORKOUT_GENERATION_PROMPT = """
Create a detailed calisthenics workout plan based on the following information:
Physical Assessment: {physical_assessment}
Fitness Goal: {fitness_goal}
Time Commitment: {time_commitment}
Equipment: {equipment}
Context: {rag_context}

Provide the response in valid JSON format matching EXACTLY this structure:
{{
    "total_weeks": 8,
    "workout_plans": [
        {{
            "day": 1,  // MUST be an integer (1, 2, 3, etc.)
            "focus": "Upper Body & Core",
            "exercises": [
                {{
                    "name": "Exercise Name",
                    "sets": 3,  // Integer
                    "reps": 12,  // MUST be a single integer (not a range or string)
                    "difficulty": "beginner",  // REQUIRED: one of "beginner", "intermediate", "advanced"
                    "progression": "Progression instructions",
                    "notes": "Any additional notes"
                }}
            ]
        }}
    ],
    "overview": {{
        "goal": "Primary workout goal",
        "session_frequency": "Frequency of sessions",
        "session_duration_minutes": 60,
        "equipment_needed": "Required equipment",
        "location": "Workout location"
    }},
    "notes": [
        "Warm-up instructions",
        "Cool-down instructions",
        "Other important notes"
    ]
}}

IMPORTANT FORMATTING REQUIREMENTS:
1. Day must be an integer (1, 2, 3), not a string like "Day 1"
2. Reps must be a single integer (12, not "12-15" or "30 seconds")
3. Each exercise MUST include a "difficulty" field
4. All number fields must be integers, not strings

For exercises that typically use time duration (like planks), convert to rep counts (e.g., 1 rep = 30 seconds).
"""