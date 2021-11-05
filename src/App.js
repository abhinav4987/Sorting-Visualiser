import {useState, useEffect} from 'react'
import './App.css';

import SortChart from './components/SortChart';
import TopBar from './components/TopBar';
import SideDrawer from './components/SideDrawer';
import CompletionBar from './components/CompletionBar';
import ColorKey from './components/ColorKey/index';
import AlgoInfo from './components/AlgoInfo/index';
import BackDrop from './components/Backdrop/index';
import ControlBar from './components/ControlBar';

// Algorithm imported 
import BubbleSort, {
  SortingKeys as BubbleKeys,
  Description as BubbleDescription
} from './algorithms/BubbleSort'

import InsertionSort, {
  SortingKeys as InsertionKeys,
  Description as InsertionDescription
} from './algorithms/InsertionSort'

import SelectionSort, {
  SortingKeys as SelectionKeys,
  Description as SelectionDescription
} from './algorithms/SelectionSort'

import MergeSort, {
  SortingKeys as MergeKeys,
  Description as MergeDescription
} from './algorithms/MergeSort'

import QuickSort, {
  SortingKeys as QuickKeys,
  Description as QuickDescription
} from './algorithms/QuickSort'

const ALGORITHM_KEY = {
  'Bubble Sort': BubbleKeys,
  'Insertion Sort': InsertionKeys,
  'Selection Sort': SelectionKeys,
  'Merge Sort': MergeKeys,
  'Quick Sort': QuickKeys
};

const ALGORITHM_DESC = {
  'Bubble Sort': BubbleDescription,
  'Insertion Sort': InsertionDescription,
  'Selection Sort': SelectionDescription,
  'Merge Sort': MergeDescription,
  'Quick Sort': QuickDescription
};

const ALGORITHM = {
  'Bubble Sort': BubbleSort,
  'Insertion Sort': InsertionSort,
  'Selection Sort': SelectionSort,
  'Merge Sort': MergeSort,
  'Quick Sort': QuickSort
};


const algorithms  = [
  {
    value: 'Select Algorithm',
    label: 'Select Algorithm'
  },
  {
      value: 'Bubble Sort',
      label: 'Bubble Sort'
  },
  {
    value: 'Insertion Sort',
    label: 'Insertion Sort'
  },
  {
    value: 'Selection Sort',
    label: 'Selection Sort'
  },
  {
    value: 'Merge Sort',
    label: 'Merge Sort'
  }, 
  {
    value: 'Quick Sort',
    label: 'Quick Sort'
  },   

];



