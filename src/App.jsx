import React from 'react';

import './App.css';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';
import Card from './components/layout/Card';


export default _ =>
	<div className='App'>
		<h1>Fundamentos React Arrow</h1>

		<div className='Cards'>

			<Card titulo='#05 - Componente Filhos' color="#0d5f7e">
				<Familia sobrenome='Marilene'>
					<FamiliaMembro nome='Levin'/>
					<FamiliaMembro nome='Kelvin'/>
					<FamiliaMembro nome='Leonardo'/>
				</Familia>
			</Card>

			<Card titulo='#04 - Desafio Aleatório' color="#008080">
				<Aleatorio min={ 10 } max={ 100 } />
			</Card>

			<Card titulo='#03 - Fragmento' color="#856541">
				<Fragmento />
			</Card>

			<Card titulo='#02 - Com Parâmetro' color="#023545">
				<ComParametro
					titulo='Situação do Aluno'
					aluno='Kelvin Ronaldo'
					nota={ 7.6 }
				/>
			</Card>

			<Card titulo='#01 - Primeiro Componente' color="#458912">
				<Primeiro></Primeiro>
			</Card>

		</div>
	</div>;
