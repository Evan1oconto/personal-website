import React, { Component } from 'react'

export default class Projects extends Component { {
	render() {
		return (
			<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
				<section class="ftco-section" id="blog-section">
					<div class="container">
						<div class="row justify-content-center mb-5 pb-5">
							<div class="col-md-7 heading-section text-center ftco-animate">
								<h1 class="big big-2">Hobbies</h1>
								<h2 class="mb-4">My Hobbies</h2>
								<p>Spending time in the great outdoors is one of my favorite things to do</p>
							</div>
						</div>

						<div class="row d-flex">
							<div class="col-md-4 d-flex ftco-animate">
								<div class="blog-entry justify-content-end">
									<a href="single.html" class="block-20" style="background-image: url('images/Outdoors1.jpg');">
									</a>
									<div class="text mt-3 float-right d-block">
										<h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
										<div class="d-flex align-items-center mb-3 meta">
											<p class="mb-0">
												<span class="mr-2">Sept. 12, 2019</span>
												<a href="#" class="mr-2">Admin</a>
												<a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
											</p>
										</div>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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