function App() {
    const [sideOpen,setSideOpen] = useState(false);
    const [ogArray, setOgArray] = useState([]);
    const [array, setArray] = useState([10,15,19,12,9,16]);
    const [arraySize, setArraySize] = useState(20);
    const [algorithm, setAlgorithm] = useState('Select Algorithm');
    const [trace, setTrace] = useState([]);
    const [playbackspeed, setPlaybackspeed] = useState(1);
    const [playing,setPlay] = useState(false);

    const [groupA, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);
    const [groupC, setGroupC] = useState([]);
    const [groupD, setGroupD] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);
    const [timeOutIds, setTimeOutIds] = useState([]);
    const [traceSteps, setTraceSteps] = useState(-1);
    const  appDrawerToggler = () => {
      setSideOpen((sideOpen) => !sideOpen);
    }


    const generateRandomArray = () => {
      let newArray = [];

      for(let i = 0;i < arraySize;i++) {
        let newNum =  (Math.random()*100).toFixed(0) + 10;
        newArray.push(newNum);
      }
      setArray(newArray);
      setOgArray([...newArray]);
      if(playing) {
        pause();
      }
      setGroupA([]);
      setGroupB([]);
      setGroupC([]);
      setGroupD([]);
      setSortedIndices([]);
      setTraceSteps(-1);
      setPlay(false);
      setTrace([]);
      createTrace([...newArray]);
    }
    const sizeChange = (val) => {
      setArraySize(val);
    }
    const algoChange = (val) => {
      setAlgorithm(val);
    }
    const backDropClick = (val) => {
      setSideOpen(false);
    }
    const changeSpeed = (val) => {
      setPlaybackspeed(val);
      if(playing) {
        pause();
        // setTrace(trace.slice(traceSteps));
        // run(trace);
      }
      generateRandomArray();
    }
    const createTrace = (array) => {
      const numbers = array.slice(0);
      const sort = ALGORITHM[algorithm];

      if(sort) {
        const newTrace = sort([...numbers]);
        setTrace(newTrace);
      }
    }

    useEffect(()=>{
      generateRandomArray();
    },[arraySize]);

    useEffect(()=>{
      generateRandomArray();
      createTrace(array);
    },[algorithm]);

    

    useEffect(()=>{
      // console.log(trace);
    },[trace]);

    const changeVisualState = (visualState) => {
        setArray(visualState.array);
        setGroupA(visualState.groupA);
        setGroupB(visualState.groupB);
        setGroupC(visualState.groupC);
        setGroupD(visualState.groupD);
        setSortedIndices(visualState.sortedIndices);
        // console.log(visualState);
    }

    const clearTimeouts = () => {

      timeOutIds.forEach(timeOutId => {
          clearTimeout(timeOutId);
      });
      setPlay(false);
      setTimeOutIds([]);
    }

    const run = (trace) => {
      setPlay(true);
      const timeoutIds = [];
      const timer = 250 / playbackspeed;

      trace.forEach((item, i) => {
        // code
        let timeoutId = setTimeout((item) => {
          setTraceSteps((traceSteps) => traceSteps + 1 );
          changeVisualState(item);
          // console.log(item.array);
        },i*timer,item);

        timeoutIds.push(timeoutId);
      });

      let timeOutId = setTimeout(
        clearTimeouts,
        trace.length*timer
      );
      
      timeoutIds.push(timeOutId);
      setTimeOutIds(timeoutIds);
    };


    const pause = () => {
        console.log("pause");
        clearTimeouts();
    }

    const play = () => {
      console.log("play");
      setPlay(true);
      let startFrom = traceSteps === -1 ? 0 : traceSteps;
      const nextTrace = trace.slice(startFrom);
      run(nextTrace);
    }

    const repeat = () => {
        clearTimeouts();
        setArray([...ogArray]);
        setTraceSteps(-1);
        run(trace)
    }

    const forward = () => {
        const oldTrace = trace;
        const step = traceSteps;
        if (step < oldTrace.length - 1) {
          const item = oldTrace[step + 1];
          setTraceSteps(step+1);
          changeVisualState(item);
        }
    }

    const backward = () => {
      const oldTrace = trace;
      const step = traceSteps;
      if (step > 0) {
        const item = oldTrace[step - 1];
        setTraceSteps(step-1);
        changeVisualState(item);
      }
    }

    var colorKey = algorithm === "Select Algorithm" ? null : ALGORITHM_KEY[algorithm];
    var algoDescription = algorithm === "Select Algorithm" ? null : ALGORITHM_DESC[algorithm];


    useEffect(() => {
        colorKey = algorithm === "Select Algorithm" ? null : ALGORITHM_KEY[algorithm];
        algoDescription = algorithm === "Select Algorithm" ? null : ALGORITHM_DESC[algorithm];
    },[algorithm]);

    


  return (
    <div className="App" style={{height: '100%'}}>
          
          <TopBar open={sideOpen} appDrawerToggler={appDrawerToggler} algorithms={algorithms} randomise={generateRandomArray}  sizeChange={sizeChange} arraySize={arraySize} algorithm={algorithm} algoChange={algoChange}/>
          <SideDrawer open={sideOpen} algorithms={algorithms} randomise={generateRandomArray}  sizeChange={sizeChange} arraySize={arraySize} algorithm={algorithm} algoChange={algoChange}/>
          <BackDrop onClick={backDropClick} open={sideOpen}/>
          <div className="app_body">
            <SortChart 
              arrayList={array}
              groupA={groupA}
              groupB={groupB}
              groupC={groupC}
              groupD={groupD}
              sortedIndices={sortedIndices}
            />

            <CompletionBar width={(traceSteps/trace.length)}/>
            <ControlBar onPlay={play} onPause={pause}  onChangeSpeed={changeSpeed} playing={playing} repeat={repeat} forward={forward} backward={backward}/>

            
            <div className="Algorithm">
            
              <ColorKey {...colorKey}/>
              <div className="divider"></div>
              
              <AlgoInfo {...algoDescription} />
            
            </div>

          </div>
    </div>
  );
}

export default App;
