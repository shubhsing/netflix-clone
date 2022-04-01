import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow]= useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 0) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
        <img className='nav_avatar' src='https://lh3.googleusercontent.com/ogw/ADea4I6IRqwuBTNP2lI3MbdvYRg64mxSwkeTmyqd-8A7=s32-c-mo' alt="user" />
    </div>
  )
}

export default Nav