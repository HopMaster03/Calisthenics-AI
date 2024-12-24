import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text34">Testimonials</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Fitness Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        Calisthenics has transformed my fitness journey. The
                        workouts are challenging yet rewarding. I highly
                        recommend it to anyone looking to improve their strength
                        and flexibility.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Personal Trainer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text16 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        As a personal trainer, I often recommend Calisthenics to
                        my clients. The bodyweight exercises are effective in
                        building muscle and improving overall fitness levels.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text23">
                            Alex Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Yoga Instructor
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text19 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        Incorporating Calisthenics into my yoga practice has
                        been a game-changer. It has helped me achieve greater
                        stability and control in my movements.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">Athlete</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text22 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        I have tried various workout programs, but Calisthenics
                        stands out for its simplicity and effectiveness. It has
                        helped me push my limits and reach new fitness goals.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1522941471521-6ee21ec5cc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Alex Johnson',
  author3Name: undefined,
  review2: undefined,
  author1Position: undefined,
  author1Name: undefined,
  review3: undefined,
  author4Name: undefined,
  review1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1523700664714-1345c3d6a0c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1561128682-989751d4c781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  author1Alt: 'Image of John Doe',
  author4Alt: 'Image of Sarah Lee',
  author2Src:
    'https://images.unsplash.com/photo-1521220546621-cf34a1165c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDc4MzcxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author2Position: undefined,
  heading1: undefined,
  review4: undefined,
  author2Alt: 'Image of Jane Smith',
}

Testimonial17.propTypes = {
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author1Position: PropTypes.element,
  author1Name: PropTypes.element,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  author1Src: PropTypes.string,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.element,
  author2Position: PropTypes.element,
  heading1: PropTypes.element,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
}

export default Testimonial17
