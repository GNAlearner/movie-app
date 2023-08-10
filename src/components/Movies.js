import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie, isLoading} = useGlobalContext();
  if(isLoading){
    return (
      <div>
        <div  className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section>
      <div className="grid grid-4-col">{movie.map((currentMovie)=> {
        const { imdbID, Title, Poster } = currentMovie;
        const movieName = Title.substring(0, 15);
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{movieName}{Title.length>15?"...":""}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
        )
      })}</div>
    </section>
  )
}

export default Movies