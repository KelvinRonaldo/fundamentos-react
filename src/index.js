import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
	<div>
		<Primeiro></Primeiro>
		<ComParametro
			titulo='Situação do Aluno'
			aluno='Kelvin Ronaldo'
			nota={9.9}
		/>
	</div>,
	document.getElementById('root')
);
