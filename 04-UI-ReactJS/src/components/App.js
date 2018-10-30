import React, { Component } from 'react';
import './App.css';
import Movie from '../models/Movie';
import NewMovie from './newMovie';
import ListMovies from './ListMovies';

function getLastValidId(array){
  let validId = 0;
  if(Array.isArray(array)){
    array.forEach((element) => {
      validId = element.id + 1;
    })
  }
  return validId;
}
function deleteElementByID(array,id){
  if(Array.isArray(array) && typeof id === "number"){
      return array.filter(element => element.id !== id)
  }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { movies: [], movie:new Movie("",0,0,0)}
    ///createMovieEvents
    this.handleOnNewMovieSend = this.handleOnNewMovieSend.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    ///showMovies
    this.handleOnDeleteMovie = this.handleOnDeleteMovie.bind(this);
    this.handleOnEditMovie = this.handleOnEditMovie.bind(this);
  }

  handleOnNewMovieSend(event){
    this.setState( (stateBefore)=>{
      stateBefore.movies.push(stateBefore.movie)
      const newMovie = new Movie("",0,0,getLastValidId(stateBefore.movies))
      return {movies:stateBefore.movies, movie: newMovie}
    })
  }
  handleChangeName(name) {
    this.setState((stateBefore) => {
      stateBefore.movie.setName(name)
      return { movie: stateBefore.movie }
    })
  }
handleChangeDuration(duration) {
  this.setState((stateBefore) => {
    stateBefore.movie.setDuration(duration)
    return { movie: stateBefore.movie }
  })
}
handleChangeYear(year) {
  this.setState((stateBefore) => {
    stateBefore.movie.setYear(year)
    return { movie: stateBefore.movie }
  })
}
handleOnDeleteMovie(id) {
  this.setState((stateBefore) => {
    const filterArray = deleteElementByID(stateBefore.movies,id)
    return { movies: filterArray }
  })
}
handleOnEditMovie(id) {
  console.log("not implemented yet "+ id);
}

  render() {
    const movie = this.state.movie;
    return (
      <div className="App">
        <header >
          <h1>React Topic 4</h1>
        </header>
        <NewMovie
          movie={movie}
          onNameChange={this.handleChangeName}
          onDurationChange={this.handleChangeDuration}
          onYearChange={this.handleChangeYear}
          onSubmit={this.handleOnNewMovieSend}
         />
        <ListMovies
          movies={this.state.movies}
          onDeleteMovie = {this.handleOnDeleteMovie}
          onEditMovie = {this.handleOnEditMovie}          
        />
      </div>
    );
  }
}

export default App;
