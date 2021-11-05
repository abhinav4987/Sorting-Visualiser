import React from 'react'
import {
    newTrace,
    addToTrace,
    swap,
    createKey,
    lastSorted
} from './sortingUtils'



const BubbleSort = (array) => {

    var arraySet = array.splice(0);
    
    // arraySet.sort(function(a, b){return a-b});

        const trace = newTrace(arraySet);

        for(let i =0 ;i < arraySet.length; i++) {
            for(let j = 0;j < arraySet.length-1-i; j++) {
                addToTrace(trace,arraySet,lastSorted(trace),[j,j+1]);
                if(+arraySet[j] > +arraySet[j+1]) {
                    swap(arraySet, j,j+1);
                    addToTrace(trace,arraySet,lastSorted(trace),[],[j,j+1]);
                }
                
            }

            addToTrace(trace, arraySet, [
                ...lastSorted(trace),
                arraySet.length - 1 - i
            ]);
        }
    
    
        
    return trace;
}

export const SortingKeys =  createKey('Comparing', 'Swapping');

export const Description = {
    algorithm: 'Bubble Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/bubble-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Bubble Sort
            </a>{' '}
            is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order.The pass through the list is repeated until the list
            is sorted. The algorithm, which is a comparison sort, is named for
            the way smaller or larger elements "bubble" to the top of the
            list. Although the algorithm is simple, it is too slow and
            impractical for most problems
        </p>
    ),
    worstCase: (
        <span>
            O(n<sup>2</sup>)
        </span>
    ),
    avgCase : (
        <span>
            O(n<sup>2</sup>)
        </span>
    ),
    bestCase: (<span>O(n)</span>),
    space: (<span>O(1)</span>)
}



export default BubbleSort
