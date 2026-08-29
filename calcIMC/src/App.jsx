import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState("");
  const [peso , setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade 1";
    if (imc < 40) return "Obesidade 2";
    return "Obesidade 3";
  }

  function calcularImc(evento) {
    evento.preventDefault();
    const pesoConvertido = Number(peso.replace(",", "."));
    const alturaConvertida = Number(altura.replace(",", "."));
    
    if(nome.trim() === "" || pesoConvertido <= 0 || alturaConvertida <= 0) {
        setErro("Preencha com valores validos");
        setResultado(null);
        return;
    }

    const imcCalculado = pesoConvertido / (alturaConvertida * alturaConvertida);

    setResultado({
        valor: imcCalculado.toFixed(2),
        classificacao: classificarImc(imcCalculado)
    });
    setErro("");
}

function limpaForm(){
    setNome("");
    setPeso("");
    setAltura("");
    setResultado(null);
    setErro("");
}

return(
<main>
    <h1>Calculadora de IMC</h1>
    <p className='Introducao'>Informe seu peso e altura para calcular o IMC</p>

    <form onSubmit={calcularImc}>
        <div className='campo'>
            <input
                id='altura'
                type="text"
                inputMode='decimal'
                value={altura}
                onChange={(evento) => setAltura(evento.target.value)}
                placeholder='digite a sua altura Ex: 1.75' />
                Digite a sua altura (em metros)
        </div>
        <div className='campo'>
            <input
                id='peso'
                type="text"
                inputMode='decimal'
                value={peso}
                onChange={(evento) => setPeso(evento.target.value)}
                placeholder='digite o seu peso Ex: 70.5' />
                Digite o seu peso (em kg)
        </div>
        <div className='campo'>
            <input
                id='nome'
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder='digite o seu nome' />
                Digite o seu nome
        </div>
        <button type='submit'>Calcular</button>
        <button type='button' onClick={limpaForm}>Limpar</button>
        </form>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}

        {resultado && (
        <div className="resultado">
        <h2>Resultado para {nome}:</h2>
        <p>IMC: <strong>{resultado.valor}</strong></p>
        <p>Classificação: <strong>{resultado.classificacao}</strong></p>
        </div>
        )}
</main>
)
}

export default App
