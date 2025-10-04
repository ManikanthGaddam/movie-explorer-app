import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from '../components/MovieList'


export default function Movies(){
const [movies, setMovies] = useState([])
const [filtered, setFiltered] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [query, setQuery] = useState('')


useEffect(()=>{
let cancelled = false
setLoading(true)
setError(null)


axios.get('https://api.tvmaze.com/shows')
.then(res => {
if(cancelled) return
setMovies(res.data)
setFiltered(res.data)
})
.catch(err => {
if(cancelled) return
setError(err)
})
.finally(()=>{ if(!cancelled) setLoading(false) })


return ()=> { cancelled = true }
},[])


useEffect(()=>{
const q = query.trim().toLowerCase()
if(!q) return setFiltered(movies)
setFiltered(movies.filter(m => (m.name || '').toLowerCase().includes(q)))
},[query,movies])


return (
<div className="container">
<h2>Movies</h2>


<div className="search-row">
<input
value={query}
onChange={e=>setQuery(e.target.value)}
placeholder="Search movies by title..."
style={{flex:1,padding:8,borderRadius:8}}
/>
</div>


{loading && <div className="card">Loading movies...</div>}
{error && <div className="card">Failed to fetch movies</div>}


{!loading && !error && (
filtered.length === 0 ? <div className="card">No movies found.</div> : <MovieList movies={filtered} />
)}
</div>
)
}