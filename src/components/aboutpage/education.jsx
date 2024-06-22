import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./vgec.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
							Vishwakarma Government Engineering College
							</div>
							<div className="work-subtitle">
								Bachelor of Engineering (GTU)
							</div>
							<div className="work-duration">
								Jul 2009 - May 2013
							</div>
						</div>

						<div className="work">
							<img
								src="./BVM_Logo-1.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
							Birla Vishvakarma Mahavidyalaya
							</div>
							<div className="work-subtitle">
								Master of Engineering (GTU)
							</div>
							<div className="work-duration">
								Jul 2013 - May 2015
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
