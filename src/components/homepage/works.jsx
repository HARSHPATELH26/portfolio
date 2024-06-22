import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ltts1.jpg"
								alt="ltts1"
								className="work-image"
							/>
							<div className="work-title">LTTS</div>
							<div className="work-subtitle">
								Project Lead
							</div>
							<div className="work-duration">
								Sep 2022 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./tcs_Logo.jpg"
								alt="tcs_Logo"
								className="work-image"
							/>
							<div className="work-title">TCS</div>
							<div className="work-subtitle">
										IT ANALYST
							</div>
							<div className="work-duration">
								Nov 2015 - Aug 2022
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./unnamed.jpg"
								alt="unnamed"
								className="work-image"
							/>
							<div className="work-title">Ksky Technologies</div>
							<div className="work-subtitle">
								Frontend Web Developer
							</div>
							<div className="work-duration">
								Nov 2020 - Apr 2021
							</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
