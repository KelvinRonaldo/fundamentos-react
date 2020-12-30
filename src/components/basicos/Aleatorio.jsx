import React from 'react';

export default (props) => {

	const { max, min } = props;

	const number = Math.trunc(Math.random() * (max + 1 - min) + min);

	return (
		<div>
			<h2>Número Aleatorio</h2>
			<p>Valor Mínimo:  <strong>{ min }</strong></p>
			<p>Valor Máximo:  <strong>{ max }</strong></p>
			<p>Valor Gerado:  <strong>{ number }</strong></p>
		</div>
	);
};

