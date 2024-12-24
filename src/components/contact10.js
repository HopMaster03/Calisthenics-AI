import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Have questions or need assistance? Feel free to reach out to
                    us.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Email: info@calisthenics.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Send us an email and we&apos;ll get back to you as soon as
                    possible.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Phone: +1-123-456-7890
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Give us a call during our business hours for immediate
                    support.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location2: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1634225251578-d5f6ffced78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1600132806608-231446b2e7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location1ImageAlt: 'Email Icon',
  location2ImageAlt: 'Phone Icon',
  content1: undefined,
  location2Description: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location2: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
}

export default Contact10
