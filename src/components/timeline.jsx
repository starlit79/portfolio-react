import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Independent Full-Stack Web Developer/Software<span>10/2020-Current</span></h2>
                        <p>Continue to work with my colleagues to work on improving the web application utilizing API, MongoDB to improve managing data to interact with Ecwid and allowing e-commerce companies ease of usage</p>
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack Web Developer/Software at StackEductation <span>5/2020-10/2020</span></h2>
                        <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Director of Rehabilitation and Occupational Therapist in the rehabilitation and healthcare world<span>2004-Current</span></h2>
                        <p>Using my knowledge of web development to improve company's visibility on the internet to reach people in the community</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Certification In Web Development <span>5/2020-10/2020</span></h2>
                        <p>Languages: JavaScript, HTML, SQL, HTTP, Functional Programming,  JSON</p>
                        <p>Front End: React.js, CSS, Pug</p>
                        <p>Back End: Node,js, Express.js</p>
                        <p>Databases: MySQL, MongoDB</p>
                        <p>Testing/DevOps: Mocha, Chai, and Sinon, Amazon Web Services</p>
                        <p>Methodologies: Git version control, RESTful APIs, Test Driven Development Model-View-Controller (MVC Architecture)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
