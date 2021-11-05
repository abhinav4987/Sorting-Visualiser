import React from 'react';
import { newTrace,
        addToTrace,
        createKey
} from './sortingUtils';


const InsertionSort = (arraySet) => {

    const trace = newTrace(arraySet);

    for (let i = 1; i < arraySet.length; i++) {
        let value = arraySet[i];
        let partition = i;
        
        addToTrace(trace, arraySet, [], [i]);
        while (+partition > 0 && +arraySet[partition - 1] > +value) {

        addToTrace(trace, arraySet, [], [partition], [partition - 1]);
        arraySet[partition] = arraySet[partition - 1];
        partition -= 1;

        addToTrace(trace, arraySet, [], [], [partition, partition + 1]);
        }

        addToTrace(trace, arraySet, [], [], [], [partition]);
        arraySet[partition] = value;

        addToTrace(trace, arraySet, [], [], [], [partition]);
    }

    // Visualize: Mark all elements as sorted
    addToTrace(trace, arraySet, [...Array(arraySet.length).keys()]);
    return trace;
}


export const SortingKeys = createKey(
    'Comparing',
    'Swapping',
    'Overwrite from memory'
);

export const Description = {
    algorithm: 'Insertion Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/selection-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Insertion Sort
            </a>{' '}
            is a simple sorting algorithm that iterates through an array and
            at each iteration it removes one element from the array, finds the
            location it belongs to in the sorted list and inserts it there,
            repeating until no elements remain in the unsorted list. It is an
            in-place, stable sorting algorithm that is inefficient on large
            input arrays but works well for data sets that are almost sorted.
            It is more efficient in practice compared to other quadratic
            sorting algorithms like bubble sort and selection sort.
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

export default InsertionSort