import React, { Component } from 'react';

export default class NewMovie extends Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
    }

    handleChangeName(event) {
        this.props.onNameChange(event.target.value);
    }
    handleChangeDuration(event) {
        this.props.onDurationChange(event.target.value);
    }
    handleChangeYear(event) {
        this.props.onYearChange(event.target.value);
    }
    handleChangeSubmit(event){
        this.props.onSubmit();
        event.preventDefault()
    }
    render() {
        const movie = this.props.movie;
        const isEdit = this.props.editMode;
        let message = isEdit ? "Please edit the Movie" : "Enter a new Movie";        

        return (
            <form onSubmit={this.handleChangeSubmit}>
                <legend>{message}</legend>
                <label htmlFor="">
                    Name of the Film:
                    <input value={movie.name} onChange={this.handleChangeName} type="text" placeholder="Enter the name of the movie" />
                </label>
                <label htmlFor="">
                    Year:
                    <input type="number" value={movie.year} onChange={this.handleChangeYear} />
                </label>
                <label htmlFor="">
                    Duration:
                    <input type="number" value={movie.duration} onChange={this.handleChangeDuration} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }


}