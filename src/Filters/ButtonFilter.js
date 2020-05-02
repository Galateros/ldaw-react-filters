import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import ButtonImg from './ButtonImg'
import './ButtonFilter.css'




const ButtonFilter = ({position,setState,title,fill}) => {
	//Sconsole.log("Filter");
	//console.log(fill)
	//console.log(title)

	const onSelect = (selected) =>{
		console.log("SELECTED");
		const but = fill.map((button) =>{
			if (button.name === selected) {
				//button.active = true;
				return {name:button.name,img: button.img,active: true};
			}
			return{name:button.name,img: button.img,active: false};
		});
		
		setState(but);
	};

  return (
    <div className={`ButtonFilter ${position}`}>
    <p>{title.title}</p>
    <div className = "Box">
    {fill && fill.map((button, i) => (
            <ButtonImg name={button.name} img={button.img} active = {button.active} onSelect={onSelect} key={i}></ButtonImg>
          ))}
	</div>
    </div>
  );
}

export default ButtonFilter;
