import React from 'react'
import SortBar from '../SortBar'

import './style.css'

function findMax(array) {
    
    return Math.max.apply(null, array);;
}
function SortChart({
    arrayList,
    groupA,
    groupB,
    groupC,
    groupD,
    sortedIndices
}) {
    
    let max = findMax(arrayList);
    let style = {
        margin: '0.1rem',
    };
    const elements = arrayList.map((number, i)=>{

        let stateA = groupA.includes(i);
        let stateB = groupB.includes(i);
        let stateC = groupC.includes(i);
        let stateD = groupD.includes(i);
        let sorted = sortedIndices.includes(i);
        
        return (
            <SortBar 
                number={number} 
                maxNumber={max} 
                length={arrayList.length} 
                barStyle={style} 
                stateA={stateA}
                stateB={stateB}
                stateC={stateC}
                stateD={stateD}
                sorted={sorted}
            />
        )
    })
    
    return (
        <div className="sortChart">
            {elements}
        </div>
    )
}

export default SortChart
