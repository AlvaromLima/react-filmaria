import './styles.css';
import Routes from './routes';
// importar o css padrão do toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// https://sujeitoprogramador.com/r-api/?api=filmes/

// npm install react-router-dom - instalar os routes
// npm install axios - Requisição http - com axios, antes estavamos fazendo com fetch (js)
// npm install react-toastify - visual do alert

export default function App() {

  return (
    <div className="app">
        <Routes/>
        <ToastContainer autoClose={3000}/>
    </div>
  );
}
