import Movie from '../models/Movie';

const initialState = {
	movies: {
		moviesList: [],
        newMovie: new Movie("",0,0,0),
        editMode: false        
	}
}

export default initialState;