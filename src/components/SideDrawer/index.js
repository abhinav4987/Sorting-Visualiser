import React, {useState,useEffect} from 'react'
import './style.css'


const sizes = [
    {
        value: '5',
        label: '5'
    }, 
    {
        value: '10',
        label: '10'
    }, 
    {
        value: '20',
        label: '20'
    }, 
    {
        value: '50',
        label: '50'
    },
    {
        value: '75',
        label: '75'
    },
    {
        value: '100',
        label: '100'
    }
]

function SideDrawer({open, algorithms, randomise,sizeChange,arraySize, algorithm, algoChange}) {
    
    let className = open ? (`sidebar__utils `) : (`sidebar__utils hide`) 
    const [size,setSize] = useState();
    const [selected,setSelected] = useState();

    useEffect(()=> {
        setSize(arraySize);
    },[arraySize])

    useEffect(()=> {
        setSelected(algorithm);
    },[algorithm])

    const handleSizeChange = (event) => {
        setSize(event.target.value);
        sizeChange(event.target.value)
    };

    const handleAlgoChange = (event) => {
        setSelected(event.target.value);
        algoChange(event.target.value);
    };

    const options = algorithms.map((item)=>(
        <option className="select__option"  value={item.value}>
            {item.label}
        </option>
    ));

    
    const sizeOptions = sizes.map((item)=>(
        <option className="select__option"  value={item.value}>
            {item.label}
        </option>
    ));
    return (
        <nav className = {className} >
        <ul>
            <li className="utils-item"> {/* randomise button*/}
                <button className="randomise" type="button" onClick={randomise}>
                    RANDOMISE
                </button>
            </li>
            <li className="utils-item"> {/* choose algorithm*/} 
            <select value={selected} className="select_area" onChange={handleAlgoChange}>
                {options}
            </select>
            
            </li>
            <li className="utils-item slider_util"> {/* chose size*/}
                <div >
                    <span style={{fontSize: "1.3rem", marginRight: "0.4rem"}}> Size</span>
                    <select  className="select_area__sizes" value={size} onChange={handleSizeChange}>
                        {sizeOptions}
                    </select>
                </div>
            </li>
        </ul>
        </nav>
    )
}

export default SideDrawer
