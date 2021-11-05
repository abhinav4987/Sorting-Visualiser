import React from 'react'
import './style.css'

function index({number,
    maxNumber,
    length,
    barStyle,
    stateA,
    stateB,
    stateC,
    stateD,
    sorted,
}) {
    // console.log(number,maxNumber, length);
    let width = 100/length;
    let height = (number/maxNumber) * 100 ;
    let style = {...barStyle,
        width: `${width}%`,
        height: `${height}%`
    }

    
    let classNames = 'Bar'
    if (sorted) classNames += ' Bar_sorted';
    if (stateD) classNames += ' Bar_stateD';
    else if (stateC) classNames += ' Bar_stateC';
    else if (stateB) classNames += ' Bar_stateB';
    else if (stateA) classNames += ' Bar_stateA';
    
    // console.log(width, height, number, maxNumber);
    return (

        <div className={classNames} style={style}>
        </div>
    )
}

export default index
