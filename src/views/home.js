import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Speedy Precious Goldfinch</title>
        <meta property="og:title" content="Speedy Precious Goldfinch" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Login</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Questionnaire</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Login</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Questionnaire</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">
              Welcome to the Calisthenics website where you can start your
              fitness journey!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">
              Login to access personalized workout plans and track your
              progress.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Complete the questionnaire to receive customized workout
              recommendations.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              Start your calisthenics journey today with our expert guidance and
              personalized workout plans.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Welcome to Calisthenics AI</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">Variety of Exercises</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Workout Routines</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Progress Tracking</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Learn and perform a wide range of bodyweight exercises
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Access to a library of workout routines
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              Track your progress with detailed statistics
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text34">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text35">
              Take the first step towards a healthier lifestyle with our
              personalized questionnaire.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text36">
              Ready to start your Calisthenics journey?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text37">Progressive Workouts</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text38">Personalized Plans</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text39">
              Access a variety of progressive calisthenics workouts tailored to
              your fitness level.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text40">
              Receive personalized calisthenics training plans based on your
              goals and preferences.
            </span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1508802493048-bf55245a557b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDg2MTk5MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text41">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text42">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text43">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text44">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text45">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text46">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text47">Choose the perfect plan for you</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text48">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text51">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text52">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text53">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text54">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text55">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text56">$99.99/year</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text57">Save 17% with yearly plan</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text58">Sign Up Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text59">$199.99/year</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text60">Save 17% with yearly plan</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text61">Sign Up Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text62">$299.99/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text63">Save 17% with yearly plan</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text64">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text65">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text66">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text67">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text68">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text69">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text70">
              Access to basic calisthenics workouts
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text71">Progress tracking tools</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text72">
              Limited access to premium content
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text73">
              Access to all calisthenics workouts
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text74">
              Advanced progress tracking tools
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text75">Full access to premium content</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text76">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text77">
              Access to all calisthenics workouts
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text78">Personalized training plans</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text79">
              Unlimited access to premium content
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text80">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text81">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text82">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text83">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text84">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text85">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text86">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text87">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text88">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text89">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text90">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text91">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text92">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text93">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text94">Assess Your Fitness Level</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text95">Explore Calisthenics Workouts</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text96">Create a Personalized Plan</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text97">Track Your Progress</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text98">
              Take a quick fitness assessment to understand your current fitness
              level and set realistic goals.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text99">
              Discover a variety of calisthenics workouts tailored to different
              fitness levels and goals.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text100">
              Based on your assessment results and workout preferences, create a
              personalized calisthenics plan.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text101">
              Use the tracking tools to monitor your progress, adjust your plan,
              and stay motivated on your calisthenics journey.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text102">
              Have questions or need assistance? Feel free to reach out to us.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text103">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text104">Email: info@calisthenics.com</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text105">Phone: +1-123-456-7890</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text106">
              Send us an email and we&apos;ll get back to you as soon as
              possible.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text107">
              Give us a call during our business hours for immediate support.
            </span>
          </Fragment>
        }
      ></Contact10>
    </div>
  )
}

export default Home
