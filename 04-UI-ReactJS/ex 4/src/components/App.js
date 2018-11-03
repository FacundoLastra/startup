import React, { Component } from 'react';
import './App.css';
import Movie from '../models/Movie';
import NewMovie from './newMovie';
import ListMovies from './ListMovies';
import logo from '../logo.svg';

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
function getElementById(array,id){
  if(Array.isArray(array)){
    return array.find((element) => element.id === id)
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { movies: [], movie:new Movie("",0,0,0), editMode: false}
    ///createMovieEvents
    this.handleOnNewMovieSend = this.handleOnNewMovieSend.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    ///showMovies
    this.handleOnDeleteMovie = this.handleOnDeleteMovie.bind(this);
    this.handleOnEditMovie = this.handleOnEditMovie.bind(this);
    this.handleOnEditComplete = this.handleOnEditComplete.bind(this)
  }

  handleOnNewMovieSend(){
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
  this.setState((stateBefore) => {
    const movieToEdit = getElementById(stateBefore.movies,id);
    return {movie: movieToEdit , editMode: true}
  })
}
handleOnEditComplete(){
  this.setState((stateBefore) => {
    const newMovie = new Movie("",0,0,getLastValidId(stateBefore.movies))
    return {movie: newMovie, editMode: false }
  })
}
  render() {
    const movie = this.state.movie;
    const isEditMode = this.state.editMode;
    let form;
    if (!isEditMode) {
      form = <NewMovie  
                movie={movie}
                onNameChange={this.handleChangeName}
                onDurationChange={this.handleChangeDuration}
                onYearChange={this.handleChangeYear}
                onSubmit={this.handleOnNewMovieSend}
                editMode={false}
              />      
    }else {
      form = <NewMovie  /// I reuse newMovie to edit
                movie={movie}
                onNameChange={this.handleChangeName}
                onDurationChange={this.handleChangeDuration}
                onYearChange={this.handleChangeYear}
                onSubmit={this.handleOnEditComplete}
                editMode={true}
              />   
    }
    return (
      <div className="App">
        <header >
          <img src={logo} alt="reactLogo" className="App-logo"/>
          <h1>React Topic 4</h1>
        </header>
        {form}
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
