import React from 'react'
import {
    newTrace,
    addToTrace,
    createKey
} from './sortingUtils'

const MergeSort = (arraySet) => {

    const trace = newTrace(arraySet);

        function merge(original, start, mid, end) {
            const left = original.slice(start, mid);
            const right = original.slice(mid, end);
            let i = 0;
            let j = 0;
            let k = 0;
            while (i < left.length && j < right.length) {
            if (+left[i] <= +right[j]) {
                addToTrace(trace, original, [], [], [], [k + start]);
                original[k + start] = left[i];
                i++;
                addToTrace(trace, original, [], [], [], [k + start]);
            } else {
                addToTrace(trace, original, [], [], [], [k + start]);
                original[k + start] = right[j];
                j++;
                addToTrace(trace, original, [], [], [], [k + start]);
            }
            k++;
            }
            while (i < left.length) {
            addToTrace(trace, original, [], [], [], [k + start]);
            original[k + start] = left[i];
            i++;
            k++;
            addToTrace(trace, original, [], [], [], [k + start]);
            }
            while (j < right.length) {
            addToTrace(trace, original, [], [], [], [k + start]);
            original[k + start] = right[j];
            j++;
            k++;
            addToTrace(trace, original, [], [], [], [k + start]);
            }
        
            left.length = 0;
            right.length = 0;
        }
        
        function recursiveMergeSort(original, start, end) {
            const length = end - start;
            if (length < 2) {
            if (length < 1) return original;
            else return [original[start]];
            }
        
            const midPoint = Math.floor((start + end) / 2);
        
            addToTrace(
            trace,
            original,
            [],
            [...Array(midPoint - start).keys()].map((i) => i + start)
            );
            recursiveMergeSort(original, start, midPoint);
        
            addToTrace(
            trace,
            original,
            [],
            [...Array(end - midPoint).keys()].map((i) => i + midPoint)
            );
            recursiveMergeSort(original, midPoint, end);
        
            merge(original, start, midPoint, end);
        }
        
        recursiveMergeSort(arraySet, 0, arraySet.length);
        
        addToTrace(trace, arraySet, [...Array(arraySet.length).keys()]);
        return trace;
}

export const SortingKeys = createKey(
    'Call Merge Sort',
    null,
    'Overwrite from axillary array'
);


export const Description = {
    algorithm: 'Merge Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/Merge-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Merge Sort
            </a>{' '}
            is a Divide and Conquer algorithm. It divides the input 
            array into two halves, calls itself for the two halves, and then
            merges the two sorted halves. A MERGE() function is used for 
            merging two halves. The MERGE(arr, l, m, r) is a key process that
            assumes that arr[l..m] and arr[m+1..r] are sorted and merges the 
            two sorted sub-arrays into one. 
        </p>
    ),
    worstCase: (
        <span>
            O(<em>n</em> log <em>n</em>)
        </span>
    ),
    avgCase: (
        <span>
            O(<em>n</em> log <em>n</em>)
        </span>
    ),
    bestCase: (
        <span>
            O(<em>n</em> log <em>n</em>)
        </span>
    ),
    space: (
        <span>
            O(<em>n</em>)
        </span>
    )
}

export default MergeSort
