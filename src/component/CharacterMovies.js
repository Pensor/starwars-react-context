import React, { useContext } from 'react';
import { Context } from '../AppContext';

function CharacterMovies() {
	const { movies } = useContext(Context);

	return (
		<div id='character-movies' className='col-md-6'>
			<h1>Movies</h1>
			<ul>
				{movies.map(movie => {
					const date = new Date(movie.release_date).toLocaleDateString();
					return (
						<li key={movie.title}>
							{movie.title} ({date})
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CharacterMovies;
