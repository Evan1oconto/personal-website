import React, { Component } from 'react'

export default class Hobbies extends Component {
	render() {
        return (
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <section className="ftco-section ftco-project" id="hobbies-section">
                    <div className="container-fluid px-md-0">
                        <div className="row no-gutters justify-content-center pb-5">
                            <div className="col-md-12 heading-section text-center">
                                <h1 className="big big-2">Hobbies</h1>
                                <h2 className="mb-4">My Hobbies</h2>
                                <p>Spending time in the great outdoors has been one of my favorite things to do during the covid 
                                    outbreak, so here are some of my adventures!</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors1.jpg)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>Here, I traveled with a couple of friends up to Eastbrook, Maine, and saw this
                                            gorgeous sunset on the way up. </h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors6);'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>Here, I went backpacking through several of the Great Whites, hitting the North and South Twins, Bond and West Bond, 
                                            Zealand, and Hale peaks.</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors7.jpg);'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>Here, A couple of friends and I were playing a heated match of Spikeball, one of the socially-distancing
                                            activities we did throughout the summer</h3>
                                        <span>June, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors2.jpg);'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>Here, I am climbing one of the scariest hikes of Acadia, Precipice. Most of the climbing involved
                                            scaling cliffsides, so I made sure to stay as close to the wall as possible!</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors4.jpg);'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>In this picture, we found a quaint place to fish and watch the sun set.</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors7.jpg);'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3>This was taken a couple of weeks after school had ended, and I wanted to flip into the summer!</h3>
                                        <span>May, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
			</body>
		)
	}
}