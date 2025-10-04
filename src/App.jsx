import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'


export default function App(){
return (
<div className="app-root">
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/movies" element={<Movies/>} />
<Route path="/MovieDetails/:id" element={<MovieDetails/>} />
</Routes>
</div>
)
}