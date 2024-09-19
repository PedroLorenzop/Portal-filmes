import{NavLink} from "react-router-dom";
export default function Header(){
    return(
        <>
            <header className="bg-purple-800 text-white flex justify-around h-14 items-center">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/listaFilme">Lista de Filmes</NavLink></li>
                        <li><NavLink to = "/generos">Generos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}