export default function ComParametro(props) {

	const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
	// props.nota = Math.ceil(props.nota); // ISSO GERA ERRO, PROPRIEDADES SÃO READ ONLY
	const nota = Math.ceil(props.nota);

	return (
		<div>
			<h2>{ props.titulo }</h2>
			<p>
				<strong>{ props.aluno }</strong> tem nota { ' ' }
				<strong>{ nota }</strong> e está { ' ' }
				<strong>{ status }</strong>
			</p>
		</div>
	);
}