import React, { Component } from 'react'

export default class Hobbies extends Component {
	render() {
        return (
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <section className="ftco-section ftco-project" id="covid-section">
                    <div className="container-fluid px-md-0">
                        <div className="row no-gutters justify-content-center pb-5">
                            <div className="col-md-12 heading-section text-center">
                                <h1 className="big big-2">Covid Activities</h1>
                                <h2 className="mb-4">My Covid Activities</h2>
                                <p>Spending time in the great outdoors has been one of my favorite things to do during the covid 
                                    outbreak, so here are some of my adventures!</p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors1.jpg)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261' }}>In this picture, I traveled with a couple of friends up to Eastbrook, Maine, and saw this
                                            gorgeous sunset on the way up. </h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors6.JPG)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261' }}>Here, I went backpacking through several of the Great Whites, hitting the North and South Twins, Bond and West Bond, 
                                            Zealand, and Hale peaks.</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors7.JPG)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261' }}>A couple of friends and I were playing a heated match of Spikeball, one of the socially-distancing
                                            activities we did throughout the summer</h3>
                                        <span>June, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors2.JPG)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261' }}>This was the Precipice trail, one of the scariest trails at Acadia.
                                            The cliffside was certainly my friend on that hike.</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors4.JPG)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261' }}>In this picture, we found a quaint place to fish and watch the sun set.</h3>
                                        <span>August, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/Outdoors5.JPG)'}}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3 style={{ color: '#696261'}}>This was taken a couple of weeks after school had ended, and I wanted to dive into the summer!</h3>
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