import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Homepage from './pages/Home.jsx'
import ListaFilme from './pages/MovieListPage.jsx'
import Detalhesfilmes from './pages/MovieDetailPage.jsx'
import Genero from './pages/GenreListPage.jsx'
import Generofilmes from './pages/MoviesByGenrePage'



const router = createBrowserRouter([{

    path: '/', 
    element: <App />,
    children:[
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/listaFilme',
        element: <ListaFilme/>
      },
      {
        path: '/listaFilme/:id',
        element: <Detalhesfilmes/>
      },
      {
        path:'/generos',
        element:<Genero/>
      },
      {
        path:'/generos/:id',
        element: <Generofilmes/>
      }
      

]
    
    


}])

{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
