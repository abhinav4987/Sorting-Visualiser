import React from 'react'
import {
    swap,
    newTrace,
    addToTrace,
    lastSorted,
    createRange,  
    createKey
} from './sortingUtils'


const QuickSort = (nums) => {
    const trace = newTrace(nums);
  
    function choosePivot(array, start, end) {
      return start;
    }
  
    function partition(array, start, end) {
      let i = start + 1;
      let j = start + 1;
  
      addToTrace(trace, array, lastSorted(trace), [start]);
  
      while (j <= end) {
        if (+array[j] < +array[start]) {
          addToTrace(
            trace,
            array,
            lastSorted(trace),
            [start],
            [j],
            [],
            createRange(start + 1, i)
          );
  
          swap(array, i, j);
  
          addToTrace(
            trace,
            array,
            lastSorted(trace),
            [start],
            [i],
            [],
            createRange(start + 1, i)
          );
          i += 1;
        }
        j += 1;
      }
  
      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [i - 1],
        [],
        [],
        createRange(start, i - 1)
      );
      swap(array, start, i - 1);
  
      addToTrace(
        trace,
        array,
        lastSorted(trace),
        [i - 1],
        [],
        [],
        createRange(start, i - 1)
      );
      return i - 1;
    }
  
    function recursiveQuickSort(array, start, end) {
      if (start >= end) {
        if (start === end) {
          addToTrace(trace, array, [...lastSorted(trace), start]);
        }
        return null;
      }
  
      let pivot = choosePivot(array, start, end);
  
      addToTrace(trace, array, lastSorted(trace), [pivot]);
  
      swap(array, start, pivot);
  
      addToTrace(trace, array, lastSorted(trace), [pivot]);
  
      pivot = partition(array, start, end);
  
      addToTrace(trace, array, [...lastSorted(trace), pivot]);
  
      recursiveQuickSort(array, start, pivot - 1);
      recursiveQuickSort(array, pivot + 1, end);
    }
  
    recursiveQuickSort(nums, 0, nums.length - 1);
  
    return trace;
  }; 

export const SortingKeys = createKey(
    'Comparing',
    'Swapping',
    'Less Than pivot'
);


export const Description = {
    algorithm: 'Quick Sort',
    description: (
        <p>
            <a
                href="https://www.geeksforgeeks.org/Quick-sort/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Quick Sort
            </a>{' '}
            is one of the different Sorting Technique 
            which is based on the concept of Divide
            and Conquer, just like merge sort. But in quick 
            sort all the heavy lifting(major work) is done while
            dividing the array into subarrays, while in case of 
            merge sort, all the real work happens during merging 
            the subarrays. In case of quick sort, the combine step
            does absolutely nothing.This algorithm divides the list 
            into three main parts: Elements less than the Pivot element ,
            Pivot element,  Elements greater than the pivot element.
        </p>
    ),
    worstCase: (
        <span>
            O(<em>n</em>
            <sup>2</sup>)
        </span>
    ),
    avgCase: (
        <span>
            O(<em>n</em>log<em>n</em>)
        </span>
    ),
    bestCase: (
        <span>
            O(<em>n</em>log<em>n</em>)
        </span>
    ),
    space: (
        <span>
            O(log<em>n</em>)
        </span>
    )
}


export default QuickSort;