import { Link } from "react-router-dom";

export default function MovieCard({ id, titulo, imagem_destaque }) {
  return (
    <div className="w-40 bg-gray-800 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 flex-shrink-0">
      <Link to={`/listaFilme/${id}`}>
        <img 
          src={imagem_destaque} 
          alt={titulo} 
          className="w-full h-60 object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-3">
        <h2 className="text-sm font-bold truncate">{titulo}</h2>
      </div>
    </div>
  );
}
