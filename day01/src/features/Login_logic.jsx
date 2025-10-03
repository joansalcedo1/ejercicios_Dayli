import { useState, useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { getUsuarios } from "../services/services";
function Login_logic() {
    const [estado, setEstado] = useState("cargando");
    const [usuarios, setUsuarios] =useState([]);

    useEffect(() => {
        async function fetchData(){
            const data=await getUsuarios();
            
        }
        fetchData();
    }, []);
    
    /*function changeLogin() {
        setEstado("login")
    }
    function changeRegister() {
        setEstado("register")
    }*/
    function mostrarLogin() {
        return <Login />
    }
    function mostrarRegister() {
        return <Register />
    }
    
    if (estado == "cargando") {
        setEstado("login")
        return (
            <>
                <div className="h-screen flex justify-center">
                    <h1 className="text-4xl ">Cargando...</h1>
                </div>
            </>
        );
    }


              
    return (
        <>
            <div className="grid grid-cols-2 h-screen w-full bg-gray-100 items-center">
                <div className="flex items-center p-4">
                    <h1 className="text-6xl font-bold mr-4 ">Mi Título</h1>
                </div>
                <div className="">
                    <div className="flex items-end justify-center py-7">
                        <div className="bg-amber-900 border rounded-4xl px-6 p">
                            <button
                                onClick={() => {
                                    setEstado("login")
                                }}
                                className={`w-20 h-10 mx-10  bg-green-400 hover:bg-green-600 hover:cursor-pointer`}>Log in
                            </button>
                            <button
                                onClick={() => {
                                    setEstado("register")
                                }}
                                className="w-20 h-10 mx-10 bg-green-400 hover:bg-green-600 hover:cursor-pointer">register
                            </button>
                        </div>
                    </div>
                    {estado == "login" ? mostrarLogin() : mostrarRegister()}
                </div>
            </div>
        </>
    )

}

export default Login_logic;