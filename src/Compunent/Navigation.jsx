
// "vite-plugin-icons": "^0.6.5"

import React from 'react'
// import FontAwesomeIcon from 'fomtaw'
// import Icons from 'vite-plugin-icons'
// import { ArrowRight } from 'react-bootstrap-icons';


function Navigation({open , setOpen  }) {
    const menuBtn = () => {
        setOpen(true)
        console.log("pakistan")
        console.log("china")
    }
    return (
        <>
            <div className='main_section'>
                <nav className='nav_section' >
                    <div className="logo">
                        <img src="../src/images/logoo.png" alt="logo" />
                    </div>
                    <ul>
                        <li href="/home">Home </li>
                        <li href="/about">About </li>
                        <li href="/location">Location </li>
                        <li href="/contact">Contact </li>
                    </ul>
                    <button className='nav_btn'> LogIn</button>

                    <button
                        onClick={() => menuBtn()}
                        className='menu_btn'>
                        lll
                    </button>
                </nav>
            </div>

        </>
    )
}

export default Navigation
