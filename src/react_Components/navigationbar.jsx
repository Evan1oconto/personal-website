import React, { Component } from 'react'

export default class Navigationbar extends Component {
    render() {
        return (
            <div>
                <head>
                    <title>Evan</title>
                </head>

                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light
                                site-navbar-target" id="ftco-navbar">
                        <div className="container">
                            <a className="navbar-brand" href="index.html"><span>E</span>van</a>
                            <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle collapsed"
                            type="button" data-toggle="collapse" data-target="#ftco-nav"
                                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">

                                <span className="oi oi-menu"></span>
                                    Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item"><a href="#introduction-section" className="nav-link"><span>Home</span></a></li>
                                    <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                                    <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                                    <li className="nav-item"><a href="#covid-section" className="nav-link"><span>Covid-Cope</span></a></li>
                                    <li className="nav-item"><a href="#connect-section" className="nav-link"><span>Contact</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </body>
            </div>
        );
    }
}