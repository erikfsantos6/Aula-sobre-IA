import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Sistema Escolar</h1>
      <nav>
        <Link to='/'>Início</Link>
        <Link to='/cadastro'>Cadastrar</Link>
        <Link to='/lista-alunos'>Listar Alunos</Link>
      </nav>
    </header>
  );
}