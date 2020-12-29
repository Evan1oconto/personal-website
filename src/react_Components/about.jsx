import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section" >
                    <div>
                        <link rel="stylesheet" href="css/customizable.css" />
                        <div className="container">
                            <div className="row d-flex no-gutters">
                                <div className="col-md-6 col-lg-6 d-flex">
                                    <div className="img-about img d-flex align-items-stretch">
                                        <div className="overlay" />

                                        <div className="img d-flex align-self-stretch
                                                        align-items-center" 
                                            style={{
                                                backgroundImage:
                                                       'url(images/about.jpg)'
                                            }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                                    <div className="row justify-content-start pb-3">
                                        <div className="col-md-12 heading-section">
                                            <h1 className="big">About</h1>
                                            <h2 className="mb-4">About Me</h2>
                                            <p> I am currently a sophmore at Tufts University
                                                studying computer science. I enjoy watching and
                                                playing sports, learning about the stock market,
                                                and rock climbing
                                            </p>
                                            <ul className="about-info mt-4 px-md-0 px-2">
                                                <li className="d-flex"><span>Name:</span>
                                                               <span>Evan L</span></li>
                                                <li className="d-flex"><span>Address:</span>
                                                               <span>Amherst NH</span></li>
                                            </ul>
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