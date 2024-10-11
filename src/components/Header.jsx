import { NavLink } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <header className="bg-purple-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portal Filmes</h1>
        <ul className="flex space-x-8 text-lg">
          <li><NavLink to="/" className="hover:text-purple-300">Home</NavLink></li>
          <li><NavLink to="/listaFilme" className="hover:text-purple-300">Lista de Filmes</NavLink></li>
          <li><NavLink to="/generos" className="hover:text-purple-300">Gêneros</NavLink></li>
          <li><NavLink to="/watched" className="hover:text-purple-300">Filmes Assistidos</NavLink></li>
          <li><NavLink to="/watch-later" className="hover:text-purple-300">Ver Depois</NavLink></li>
        </ul>
        <Login isLogged={isLogged} handleLogin={handleLogin} />
      </nav>
    </header>
  );
}
