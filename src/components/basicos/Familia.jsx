import React from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props => {
	return (
		<div>
			<FamiliaMembro nome='Gilvan' sobrenome={props.sobrenome}/>
			<FamiliaMembro nome='Kelvin' {...props}/>
			<FamiliaMembro nome='Leonardo' sobrenome='Heros'/>
		</div>
	);
}