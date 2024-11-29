import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
	return (
		<div>
			<h2 className='font-semibold mb-3'>Find Us On</h2>
			<div className="join flex join-vertical *:bg-base-100">
 			 <button className="btn join-item justify-start">
				Facebook<FaFacebook/>
				</button>
				<button className="btn join-item justify-start">
				Instagram<FaInstagram/>
				</button>
				<button className="btn join-item justify-start">
				Twitter<FaTwitter/>
				</button>
		</div>
		</div>
	);
};

export default FindUs;