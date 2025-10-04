import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function MovieDetails(){
const { id } = useParams()
const [movie, setMovie] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(()=>{
let cancelled = false
setLoading(true)
axios.get(`https://api.tvmaze.com/shows/${id}`)
.then(res => { if(!cancelled) setMovie(res.data) })
.catch(err => { if(!cancelled) setError(err) })
.finally(()=>{ if(!cancelled) setLoading(false) })


return ()=>{ cancelled = true }
},[id])


if(loading) return <div className="container"><div className="card">Loading...</div></div>
if(error) return <div className="container"><div className="card">Failed to load show details.</div></div>
if(!movie) return null


return (
<div className="container">
<div className="card" style={{padding:16}}>
<h2>{movie.name}</h2>
<div style={{display:'flex',gap:16,alignItems:'flex-start',marginTop:12}}>
{movie.image?.original && <img src={movie.image.original} alt={movie.name} style={{width:320,borderRadius:8}} />}
<div>
<div className="small">Language: {movie.language}</div>
<div className="small">Rating: {movie.rating?.average ?? 'N/A'}</div>
<div className="small">Genres: {movie.genres?.join(', ') || '—'}</div>
<div style={{marginTop:12}} className="summary" dangerouslySetInnerHTML={{__html: movie.summary || '<i>No summary</i>'}} />
</div>
</div>
</div>
</div>
)
}