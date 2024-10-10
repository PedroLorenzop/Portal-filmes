export default function Login({isLogged, handleLogin}){

    

    return(
        <div className="flex gap-5 items-center">
            {isLogged && <p>Olá ,usúario</p>}
            <button 
            onClick={handleLogin}
            className={`${isLogged ? "bg-white" : "bg-purple-600"} text-purple-800 px-4 py-1 rounded`}>{isLogged ? "Logout": "Login"}
            </button>
        </div>
    )
}