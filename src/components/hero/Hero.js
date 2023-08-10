


import React from 'react'
import './hero.css'
import Caroursel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../spinner/Spinner';

const Hero = ({ movies }) => {
    let imgs;
    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <div>
            {movies != null ? <Caroursel>
                    {
                        movies?.map((movie) => {
                            imgs = (movie.backdrops != null ? movie.backdrops[0] : "https://image.tmdb.org/t/p/original/faXT8V80JRhnArTAeYXz0Eutpv9.jpg");
                            return (
                                <Paper>
                                    <div className='movie-card-container'>
                                        <div className='movie-card' style={{ "--img": `url(${imgs})` }} >
                                            <div className='movie-detail'>
                                                <div className='movie-poster'>
                                                    <img src={movie?.poster} alt={movie?.title} />
                                                </div>
                                                <div className='movie-title'>
                                                    <h4> {movie?.title} </h4>
                                                </div>
                                                <div className="movie-buttons-container">
                                                    <Link to={`/Trailer/${movie?.trailerLink.substring(movie?.trailerLink.length - 11)}`}>
                                                        <div className="play-button-icon-container">
                                                            <FontAwesomeIcon className="play-button-icon"
                                                                icon={faCirclePlay}
                                                            />
                                                        </div>
                                                        </Link>
                                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie?.imdbId)} >Reviews</Button>
                                        </div>
                                                        </div>

                                                </div>

                                            </div>
                                        </div>

                                </Paper>


                            );
                        })
                    }
                </Caroursel>
                    : LoadingSpinner()
            }
        </div>
    )
}

export default Hero