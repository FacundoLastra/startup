import React, { Component } from 'react';
import ValidateErrors from '../components/ValidateErrors';
import { addMovie } from '../actions/index';
import connect from 'react-redux/lib/connect/connect';
import {nameChange, durationChange, yearChange, finishEditMovie} from '../actions/index'
import {bindActionCreators} from 'redux'

function formValidation(movie) {
    const errors = [];
    if (typeof movie.name != 'string' || movie.name === "") {
        errors.push("Invalid Name, please insert valid Data");
    }
    if (movie.year < 1900 || movie.year > 2030) {
        errors.push("Invalid Year, pleace insert a valid year");
    }
    if (movie.duration < 0 || movie.duration > 1000) {
        errors.push("Invalid Duration, pleace insert a valid Duration");
    }
    return errors;
}

class NewMovie extends Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this);
        this.state = { errors: [] }
    }

    handleChangeName(event) {
        this.props.nameChange(event.target.value);
    }
    handleChangeDuration(event) {
        if (event.target.value > -1) {
            this.props.durationChange(event.target.value);
        }
    }
    handleChangeYear(event) {
        if (event.target.value > -1) {
            this.props.yearChange(event.target.value);
        }
    }
    handleChangeSubmit(event) {
        /// first is the assignation and the second is 
        /// a callback used to ensure that the status is updated correctly
        this.setState({ errors: formValidation(this.props.movie) },
            () => {
                if (this.state.errors.length === 0) {
                    if(this.props.editMode){
                        this.props.finishEditMovie();
                    }else{
                        this.props.addMovie();                        
                    }
                }
            })
        event.preventDefault() /// prevent the page reload
    }
    render() {
        const movie = this.props.movie;
        const isEdit = this.props.editMode;
        const message = isEdit ? "Please edit the Movie" : "Enter a new Movie";
        const errorsArray = this.state.errors;
        return (
            <section>
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
                <ValidateErrors
                    errors={errorsArray}
                />
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        movie: state.movies.newMovie,
        editMode: state.movies.editMode
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMovie: addMovie,
                                nameChange: nameChange,
                                durationChange: durationChange,
                                yearChange: yearChange ,
                                finishEditMovie: finishEditMovie                                    
      }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (NewMovie)