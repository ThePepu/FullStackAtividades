import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState("");
  const [participantes, setParticipantes] = useState([]);
  const [erro, setErro] = useState("");

  function adicionarParticipante(evento) {
    evento.preventDefault();

    if (nome.trim() === "") {
      setErro("Preencha com um nome valido");
      return;
    }

    setParticipantes([...participantes, nome.trim()]);
    setNome("");
    setErro("");
  }

  function removerParticipante(indexParaRemover) {
    const novaLista = participantes.filter((_, index) => index !== indexParaRemover);
    setParticipantes(novaLista);
  }

  function limpaForm() {
    setNome("");
    setParticipantes([]);
    setErro("");
  }

  return (
    <main>
      <h1>Lista de Participantes</h1>
      <p className='Introducao'>Registre os participantes da Mostra de Tecnologia</p>

      <form onSubmit={adicionarParticipante}>
        <div className='campo'>
          <input
            id='nome'
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder='digite o nome do participante'
          />
          Digite o nome do participante
        </div>
        <div className='botoes'>
          <button type='submit'>Adicionar</button>
          <button type='button' onClick={limpaForm}>Limpar Lista</button>
        </div>
      </form>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="resultado">
        <h2>Total de participantes: {participantes.length}</h2>

        {participantes.length === 0 ? (
          <p>Nenhum participante cadastrado</p>
        ) : (
          <ul>
            {participantes.map((participante, index) => (
              <li key={index}>
                <span>{participante}</span>
                <button
                  type='button'
                  className='btn-excluir'
                  onClick={() => removerParticipante(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default App
