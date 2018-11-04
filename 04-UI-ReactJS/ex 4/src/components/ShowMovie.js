import React, { Component } from 'react';
export default class ShowMovie extends Component{
    constructor(props) {
        super(props)
        this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
        this.handleOnClickEdit = this.handleOnClickEdit.bind(this); 
    }

    handleOnClickDelete(){
        this.props.onDelete(this.props.movieToShow.id);
    }
    handleOnClickEdit(){
        this.props.onEdit(this.props.movieToShow.id);
    }
    render() {
        const movie = this.props.movieToShow
        return (
            <article>
                <p>Name: {movie.name} - Year: {movie.year} - Duration: {movie.duration} - key: {movie.id}</p>
                <button onClick={this.handleOnClickDelete}>Delete Film</button>
                <button onClick={this.handleOnClickEdit}>Edit</button>
            </article>
        )
    }
}