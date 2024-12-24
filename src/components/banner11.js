import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div
      className={`banner11-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container2">
          <h2 className="banner11-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner11-text5">
                  Achieve Your Fitness Goals with Calisthenics
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner11-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner11-text3">
                  Get personalized workout plans, track your progress, and reach
                  new heights of fitness with our tailored calisthenics
                  routines.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner11-text4">Get Started</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Banner11.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner11
