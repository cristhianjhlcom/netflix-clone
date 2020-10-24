import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchURL, isLargeRow}) => {

    const [movies, setMovies] = useState([]);

    // creamos un bloque de código para ejecutar una condicion/variable
    useEffect(() => {
        // si [] esta vacio: solo ejecutate una vez y no corra más
        // si pasamos parametro [movies] ejecuta cada vez que el parametro cambia
        const fetchData = async () => {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* row__poster */}
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;