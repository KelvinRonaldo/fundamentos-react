import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

const tag = <strong>Olá React!!</strong>;


ReactDOM.render(
	<div>
		{tag}
	</div>,
	document.getElementById("root")
);
