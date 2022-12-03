import React, {useState} from "react";
import Heart from "react-heart";

// This is the like button for a feature which was in the process of being linked to backend and had to be removed
export default function LikeButton() {
	const [active, setActive] = useState(false)
	return (
		<div style={{ width: "1rem", color: "rgba(0,0,0,0)" }}>
            			<Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>

			{/* <Heart isActive={active} onClick={() => setActive(!active)}/> */}
		</div>
	);
}