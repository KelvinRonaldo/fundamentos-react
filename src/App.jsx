import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Card from './components/basicos/layout/Card';


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

		<Card titulo='#04 - Desafio Aleatório'>
			<Aleatorio min={ 10 } max={ 100 } />
		</Card>

		<Card titulo='#03 - Fragmento'>
			<Fragmento />
		</Card>

		<Card titulo='#02 - Com Parâmetro'>
			<ComParametro
				titulo='Situação do Aluno'
				aluno='Kelvin Ronaldo'
				nota={ 7.6 }
			/>
		</Card>

		<Card titulo='#01 - Primeiro Componente'>
			<Primeiro></Primeiro>
		</Card>
	</div>;
