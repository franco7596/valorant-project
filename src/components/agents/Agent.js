import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetAgent } from "../../redux/actions/agentsAction";
import "./agent.css";

export default function Agent() {
	const params = useParams();
	const dispach = useDispatch();
	const agentSelected = useSelector((state) => state.agents.agentSelected);
	const [abilitiSelected, setAbilitiSelected] = useState({});
	const [backImage, setBackImage] = useState({});
	useEffect(() => {
		dispach(startGetAgent(params.idAgent));
	}, []);
	useEffect(() => {
		if (agentSelected && agentSelected.uuid === params.idAgent) {
			setAbilitiSelected(agentSelected.abilities[0]);
			setBackImage({
				backgroundImage: `url(${agentSelected.background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				backgroundPosition: "center",
			});
			new Audio(agentSelected.voiceLine.mediaList[0].wave).play();
		}
	}, [agentSelected]);

	return (
		agentSelected && (
			<div className="agent">
				<div className="agent-container">
					<div className="agent-rol">
						<h4 className="agent-role-h4">// ROLE</h4>
						<div className="agent-role-type">
							<h5 className="agent-role-h5">
								{agentSelected.role.displayName}
							</h5>
							<img
								src={agentSelected.role.displayIcon}
								className="agent-role-image"
							/>
						</div>
						<p className="agent-role-p">{agentSelected.role.description}</p>
					</div>
					<img
						src={agentSelected["bustPortrait"]}
						style={backImage}
						className="agent-image"
					/>
					<div className="agent-biography">
						<h5 className="agent-biography-h5">// BIOGRAPHY</h5>
						<h4 className="agent-biography-h4">{agentSelected.displayName}</h4>
						<p className="agent-biography-p">{agentSelected.description}</p>
					</div>
				</div>
				{/* <div className="agent-change-color" /> */}
				<div className="agent-powers">
					<h4 className="agent-powers-h4">SPECIAL ABILITIEAS</h4>
					{agentSelected.abilities.map((abiliti) => (
						<div
							className={
								abilitiSelected.slot === abiliti.slot
									? "agent-powers-button-selected"
									: "agent-powers-button"
							}
							type="button"
							key={abiliti.slot}
							onClick={() => setAbilitiSelected(abiliti)}
						>
							<img
								src={abiliti.displayIcon}
								className="agent-power-icon grayscale "
							/>
						</div>
					))}
					<div className="agent-powers-info">
						<h5 className="agent-powers-info-h5">
							{abilitiSelected.displayName}
						</h5>
						<p>{abilitiSelected.description}</p>
					</div>
				</div>
			</div>
		)
	);
}
