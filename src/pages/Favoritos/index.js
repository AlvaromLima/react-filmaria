import './favoritos.css';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
     
    }, []);

    function handleDelete(id){
        // acessar array de filmes e percorrer todos os filmes e devolve os filmes 
        // diferente do que escolhi quando clico em Excluir 
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        // Atualiza o setFilmes e localStorage
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso!');
    }

    return(
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <spam>Você não possui nenhum filme salvo :( </spam>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <spam>{item.nome}</spam>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}