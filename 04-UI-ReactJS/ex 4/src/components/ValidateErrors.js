import React, { Component } from 'react';
import './ValidateErrors.css';

export default class ValidateErrors extends Component {

    render() {
        const errorsArray = this.props.errors;
        const errorClassName = errorsArray.length > 0 ? "errorsTrue" : "errorsFalse";
        const errors = errorsArray.map((error) =>
            <li key={error}>{error}</li>
        )
        return(
            <ul className={errorClassName}>
                {errors}
            </ul>
        )
    }
}