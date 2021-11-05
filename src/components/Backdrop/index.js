import React from 'react'
import './style.css'


function BackDrop({onClick, open}) {
    
    let className = open ?'backDrop open' : 'backDrop';
    return (
        <div className={className} onClick={onClick}>

        </div>
    )
}

export default BackDrop

