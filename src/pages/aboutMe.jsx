import { useState } from "react";

const AboutMe = ({darkMode}) => {
	const [hoveredLink, setHoveredLink] = useState(null);
	
	const setHover = index => {
		setHoveredLink(index);
	};

  return (
    <div className="responsiveColumns" style={{display: 'grid', marginTop: '20px', paddingBottom: '20px'}}>
		<div>

		</div>
    </div>
  );
};
export default AboutMe;