import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import api from './api/axiosconfig';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies,Setmovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async ()=> {
    try{
      const response = await api.get('api/v1/movies');
      console.log(response.data)
      Setmovies(response.data)
    }
    catch(e) {
      console.log(e)
    }

  }
  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }


  useEffect(()=>{
    getMovies();

  },[])
  return ( 
    <div className='App'>
      <Header></Header>
      <Routes>
         <Route path='/' element={<Layout/>}>
         <Route path='/' element={<Home movies={movies}/>}> </Route>
         <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
         <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
         </Route>
        
      </Routes>
    </div>
  );
}

export default App;
