// api.js
const API_BASE_URL = 'http://localhost:8000';

export const submitTrainingData = async (formData) => {
  try {
    // Ensure we have default values for all nested objects
    const safeFormData = {
      pushUps: formData?.pushUps || '',
      pullUps: formData?.pullUps || '',
      squats: formData?.squats || '',
      physicalLimitations: {
        previousInjuries: Boolean(formData?.physicalLimitations?.previousInjuries),
        jointProblems: Boolean(formData?.physicalLimitations?.jointProblems),
        mobilityRestrictions: Boolean(formData?.physicalLimitations?.mobilityRestrictions),
      },
      limitationsDescription: formData?.limitationsDescription || '',
      primaryGoal: formData?.primaryGoal || '',
      workoutDays: formData?.workoutDays || '',
      sessionDuration: formData?.sessionDuration || '',
      workoutLocation: formData?.workoutLocation || '',
      equipment: {
        pullUpBar: Boolean(formData?.equipment?.pullUpBar),
        resistanceBands: Boolean(formData?.equipment?.resistanceBands),
        gymnasticRings: Boolean(formData?.equipment?.gymnasticRings),
        parallettes: Boolean(formData?.equipment?.parallettes),
      },
      otherEquipment: formData?.otherEquipment || '',
    };

    // Transform the safe data to match the backend model structure
    const transformedData = {
      basicMetrics: {
        pushUps: parseInt(safeFormData.pushUps) || 0,
        pullUps: parseInt(safeFormData.pullUps) || 0,
        squats: parseInt(safeFormData.squats) || 0
      },
      physicalLimitations: {
        previousInjuries: safeFormData.physicalLimitations.previousInjuries,
        jointProblems: safeFormData.physicalLimitations.jointProblems,
        mobilityRestrictions: safeFormData.physicalLimitations.mobilityRestrictions,
        limitationsDescription: safeFormData.limitationsDescription
      },
      trainingPreferences: {
        primaryGoal: safeFormData.primaryGoal,
        weeklyWorkoutDays: safeFormData.workoutDays,
        sessionDuration: safeFormData.sessionDuration
      },
      equipmentLocation: {
        workoutLocation: safeFormData.workoutLocation,
        availableEquipment: {
          pullUpBar: safeFormData.equipment.pullUpBar,
          resistanceBands: safeFormData.equipment.resistanceBands,
          gymnasticRings: safeFormData.equipment.gymnasticRings,
          parallettes: safeFormData.equipment.parallettes
        },
        otherEquipment: safeFormData.otherEquipment
      }
    };

    const response = await fetch(`${API_BASE_URL}/api/submit-training-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transformedData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to submit data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting training data:', error);
    throw error;
  }
};