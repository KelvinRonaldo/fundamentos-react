import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

import './index.css';

// export default PERMITE RETORNAR UMA FUNÇÃO ANÔNIMA
// APENAS export NÃO

// COMPONENTE COM 'function'
// export default function App(props) {
// 	return (
// 		<div id='app'>
// 			<h1>Fundamentos React</h1>
// 			<Fragmento />
// 			<ComParametro
// 				titulo='Situação do Aluno'
// 				aluno='Kelvin Ronaldo'
// 				nota={ 7.6 }
// 			/>
// 			<Primeiro></Primeiro>
// 		</div>
// 	);
// }

// QUANDO UMA ARRAOW FUNCTION NÃO TEM PARÂMETROS, É POSSIVEL 
// DECLARAR A FUNÇÃO COM _ QUE É O MESMO QUE ()

export default _ =>
	<div id='app'>
		<h1>Fundamentos React Arrow</h1>
		<Fragmento />
		<ComParametro
			titulo='Situação do Aluno'
			aluno='Kelvin Ronaldo'
			nota={ 7.6 }
		/>
		<Primeiro></Primeiro>
	</div>;
