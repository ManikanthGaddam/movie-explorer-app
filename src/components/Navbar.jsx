import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'


export default function Navbar(){
const { theme, toggle } = useTheme()
return (
<nav className="navbar card">
<div className="brand"><Link to="/">Movie Explorer</Link></div>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<Link to="/movies" className="small">Movies</Link>
<button className="btn small" onClick={toggle}>Toggle: {theme}</button>
</div>
</nav>
)
}