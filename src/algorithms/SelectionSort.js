import React from 'react';
import {
swap,
newTrace,
addToTrace,
lastSorted,
createKey
} from './sortingUtils';


const SelectionSort = (arraySet) => {
    
    const trace = newTrace(arraySet);

    
    for (let i = 0; i < arraySet.length - 1; i++) {

        let minIndex = i;
        for (let j = i + 1; j < arraySet.length; j++) {
            addToTrace(trace, arraySet, lastSorted(trace), [minIndex, j]);
            if (+arraySet[j] < +arraySet[minIndex]) {
            addToTrace(trace, arraySet, lastSorted(trace), [minIndex], [j]);
            minIndex = j;
            addToTrace(trace, arraySet, lastSorted(trace), [minIndex], [j]);
            }
        }

        addToTrace(trace, arraySet, lastSorted(trace), [], [i, minIndex]);

        swap(arraySet, i, minIndex);

        addToTrace(trace, arraySet, [...lastSorted(trace), i], [], []);
    }

        addToTrace(trace, arraySet, [...lastSorted(trace), arraySet.length - 1]);

        return trace;
};

export const SortingKeys = createKey('Comparing', 'Swapping');

export const Description = {
    algorithm: 'Selection Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/insertion-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Selection Sort
            </a>{' '}
            is an in-place comparison sorting algorithm that divides the input
            list into two parts: the sorted sublist of items , which is
            built up from left to right at the front (left) of the list, and
            the sublist of items remaining to be sorted that occupy the rest
            of the list. Initially, the sorted sublist is empty and the
            unsorted sublist is the entire input list. The algorithm proceeds
            by finding the smallest element in the unsorted sublist,
            exchanging (swapping) it with the leftmost unsorted element
            (putting it in sorted order), and moving the sublist boundaries
            one element to the right.
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
    bestCase: (<span>O(n<sup>2</sup>)</span>),
    space: (<span>O(1)</span>)
}

export default SelectionSort