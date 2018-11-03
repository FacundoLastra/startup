import initialState from './initialState';
import { getLastValidId, deleteElementByID, getElementById, remplaceElementInArray } from '../utilitys/arrayUtilitys'
import Movie from '../models/Movie';


export const moviesReducer = function (state = initialState,action) {
    switch(action.type) {
        case "ADD_MOVIE": {
            return { /// using Spread 
                ...state,
                movies:{ ...state.movies,
                        moviesList: [...state.movies.moviesList, state.movies.newMovie],
                        newMovie: new Movie("",0,0,getLastValidId(state.movies.moviesList) +1)
                       }
            }
        }
        case "NAME_CHANGE": {
            let movie = Object.assign({},state.movies.newMovie)
            movie.name = action.name;
            return {
                ...state,
                movies: {...state.movies, newMovie:movie}
            }
        }
        case "DURATION_CHANGE": {
            let movie = Object.assign({},state.movies.newMovie)
            movie.duration = action.duration;
            return {
                ...state,
                    movies: {...state.movies, newMovie: movie}                  
            }
        }
        case "YEAR_CHANGE": {
            let movie = Object.assign({},state.movies.newMovie)
            movie.year = action.year;
            return {
                ...state,
                movies: {...state.movies, newMovie: movie}                
            }
        }
        case "DELETE_MOVIE": {
            let movie = Object.assign({},state.movies.newMovie)
            movie.year = action.year;
            return {
                ...state,
                movies: {...state.movies, moviesList: deleteElementByID(state.movies.moviesList,action.id) }
                 
            }
        }
        case "START_EDIT_MOVIE": {
            return {
                ...state,
                movies: {...state.movies,
                        newMovie: getElementById(state.movies.moviesList,action.id),
                        editMode: true 
                        }
                
            }
        }
        case "FINISH_EDIT_MOVIE": {
            return {
                ...state,
                movies: {...state.movies,
                        moviesList: remplaceElementInArray(state.movies.moviesList,state.movies.newMovie),
                        newMovie: new Movie("",0,0,getLastValidId(state.movies.moviesList)),
                        editMode: false
                        }
                
            }
        }
        default: return state;
    }
}