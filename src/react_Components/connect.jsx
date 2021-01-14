import React, { Component } from 'react'

export default class Connect extends Component {
	render() {
		return (
			<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
				<section className="ftco-section contact-section ftco-no-pb" id="connect-section">
					<div className="container">
						<div className="row justify-content-center mb-5 pb-5">
							<div className="col-md-7 heading-section text-center">
								<h1 className="big big-2">Connect</h1>
								<h2 className="mb-4">Connect With Me</h2>
								<p>Feel free to connect with me on Linkedin, Facebook, or instagram, and feel free to checkout my Github Projects!</p>
							</div>
						</div>
						
						<div className="row d-flex contact-info mb-5">
							<div className="col-md-6 col-lg-3 d-flex">
								<div className="align-self-stretch box text-center p-4 shadow">
									<div className="icon d-flex align-items-center justify-content-center">
										<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 justify-content-center">
											<li><a href="https://www.linkedin.com/in/evan-loconto"><span className="icon-linkedin"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 d-flex">
								<div className="align-self-stretch box text-center p-4 shadow">
									<div className="icon d-flex align-items-center justify-content-center">
										<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 justify-content-center">
											<li><a href="https://www.facebook.com/evan.loconto"><span className="icon-facebook"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 d-flex">
								<div className="align-self-stretch box text-center p-4 shadow">
									<div className="icon d-flex align-items-center justify-content-center">
										<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 justify-content-center">
											<li><a href="https://www.instagram.com/evan_loconto/"><span className="icon-instagram"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 d-flex">
								<div className="align-self-stretch box text-center p-4 shadow">
									<div className="icon d-flex align-items-center justify-content-center">
										<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 justify-content-center">
											<li><a href="https://github.com/Evan1oconto"><span className="icon-github"></span></a></li>
										</ul>
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
