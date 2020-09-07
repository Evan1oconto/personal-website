import React, { Component } from 'react'

export default class Navigationbar extends Component {
    render() {
        return (
            <div>
                <title>Evan - Free Bootstrap 4 Template by Colorlib</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/aos.css" />
                <link rel="stylesheet" href="css/ionicons.min.css" />
                <link rel="stylesheet" href="css/flaticon.css" />
                <link rel="stylesheet" href="css/icomoon.css" />
                <link rel="stylesheet" href="css/style.css" />
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target scrolled awake" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><span>E</span>van</a>
                        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
            </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav nav ml-auto">
                                <li className="nav-item"><a href="#introduction-section" className="nav-link"><span>Home</span></a></li>
                                <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                                <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                                <li className="nav-item"><a href="#services-section" className="nav-link"><span>Hobbies</span></a></li>
                                <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Trips</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}