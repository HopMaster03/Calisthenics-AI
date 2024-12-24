import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import './contact-form4.css'
import { submitTrainingData } from './api';
import SubmitButton from './button';
import WorkoutPlanDisplay from './workoutDisplay';



const ContactForm4 = (props) => {
  // Add loading state
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  // State to store form data
  const [formData, setFormData] = useState({
    pushUps: '',
    pullUps: '',
    squats: '',
    physicalLimitations: {
      previousInjuries: false,
      jointProblems: false,
      mobilityRestrictions: false,
    },
    limitationsDescription: '',
    primaryGoal: '',
    workoutDays: '',
    sessionDuration: '30 min',
    workoutLocation: '',
    equipment: {
      pullUpBar: false,
      resistanceBands: false,
      gymnasticRings: false,
      parallettes: false,
    },
    otherEquipment: '',
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [name]: checked
      }
    }));
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (e) => {
    setFormData(prev => ({
      ...prev,
      sessionDuration: e.target.value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);  // Start loading

  const formattedData = {
    "Basic Metrics": {
      "Push-ups": formData.pushUps,
      "Pull-ups": formData.pullUps,
      "Squats": formData.squats
    },
    "Physical Limitations": {
      "Has Previous Injuries": formData.physicalLimitations.previousInjuries,
      "Has Joint Problems": formData.physicalLimitations.jointProblems,
      "Has Mobility Restrictions": formData.physicalLimitations.mobilityRestrictions,
      "Limitations Description": formData.limitationsDescription
    },
    "Training Preferences": {
      "Primary Goal": formData.primaryGoal,
      "Weekly Workout Days": formData.workoutDays,
      "Session Duration": formData.sessionDuration
    },
    "Equipment & Location": {
      "Workout Location": formData.workoutLocation,
      "Available Equipment": {
        "Pull-up Bar": formData.equipment.pullUpBar,
        "Resistance Bands": formData.equipment.resistanceBands,
        "Gymnastic Rings": formData.equipment.gymnasticRings,
        "Parallettes": formData.equipment.parallettes,
        "Other Equipment": formData.otherEquipment
      }
    }
  };

  try {
    const response = await submitTrainingData(formattedData);
    console.log('Server response:', response);
    // Send the data to populate the page with it.
    setWorkoutPlan(response.data);
    // Handle successful submission
  } catch (error) {
    console.error('Failed to submit form:', error);
    // Handle error
  } finally {
    setIsLoading(false);  // Stop loading regardless of outcome
  }

  // Logging
  console.log('Raw Form Data:', formData);
  console.group('Formatted Form Data:');
  Object.entries(formattedData).forEach(([category, data]) => {
    console.group(category);
    console.table(data);
    console.groupEnd();
  });
    
    // Here you can add your logic to handle the form data
    // For example, sending it to an API or processing it further
  };

  return (
    <div className="contact-form4-contact9 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form4-max-width">
        <div className="contact-form4-content thq-flex-column">
          <form className="thq-card" onSubmit={handleSubmit}>
            <h1>
              {props.heading ?? (
                <Fragment>
                  <span className="contact-form4-text63">
                    Physical Baseline Assessment
                  </span>
                </Fragment>
              )}
            </h1>
            <div className="contact-form4-input1">
              <label htmlFor="pushUps" className="thq-body-small">
                <span>Maximum Push-ups in One Set</span>
                <br></br>
              </label>
              <input
                type="text"
                id="pushUps"
                className="contact-form4-text-input1 thq-input"
                value={formData.pushUps}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form4-input2">
              <label htmlFor="pullUps" className="thq-body-small">
                <span>Maximum Pull-ups in One Set</span>
                <br></br>
              </label>
              <input
                type="text"
                id="pullUps"
                className="contact-form4-text-input2 thq-input"
                value={formData.pullUps}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form4-input3">
              <label htmlFor="squats" className="thq-body-small">
                <span>Maximum Bodyweight Squats in One Set</span>
                <br></br>
              </label>
              <input
                type="text"
                id="squats"
                className="contact-form4-text-input3 thq-input"
                value={formData.squats}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form4-input4">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                <span>Physical Limitations</span>
                <br></br>
              </label>
              <div className="contact-form4-container10">
                <input
                  type="checkbox"
                  name="previousInjuries"
                  checked={formData.physicalLimitations.previousInjuries}
                  onChange={(e) => handleCheckboxChange(e, 'physicalLimitations')}
                  className="contact-form4-checkbox1"
                />
                <span>Previous Injuries</span>
              </div>
              <div className="contact-form4-container11">
                <input
                  type="checkbox"
                  name="jointProblems"
                  checked={formData.physicalLimitations.jointProblems}
                  onChange={(e) => handleCheckboxChange(e, 'physicalLimitations')}
                  className="contact-form4-checkbox2"
                />
                <span>Joint Problems</span>
              </div>
              <div className="contact-form4-container12">
                <input
                  type="checkbox"
                  name="mobilityRestrictions"
                  checked={formData.physicalLimitations.mobilityRestrictions}
                  onChange={(e) => handleCheckboxChange(e, 'physicalLimitations')}
                  className="contact-form4-checkbox3"
                />
                <span>Mobility Restrictions</span>
              </div>
              <label>Describe Any Limitations</label>
              <input
                type="text"
                id="limitationsDescription"
                className="contact-form4-text-input4 thq-input"
                value={formData.limitationsDescription}
                onChange={handleInputChange}
              />
            </div>
            <h1>Primary Fitness Goal</h1>
            <div className="contact-form4-input5">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Select Your Primary Goal
              </label>
            </div>
            <div className="contact-form4-container13">
              <input
                type="radio"
                value="Muscle Building"
                name="primaryGoal"
                checked={formData.primaryGoal === 'Muscle Building'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton10"
              />
              <span>Muscle Building</span>
            </div>
            <div className="contact-form4-container14">
              <input
                type="radio"
                value="Weight Loss"
                name="primaryGoal"
                checked={formData.primaryGoal === 'Weight Loss'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton11"
              />
              <span>Weight Loss</span>
            </div>
            <div className="contact-form4-container15">
              <input
                type="radio"
                value="Strength Improvement"
                name="primaryGoal"
                checked={formData.primaryGoal === 'Strength Improvement'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton12"
              />
              <span>Strength Improvement</span>
            </div>
            <div className="contact-form4-container16">
              <input
                type="radio"
                value="Endurance Enhancement"
                name="primaryGoal"
                checked={formData.primaryGoal === 'Endurance Enhancement'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton13"
              />
              <span>Endurance Enhancement</span>
            </div>
            <div className="contact-form4-container17">
              <input
                type="radio"
                value="Overall Fitness"
                name="primaryGoal"
                checked={formData.primaryGoal === 'Overall Fitness'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton14"
              />
              <span>Overall Fitness</span>
            </div>
            <h1>Time and Commitment Evaluation</h1>
            <div className="contact-form4-input6">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Available Workout Days per Week
              </label>
            </div>
            <div className="contact-form4-container18">
              <input
                type="radio"
                value="2-3 Days"
                name="workoutDays"
                checked={formData.workoutDays === '2-3 Days'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton15"
              />
              <span>2-3 Days</span>
            </div>
            <div className="contact-form4-container19">
              <input
                type="radio"
                value="3-4 Days"
                name="workoutDays"
                checked={formData.workoutDays === '3-4 Days'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton16"
              />
              <span>3-4 Days</span>
            </div>
            <div className="contact-form4-container20">
              <input
                type="radio"
                value="4-5 Days"
                name="workoutDays"
                checked={formData.workoutDays === '4-5 Days'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton17"
              />
              <span>4-5 Days</span>
            </div>
            <div className="contact-form4-container21">
              <input
                type="radio"
                value="5-6 Days"
                name="workoutDays"
                checked={formData.workoutDays === '5-6 Days'}
                onChange={handleRadioChange}
                className="contact-form4-radiobutton18"
              />
              <span>5-6 Days</span>
            </div>
            <div className="contact-form4-container22">
              <span>Typical Session Duration</span>
              <select
                value={formData.sessionDuration}
                onChange={handleSelectChange}
                className="contact-form4-select thq-checkbox list thq-animated-group-vertical thq-icon-medium thq-animated-card-bg-1 thq-grid-4"
              >
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="60 min">60 min</option>
                <option value="90 min">90 min</option>
              </select>
            </div>
            <h1>Equipment and Environment</h1>
            <div className="contact-form4-input7">
              <label htmlFor="contact-form-4-email" className="thq-body-small">
                Primary Workout Location
              </label>
              <div className="contact-form4-container23">
                <input
                  type="radio"
                  value="Home"
                  name="workoutLocation"
                  checked={formData.workoutLocation === 'Home'}
                  onChange={handleRadioChange}
                  className="contact-form4-radiobutton19"
                />
                <span>Home</span>
              </div>
              <div className="contact-form4-container24">
                <input
                  type="radio"
                  value="Gym"
                  name="workoutLocation"
                  checked={formData.workoutLocation === 'Gym'}
                  onChange={handleRadioChange}
                  className="contact-form4-radiobutton20"
                />
                <span>Gym</span>
              </div>
              <div className="contact-form4-container25">
                <input
                  type="radio"
                  value="Outdoor Space"
                  name="workoutLocation"
                  checked={formData.workoutLocation === 'Outdoor Space'}
                  onChange={handleRadioChange}
                  className="contact-form4-radio"
                />
                <span>Outdoor Space</span>
              </div>
              <div className="contact-form4-container26">
                <input
                  type="radio"
                  value="Hybrid"
                  name="workoutLocation"
                  checked={formData.workoutLocation === 'Hybrid'}
                  onChange={handleRadioChange}
                  className="contact-form4-radiobutton21"
                />
                <span>Hybrid</span>
              </div>
            </div>
            <div className="contact-form4-input8">
              <label htmlFor="contact-form-4-name" className="thq-body-small">
                <span>Available Equipment</span>
                <br></br>
              </label>
              <div className="contact-form4-container27">
                <input
                  type="checkbox"
                  name="pullUpBar"
                  checked={formData.equipment.pullUpBar}
                  onChange={(e) => handleCheckboxChange(e, 'equipment')}
                  className="contact-form4-checkbox4"
                />
                <span>Pull-up Bar</span>
              </div>
              <div className="contact-form4-container28">
                <input
                  type="checkbox"
                  name="resistanceBands"
                  checked={formData.equipment.resistanceBands}
                  onChange={(e) => handleCheckboxChange(e, 'equipment')}
                  className="contact-form4-checkbox5"
                />
                <span>Resistance Bands</span>
              </div>
              <div className="contact-form4-container29">
                <input
                  type="checkbox"
                  name="gymnasticRings"
                  checked={formData.equipment.gymnasticRings}
                  onChange={(e) => handleCheckboxChange(e, 'equipment')}
                  className="contact-form4-checkbox6"
                />
                <span>Gymnastic Rings</span>
              </div>
              <div className="contact-form4-container30">
                <input
                  type="checkbox"
                  name="parallettes"
                  checked={formData.equipment.parallettes}
                  onChange={(e) => handleCheckboxChange(e, 'equipment')}
                  className="contact-form4-checkbox7"
                />
                <span>Parallettes</span>
              </div>
              <label>Specify Other Equipment</label>
              <input
                type="text"
                id="otherEquipment"
                className="contact-form4-text-input5 thq-input"
                value={formData.otherEquipment}
                onChange={handleInputChange}
              />
            </div>
            <SubmitButton isLoading={isLoading} />
          </form>
          {workoutPlan && <WorkoutPlanDisplay workoutPlan={workoutPlan} />}
        </div>
      </div>
    </div>
  )
}

ContactForm4.propTypes = {
  heading: PropTypes.element,
}

export default ContactForm4
