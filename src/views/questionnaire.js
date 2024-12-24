import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner11 from '../components/banner11'
import ContactForm4 from '../components/contact-form4'
import './questionnaire.css'

const Questionnaire = (props) => {
  return (
    <div className="questionnaire-container1">
      <Helmet>
        <title>Questionnaire - Speedy Precious Goldfinch</title>
        <meta
          property="og:title"
          content="Questionnaire - Speedy Precious Goldfinch"
        />
      </Helmet>
      <Banner11
        action1={
          <Fragment>
            <span className="questionnaire-text10">
              <span>Start Personalization</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="questionnaire-text13">
              Get personalized workout plans, track your progress, and reach new
              heights of fitness with our tailored calisthenics routines.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="questionnaire-text14">
              Achieve Your Fitness Goals with Calisthenics
            </span>
          </Fragment>
        }
        rootClassName="banner11root-class-name"
      ></Banner11>
      <header id="questionnaire" className="questionnaire-container2">
        <h1 className="questionnaire-text15">
          <span>Questionnaire</span>
          <br></br>
        </h1>
        <span className="questionnaire-text18">
          Enter the details to generate a workout that is tailored just for
          you!  
        </span>
      </header>
      <ContactForm4
        text3={
          <Fragment>
            <span className="questionnaire-text19">
              Describe Any Limitations
            </span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="questionnaire-text20">
              Typical Session Duration
            </span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="questionnaire-text21">2-3 Days</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="questionnaire-text22">Generate Plan</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="questionnaire-text23">Overall Fitness</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="questionnaire-text24">
              Specify Other Equipment
            </span>
          </Fragment>
        }
        text93={
          <Fragment>
            <span className="questionnaire-text25">4-5 Days</span>
          </Fragment>
        }
        text94={
          <Fragment>
            <span className="questionnaire-text26">3-4 Days</span>
          </Fragment>
        }
        heading={
          <Fragment>
            <span className="questionnaire-text27">
              Physical Baseline Assessment
            </span>
          </Fragment>
        }
        text101={
          <Fragment>
            <span className="questionnaire-text28">Weight Loss</span>
          </Fragment>
        }
        text931={
          <Fragment>
            <span className="questionnaire-text29">5-6 Days</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="questionnaire-text30">
              Equipment and Environment
            </span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="questionnaire-text31">
              Time and Commitment Evaluation
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="questionnaire-text32">Primary Fitness Goal</span>
          </Fragment>
        }
        text1011={
          <Fragment>
            <span className="questionnaire-text33">Muscle Building</span>
          </Fragment>
        }
        text1012={
          <Fragment>
            <span className="questionnaire-text34">Strength Improvement</span>
          </Fragment>
        }
        text10121={
          <Fragment>
            <span className="questionnaire-text35">Endurance Enhancement</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="questionnaire-text36">Home</span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="questionnaire-text37">Gym</span>
          </Fragment>
        }
        text1211={
          <Fragment>
            <span className="questionnaire-text38">Outdoor Space</span>
          </Fragment>
        }
        text12111={
          <Fragment>
            <span className="questionnaire-text39">Hybrid</span>
          </Fragment>
        }
        text922={
          <Fragment>
            <span className="questionnaire-text40">Pull-up Bar</span>
          </Fragment>
        }
        text9221={
          <Fragment>
            <span className="questionnaire-text41">Resistance Bands</span>
          </Fragment>
        }
        text92211={
          <Fragment>
            <span className="questionnaire-text42">Gymnastic Rings</span>
          </Fragment>
        }
        text922111={
          <Fragment>
            <span className="questionnaire-text43">Parallettes</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="questionnaire-text44">Previous Injuries</span>
          </Fragment>
        }
        text131={
          <Fragment>
            <span className="questionnaire-text45">Joint Problems</span>
          </Fragment>
        }
        text1311={
          <Fragment>
            <span className="questionnaire-text46">Mobility Restrictions</span>
          </Fragment>
        }
      ></ContactForm4>
    </div>
  )
}

export default Questionnaire
