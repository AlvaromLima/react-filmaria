import './home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    // async para buscar da internet + rápido
    async function loadFilmes(){
      // await - espera para mim que vou buscar a requisição, usado com async
      //sujeitoprogramador.com => baseurl que esta definido em /service/api.js
      // após o get coloco somente a rota, que concatena com o api a baseurl que foi definido em /service/api.js
      const response = await api.get('r-api/?api=filmes')
      // filmes que estão no https://sujeitoprogramador.com/r-api/?api=filmes/
      /*{
        "id": 123,
        "nome": "Vingadores Ultimato",
        "sinopse": "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
        "foto": "https://sujeitoprogramador.com/r-api/img/filme0.png"
      },
      {
        "id": 546,
        "nome": "Shazam!",
        "sinopse": "Billy Batson (Asher Angel) tem apenas 14 anos de idade, mas recebeu de um antigo mago o dom de se transformar num super-herói adulto chamado Shazam (Zachary Levi). Ao gritar a palavra SHAZAM!, o adolescente se transforma nessa sua poderosa versão adulta para se divertir e testar suas habilidades. Contudo, ele precisa aprender a controlar seus poderes para enfrentar o malvado Dr. Thaddeus Sivana (Mark Strong).",
        "foto": "https://sujeitoprogramador.com/r-api/img/filme1.png"
      },
      ...  
      */
      //console.log(response.data); 
      //response.data esta todo o array dos filmes do sujeitoprogramador.com
      setFilmes(response.data);
    }

    loadFilmes();

  }, []);

  return (
    <div className="container">
      <div className="lista-filmes"> 
        {filmes.map((filme)=>{
          return(
             <article key={filme.id}>
               <strong>{filme.nome}</strong>
               <img src={filme.foto} alt={filme.nome} />
               <Link to={`/filme/${filme.id}`} >Acessar</Link>
             </article> 
          )
        })}
      </div>
    </div>
  );
}

    