import React, {useState, useEffect} from 'react';
import './ButtonImg.css'





const ButtonImg = ({name,img,onSelect,active}) => {



// console.log(state);
  return (
    <div className="ButtonImg" style={{backgroundColor: active? 'rgb(248, 233, 253)' : 'white'}} onClick={() => {onSelect(name)}}>
	    <img src = {img} />
	    <p>{name}</p>

    </div>
  );
}

export default ButtonImg;
