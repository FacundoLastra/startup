import React, { Component } from 'react';
import ShowMovie from '../components/ShowMovie';
import { connect } from 'react-redux';
import {deleteMovie, startEditMovie} from '../actions/index'
import {bindActionCreators} from 'redux'

class ListMovies extends Component{
    constructor(props) {
        super(props);
        this.handleOnEditMovie = this.handleOnEditMovie.bind(this);
        this.handleOnDeleteMovie = this.handleOnDeleteMovie.bind(this);
    }

    handleOnDeleteMovie(id) {
        this.props.deleteMovie(id);
    }
    handleOnEditMovie(id) {
        this.props.startEditMovie(id);
    }
    render() {
        const moviesArray = this.props.movies;
        console.log(moviesArray);
        const listOfMovies = moviesArray.map((movie) =>
            <ShowMovie 
               key = {movie.id}
               movieToShow = {movie}
               onDelete = {this.handleOnDeleteMovie}
               onEdit= {this.handleOnEditMovie}
            />
        )
        return (
            <section>
                <h2>Storages Films</h2>
                {listOfMovies}
            </section>
        )
    }

}
function mapStateToProps(state) {
    return {
        movies: state.movies.moviesList
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteMovie: deleteMovie,
                                startEditMovie: startEditMovie
                              }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps) (ListMovies)
