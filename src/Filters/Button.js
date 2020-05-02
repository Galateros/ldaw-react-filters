import React from "react";
import "./Button.css"

const Button = ({name, onClick, colorA, colorB}) =>{
	console.log(colorA)
	return(
	<button className="Button" onClick={onClick} style={{backgroundColor: colorA, color: colorB, border: "1px solid "+colorA}}>
		{name}
	</ button>
	);
};
export default Button;