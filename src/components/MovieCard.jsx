import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function MovieCard({ movie }){
const nav = useNavigate()
const img = movie.image?.medium || movie.image?.original || ''
const rating = movie.rating?.average ?? 'N/A'


return (
<div className="card" style={{cursor:'pointer'}} onClick={() => nav(`/MovieDetails/${movie.id}`)}>
{img ? <img src={img} alt={movie.name} className="movie-image" /> : <div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>No image</div>}
<h3 style={{margin:'8px 0 4px'}}>{movie.name}</h3>
<div className="small">Language: {movie.language || '—'}</div>
<div className="small">Rating: {rating}</div>
</div>
)
}