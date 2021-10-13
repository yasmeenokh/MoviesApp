import React, { useEffect, useState } from "react";
import Data from "./data";
import superagent from 'superagent';

let API = 'https://api.themoviedb.org/3/discover/movie?api_key=f1b8d194dba80bd94de376afc7c19763&sort_by=';

const fetchMovies = async (by)=>{
    const res = await superagent.get(`${API}${by}`)
    const results = await res.body.results
    return results;
}
function Main (props) {
    const [moviesData, setMoviesData]= useState([]);

    const sortHandler = (by) =>{
        fetchMovies(by).then(movies=>{
            setMoviesData(movies)
        });
        console.log('byyy', by)
    }
useEffect(()=>{
    fetchMovies('upcoming.desc').then(movies=>{
        setMoviesData(movies)
    });
}, []);

    return (
        <>
<div>
    
    <Data moviesData={moviesData} sortHandler={sortHandler}/>
</div>
        </>
    )
}

export default Main;