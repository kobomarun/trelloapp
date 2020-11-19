import React, { useState } from 'react'

import '../App.css'
const Menu = () => {
    const [ view, setView] = useState(true)
    return(
        <ul className="menu">
            <li onClick={() => setView(false)}>My Dashboard</li>
            <li>My Board</li>
        </ul>
    )
}

export default Menu