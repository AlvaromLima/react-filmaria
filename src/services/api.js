import axios from 'axios';

// https://sujeitoprogramador.com/r-api/?api=filmes/

//Base URL > https://sujeitoprogramador.com/
//rota -> r-api/?api=filmes/ (Todos os filmes)
//rota -> r-api/?api=filmes/123 (Filme com id:123)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;
