import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="introduction-section">
                <div>

                    <title>Evan</title>
                    <section className="hero-wrap js-fullheight" style={{ height: "600px"}} >
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center" >
                                <div className="col-lg-8 col-md-6 d-flex animate-box align-items-center starting-height">
                                    <div className="text text-center">
                                        <span className="subheading">Hey! My name is</span>
                                        <h1>Evan Loconto</h1>
                                        <h2>I'm a <span
                                                class="txt-rotate"
                                                data-period="2000"
                                                data-rotate='[ "Student.", "Coder.", "Stock Investor." ]'>
                                            </span>
                                        </h2>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </div>



                </section>
                </body>
        );
    }
}