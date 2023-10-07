// import { useState } from "react"

import React from "react"

const Drawer = ({ open, setOpen }) => {
    const cutBtn = () => {
        console.log("cutttBBTTTTNNN")
        setOpen(false)
    }
    return (
        <>
            {/* <div className=' show sidebar'  > */}
                <div className={open ? 'sidebar show ' : " sidebar"} >
                <button
                    onClick={() => cutBtn()}
                    className='menu_btn crossBtn'>
                    X
                </button>
                {/* <div className={"ul" }> */}
                <div className={open ? "ul" : 'none'}>
                    <li href="/home">Home </li>
                    <li href="/about">About </li>
                    <li href="/location">Location </li>
                    <li href="/contact">Contact </li>
                </div>
            </div>
        </>
    )

}

export default Drawer