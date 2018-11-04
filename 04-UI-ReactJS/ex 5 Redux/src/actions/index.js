export const addMovie = () => {
    return {
		type: "ADD_MOVIE"	
	}
}

export const deleteMovie = (idMovie) => {
	return {
		
		type: "DELETE_MOVIE",
		id: idMovie
	}
}

export const startEditMovie = (idMovie) => {
	return {
        type: "START_EDIT_MOVIE",
        id: idMovie
	}
}
export const finishEditMovie = () => {
    return {
        type: "FINISH_EDIT_MOVIE"
    }
}

export const nameChange = (newName) => {
	return {
		type: "NAME_CHANGE",
		name: newName
	}
}
export const durationChange = (newDuration) => {
	return {
		type: "DURATION_CHANGE",
		duration: newDuration
	}
}
export const yearChange = (newYear) => {
	return {
		type: "YEAR_CHANGE",
		year: newYear
	}
}
