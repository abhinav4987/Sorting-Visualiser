import React, {useState, useEffect} from 'react'
import './style.css'

import {
    MdPlayArrow as Play,
    MdPause as Pause,
    MdSkipNext as Forward,
    MdSkipPrevious as Backward,
    MdRepeat as Repeat
} from 'react-icons/md';

const speeds  = [0.5,1,2,4];


function ControlBar({
    onChangeSpeed,
    onPlay,onPause,
    playing,
    repeat,
    forward,
    backward
}) {
    const [speed, setSpeed] = useState(1);
    const [isPaused, setPaused] = useState(!playing);
    const options = speeds.map((speed) => (
        <option className="select__option"  value={speed}>
            {speed}
        </option>
    ))
    const changeNature = () => {
        setPaused(!isPaused);
    }
    useEffect(() =>{
        setPaused(!playing);
    },[playing]);
    const playPauseAction = isPaused ? onPlay : onPause;
    return (
        <div className="controlBar">
            <button className="buttons repeat" type="button" onClick={repeat}>
                <icon className="icons"><Repeat /></icon>
            </button>

            <button className="buttons backwards" onClick={backward}>
                <icon className="icons"><Backward /></icon>
            </button>

            <button className="buttons playNpause" onClick={()=> {playPauseAction(); changeNature();}}>
                {isPaused ? 
                    (<icon className="icons"><Play /></icon>) : 
                    (<icon className="icons"><Pause /></icon>)
                }
            </button>

            <button className="buttons forwards" onClick={forward}>
                <icon className="icons"><Forward /></icon>
            </button>

            <select value={speed} className="select_area speed__select" onChange={(e)=>{onChangeSpeed(e.target.value);setSpeed(e.target.value)}}>
                {options}
            </select>
        </div>
    )
}

export default ControlBar
