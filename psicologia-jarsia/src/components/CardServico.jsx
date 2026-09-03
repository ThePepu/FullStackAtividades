function CardServico({ icone, titulo, descricao, modalidade, disponivel }) {
  return (
    <article className="card-servico">
      <span className="icone-servico" aria-hidden="true">{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span className="modalidade">{modalidade}</span>
      {disponivel !== undefined && (
        <span
          className="status-disponibilidade"
          style={{ color: disponivel ? "var(--verde)" : "#8A4A36" }}
        >
          {disponivel ? "✓ Disponível" : "Consulte disponibilidade"}
        </span>
      )}
    </article>
  );
}

export default CardServico;

