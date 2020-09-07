import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (

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
                                <div className="resume-wrap d-flex ">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">2019-2023</span>
                                        <h2>Bachelor of Science in Computer Science at Tufts University</h2>
                                        <span className="position">GPA: 3.89</span>
                                        <p>Related Coursework: Data Structures, Linear Algebra, Machine Structures and Programming, Intro to Cybersecurity</p>
                                    </div>
                                </div>
                                <div className="resume-wrap d-flex">
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
                                <div className="resume-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">April 2020-August 2020</span>
                                        <h2>Shaws Supermarkets </h2>
                                        <span className="position">Produce Stocker/Sanitizer</span>
                                    </div>
                                </div>
                                <div className="resume-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">April 2019-August 2019</span>
                                        <h2>Amherst Country Club</h2>
                                        <span className="position">Grounds Maintenance</span>
                                    </div>
                                </div>
                                <div className="resume-wrap d-flex ">
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
                                <div className="resume-wrap d-flex ">
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
                                <div className="resume-wrap d-flex ">
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
                                <div className="resume-wrap d-flex ">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">June 2018-August 2018</span>
                                        <h2>MIT Sponsored Electronic Capture the Flag</h2>
                                        <span className="position">Java, C, Python</span>
                                        <p>Participated in an Electronic Capture the Flag in part with BWSI. The ETCF involved architecting and prototyping a basic bank security protocol that worked with RSA and AES encryption packages, along with solving hacking-based problems.</p>
                                    </div>
                                </div>
                                <div className="resume-wrap d-flex ">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas" />
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">September 2016-March 2019</span>
                                        <h2>FIRST Robotics Coding Division</h2>
                                        <span className="position">C++, Java</span>
                                        <p>Was apart of my local robotics team. I Helped develop crucial robot functions over the course of several seasons by working on the loading and shooting functionality, and the autonomous section code.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}