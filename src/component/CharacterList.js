import React, { useContext } from 'react';
import { Context } from '../AppContext';

function CharacterList() {
	const { characters, setCharacter } = useContext(Context);

	return (
		<div id='character-list' className='col-md-6'>
			<h1 className='h1'>Characters</h1>
			<ul>
				{characters.map((c, i) => {
					return (
						<li key={c.name} onClick={() => setCharacter(i + 1)}>
							{c.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CharacterList;
