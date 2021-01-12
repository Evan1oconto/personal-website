import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <nav id="navi">
                                    <ul>
                                        <li><a href="#page-1">Education</a></li>
                                        <li><a href="#page-2">Experience</a></li>
                                        <li><a href="#page-3">Projects</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col-md-9">
                                <div id="page-1" className="page one">
                                    <h2 className="heading">Education</h2>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2019-2023</span>
                                            <h2>Bachelor of Science in Computer Science at Tufts University</h2>
                                            <span className="position">GPA: 3.9</span>
                                            <p>Data Structures, Web Programming, Machine Structures and Programming, Intro to Cybersecurity</p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">2015-2019</span>
                                            <h2>High School Diploma</h2>
                                            <span className="position">Academy for Science and Design</span>
                                        </div>
                                    </div>

                                </div>
                                <div id="page-2" className="page two">
                                    <h2 className="heading">Experience</h2>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">December 2020-Present</span>
                                            <h2>Midior Consulting  </h2>
                                            <span className="position">Web app developer</span>
                                            <p>
                                                Managed and added features to a web app for a data and finance-based tool for 
                                                the North Atlantic States Carpenters. This included developing an add to homescreen 
                                                button/banner so mobile users can add the web appt o their phone’s home screen easier.         
                                            </p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">April 2020-August 2020</span>
                                            <h2>Shaws Supermarkets </h2>
                                            <span className="position">Produce Stocker/Sanitizer</span>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">August 2018-September 2018</span>
                                            <h2>Pegasystems</h2>
                                            <span className="position">HS Software Intern	</span>
                                            <p>Modified software using JavaScript, CSS, and HTML to add features to a data visualization tool, along with shadowing a scrum team via attending sprint reviews, daily-standups and refinement meetings.</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="page-3" className="page three">
                                    <h2 className="heading">Projects</h2>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">December 2020-Present</span>
                                            <h2>Personal Stock Trading Project </h2>
                                            <span className="position">Python, SQL</span>
                                            <p>
                                                Designed an algorithm-based stock application to determine bear/bullish trends.
                                                It primarily involves collecting/storing data through a SQL database, and
                                                performing operations with python scripts.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">Fall 2020</span>
                                            <h2>Universal Machine Project  </h2>
                                            <span className="position">C</span>
                                            <p>
                                                Created a Universal Machine to emulate an assembly-based language and then went
                                                through a profiling process. The initial design allowed 50 million instructions
                                                to be executed in under 5 seconds. Then, through profiling, the final design 
                                                was able to perform 50 million instructions in approximately a quater of a second.
                                        </p>
                                        </div>
                                    </div>

                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">April 2020-May 2020</span>
                                            <h2>Data Structures Course Project</h2>
                                            <span className="position">C++</span>
                                            <p>Developed a mapping/navigation algorithm using directed graphs and breadth first search</p>
                                        </div>
                                    </div>
                                    <div className="resume-wrap d-flex animate-box">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-ideas" />
                                        </div>
                                        <div className="text pl-3">
                                            <span className="date">March 2019-June 2019</span>
                                            <h2>Arduino Design Project</h2>
                                            <span className="position">C++</span>
                                            <p>Designed and coded an Arduino-based white noise generator for a design project. A final product and pitch resulted from several months of researching, creating blueprints, prototyping, and peer testing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>

        );
    }
}