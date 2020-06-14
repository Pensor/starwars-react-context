import React from 'react';
import CharacterList from './component/CharacterList';
import CharacterProfile from './component/CharacterProfile';
import CharacterWorld from './component/CharacterWorld';
import CharacterMovies from './component/CharacterMovies';
import characterReducer from './reducers/character';

export const Context = React.createContext();

function AppContext() {
	const initialState = {
		characters: [],
		id: 0,
		profile: {},
		world: {},
		movies: [],
	};

	const [state, dispatch] = React.useReducer(characterReducer, initialState);

	async function getCharacters() {
		const res = await fetch('https://swapi.dev/api/people/');
		const json = await res.json();
		const characters = json.results;
		dispatch({ type: 'SET_CHARACTERS', characters });
	}

	async function getCharacterProfile(id) {
		const response = await fetch(`https://swapi.dev/api/people/${id}/`);
		const profile = await response.json();
		dispatch({ type: 'SET_CHARACTER_PROFILE', profile: profile });
		getCharacterWorld(profile.homeworld);
		getCharacterMovies(profile.films);
	}

	async function getCharacterWorld(url) {
		const res = await fetch(url);
		const world = await res.json();
		dispatch({ type: 'SET_CHARACTER_WORLD', world: world });
	}

	function getCharacterMovies(movieUrls) {
		Promise.all(movieUrls.map(url => fetch(url).then(res => res.json()))).then(movies =>
			dispatch({ type: 'SET_CHARACTER_MOVIES', movies: movies })
		);
	}

	function setCharacter(id) {
		dispatch({ type: 'SET_CURRENT_CHARACTER', id });
		getCharacterProfile(id);
	}

	React.useEffect(() => {
		getCharacters();
	}, []);

	return (
		<Context.Provider value={{ ...state, setCharacter }}>
			<div className='container'>
				<div className='row'>
					<CharacterList />
					<CharacterProfile />
				</div>
				<div className='row'>
					<CharacterWorld />
					<CharacterMovies />
				</div>
			</div>
		</Context.Provider>
	);
}

export default AppContext;
