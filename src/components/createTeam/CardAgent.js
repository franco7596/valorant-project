import { Box } from "@mui/material";
import React from "react";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

export default function CardAgent({ agent }) {
	return (
		agent.displayName && (
			<div className="card card-agent">
				<div className="card-body card-body-agent">
					<div className="card-agent-header">
						<h4>{agent.displayName}</h4>
						<img
							src={agent.role.displayIcon}
							className="card-body-agent-header-img"
						/>
					</div>
					<div className="card-agent-container">
						<img src={agent.displayIcon} className="card-body-agent-img" />
					</div>
					<Box sx={{ width: "100%" }}>
						<LinearProgressWithLabel value={agent.LURKER} title="LURKER" />
						<LinearProgressWithLabel value={agent.AWP} title="AWP" />
						<LinearProgressWithLabel value={agent.ENTRY} title="ENTRY" />
						<LinearProgressWithLabel
							value={agent.STRONHOLDERS}
							title="STRONHOLDERS"
						/>
						<LinearProgressWithLabel
							value={agent.SMOKEADORES}
							title="SMOKEADORES"
						/>
						<LinearProgressWithLabel
							value={agent.SPOTEADORES}
							title="SPOTEADORES"
						/>
						<LinearProgressWithLabel value={agent.HEALERS} title="HEALERS" />
						<LinearProgressWithLabel
							value={agent.FLASHEADORES}
							title="FLASHEADORES"
						/>
					</Box>
				</div>
			</div>
		)
	);
}
