import React from "react";

const Contacts = () => {
	return (
		<section id="contacts" className="pt-6 md:pt-12 bg-tertiary-black ">
			<div className="grid grid-cols-1 md:grid-cols-3 rounded-sm">
				<div className="col-span-1 bg-customGreen">
					<h4>Get in touch</h4>
					<p>We love to hear from you. </p>
					<div className="">
						<div className="">
							<h6>Email </h6>
						</div>
					</div>
				</div>
				<div className="md:col-span-1"></div>
			</div>
		</section>
	);
};

export default Contacts;
