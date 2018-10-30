import React, { Component } from 'react';
import ShowMovie from './ShowMovie';
export default class ListMovies extends Component{
    constructor(props) {
        super(props);
        this.handleOnEditMovie = this.handleOnEditMovie.bind(this);
        this.handleOnDeleteMovie = this.handleOnDeleteMovie.bind(this);
    }

    handleOnDeleteMovie(id) {
        this.props.onDeleteMovie(id);
    }
    handleOnEditMovie(id) {
        this.props.onEditMovie(id);
    }
    render() {
        const moviesArray = this.props.movies;
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