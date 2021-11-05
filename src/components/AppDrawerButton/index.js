import React from 'react'
import { MdMenu,MdClose } from "react-icons/md";
import './style.css'


function AppDrawer({onClick, open}) {

    const style = {
        background : "white",
        border: "none",
        padding: 0,
        margin: "none",
        transition: "all 1s ease-out",

    }
    return (
        <button className="toggle__button" onClick={onClick}>
            {open ? 
                <MdClose style={style} /> : <MdMenu  style={style} />}
        </button>
    )
}

export default AppDrawer
