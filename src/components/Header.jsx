import{NavLink} from "react-router-dom";
export default function Header(){
    return(
        <>
            <header>
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/listaFilme">Lista de Filmes</NavLink></li>
                        <li><NavLink to = "/generos">Generos</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}