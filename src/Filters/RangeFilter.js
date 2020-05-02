import React from "react";
import ReactSlider from 'react-slider'
import Slider, { Range } from 'rc-slider';
import './RangeFilter.css'
import 'rc-slider/assets/index.css';
const RangeFilter = ({position,imgLeft,imgRight,title,from,to,range,setRange}) =>{
	return(
	<div className="RangeFilter">
	<p>{title}</p>
	<Range
		min = {from}
		max = {to}
		value={range}
		onChange={(value)=>{
			setRange(value)
		}}
		step={1}
		allowCross = {false}
      ></Range>
      <div className="slider-inputs opposite">
        <input
          step={"1"}
          min={from}
          max={to}
          type="number"
          value={range[0]}
          onChange={(event) => {
            if (event.target.value > range[1])
              return setRange([range[1], range[1]]);

            setRange([event.target.value, range[1]]);
          }}
        ></input>
        <input
          step={"1"}
          min={from}
          max={to}
          type="number"
          value={range[1]}
          onChange={(event) => {
            if (event.target.value < range[0])
              return setRange([range[0], range[0]]);
            setRange([range[0], event.target.value]);
          }}
        ></input>
      </div>
	</div>
	)
}
export default RangeFilter;