import { toast } from 'react-toastify';

import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Filme(){

    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            //console.log(response.data);

            //Tentou acessar com um id que não existe, navego ele para home!
            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        // Desmonta a pagina
        return () => {
            console.log("Componente desmontado");
        }

    }, [history, id]);

    function salvaFilmes(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        //Se tiver algum filme são com esse mesmo id precisa ignorar...
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id );

        //some => devolve um True ou False
        if ( hasFilme ){
            toast.error('Você já possui esse filme salvo.');
            return;
            // Para a execução aqui...
        }

        // Adiciona  o filme no array
        filmesSalvos.push(filme);
        // Salva o filme no localStorage
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }
    
    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={salvaFilmes}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}