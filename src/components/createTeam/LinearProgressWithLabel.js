import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
export default function LinearProgressWithLabel({
	value,
	title,
	status = false,
}) {
	return (
		<div className="linear_progress-container">
			<div className="linear_progress-container-progress">
				<h6>{title}</h6>
				<LinearProgress
					color={status ? "success" : "primary"}
					variant="determinate"
					{...{ value }}
				/>
			</div>
			<div className="linear_progress-container-text">
				<p className="linear_progress-container-text-p">{`${Math.round(
					value
				)}%`}</p>
			</div>
		</div>
	);
}
