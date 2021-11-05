import React from 'react'
import './style.css';
function CompletionBar({width}) {
    let percentage = width < 0 ? 0 : width.toFixed(2)*100;
    return (
        <div className="bar">
            <div className="status" style={{width: `${percentage}%`}}></div>
        </div>
    )
}

export default CompletionBar
