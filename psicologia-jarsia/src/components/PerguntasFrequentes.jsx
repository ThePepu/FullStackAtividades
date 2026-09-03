function PerguntasFrequentes() {
  const perguntas = [
    {
      id: 1,
      pergunta: "Como funciona a primeira sessão de acolhimento?",
      resposta: "O primeiro encontro é dedicado a nos conhecermos, compreendermos suas principais queixas, expectativas e definirmos juntos os passos do processo terapêutico."
    },
    {
      id: 2,
      pergunta: "Qual a duração e frequência dos atendimentos?",
      resposta: "Normalmente, as sessões têm duração de 50 minutos e ocorrem semanalmente, podendo ser ajustadas conforme a necessidade avaliada profissionalmente."
    },
    {
      id: 3,
      pergunta: "Como são realizados os atendimentos on-line?",
      resposta: "As consultas virtuais ocorrem por meio de videochamadas seguras e criptografadas, garantindo sigilo absoluto conforme as diretrizes do Conselho Federal de Psicologia."
    },
    {
      id: 4,
      pergunta: "É necessário encaminhamento médico?",
      resposta: "Não é necessário encaminhamento prévio. Qualquer pessoa que sinta necessidade de apoio emocional, autoconhecimento ou suporte em momentos difíceis pode agendar."
    }
  ];

  return (
    <section className="secao" id="faq">
      <div className="container">
        <p className="titulo-secao">Dúvidas Frequentes</p>
        <h2>Perguntas frequentes sobre o atendimento</h2>
        <div className="faq-lista">
          {perguntas.map((item) => (
            <details key={item.id} className="faq-item">
              <summary>{item.pergunta}</summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;

