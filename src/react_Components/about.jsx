import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                <div>
                    <link rel="stylesheet" href="css/customizable.css" />
                    <div className="container">
                        <div className="row d-flex no-gutters">
                            <div className="col-md-6 col-lg-6 d-flex">
                                <div className="img-about img d-flex align-items-stretch">
                                    <div className="overlay" />

                                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section">
                                        <h1 className="big">About</h1>
                                        <h2 className="mb-4">About Me</h2>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <ul className="about-info mt-4 px-md-0 px-2">
                                            <li className="d-flex"><span>Name:</span> <span>Evan L</span></li>
                                            <li className="d-flex"><span>Date of birth:</span> <span>November 28, 1989</span></li>
                                            <li className="d-flex"><span>Address:</span> <span>27 Mosswood Circle, Amherst NH</span></li>
                                            <li className="d-flex"><span>Zip code:</span> <span>03031</span></li>
                                            <li className="d-flex"><span>Email:</span> <span>evanloconto@gmail.com</span></li>
                                            <li className="d-flex"><span>Phone: </span> <span>603-714-3726</span></li>
                                        </ul>
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