import React from "react";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

export default function CardStatistics({ objectSelected }) {
	return (
		<div className="create_team-container-maps-properties card card-body">
			<LinearProgressWithLabel
				value={objectSelected.LURKER}
				title="LURKER"
				status={objectSelected.LURKERStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.AWP}
				title="AWP"
				status={objectSelected.AWPStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.ENTRY}
				title="ENTRY"
				status={objectSelected.ENTRYStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.STRONHOLDERS}
				title="STRONHOLDERS"
				status={objectSelected.STRONHOLDERSStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.SMOKEADORES}
				title="SMOKEADORES"
				status={objectSelected.SMOKEADORESStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.SPOTEADORES}
				title="SPOTEADORES"
				status={objectSelected.SPOTEADORESStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.HEALERS}
				title="HEALERS"
				status={objectSelected.HEALERSStatus}
			/>
			<LinearProgressWithLabel
				value={objectSelected.FLASHEADORES}
				title="FLASHEADORES"
				status={objectSelected.FLASHEADORESStatus}
			/>
		</div>
	);
}
