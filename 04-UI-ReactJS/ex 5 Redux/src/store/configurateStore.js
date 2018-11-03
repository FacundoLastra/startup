import { createStore } from 'redux'
import { moviesReducer } from '../reducers/moviesReducer'

export const configureStore = function configureStore() {
    return createStore(moviesReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}