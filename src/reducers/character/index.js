export default (state, action) => {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				characters: action.characters,
			};

		case 'SET_CURRENT_CHARACTER':
			return {
				...state,
				id: action.id,
			};

		case 'SET_CHARACTER_PROFILE':
			return {
				...state,
				profile: action.profile,
			};

		case 'SET_CHARACTER_WORLD':
			return {
				...state,
				world: action.world,
			};

		case 'SET_CHARACTER_MOVIES':
			return {
				...state,
				movies: action.movies,
			};

		default:
			return state;
	}
};
