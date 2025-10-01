import { useState, useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
function Login_logic() {
    const [estado, setEstado] = useState("cargando");
    
    function changeLogin() {
        setEstado("login")
    }
    function changeRegister() {
        setEstado("register")
    }
    if (estado == "cargando") {
        setEstado("login")
        return (
            <>
                <h1>Cargando...</h1>
            </>
        );
    }

    if (estado == "login") {
        return (
            <>
                <div className="grid grid-cols-2 h-screen w-full bg-gray-100 items-center">
                    <div className="flex items-center p-4">
                        <h1 className="text-6xl font-bold mr-4 ">Mi Título</h1>
                    </div>
                    <div className="">
                        <div className="flex items-end justify-center">
                            <div className="bg-amber-900 border rounded-4xl">
                                <button
                                    onClick={changeLogin}
                                    className="w-20 h-10 mx-10 bg-green-400 hover:bg-green-600 hover:cursor-pointer">Log in
                                </button>
                                <button
                                    onClick={changeRegister}
                                    className="w-20 h-10 mx-10 bg-green-400 hover:bg-green-600 hover:cursor-pointer">register
                                </button>
                            </div>
                        </div>
                        <Login />
                    </div>
                </div>
            </>
        )
    }

    if (estado == "register")
        return (
            <>
            <div className="grid grid-cols-2 h-screen w-full bg-gray-100 items-center">
                    <div className="flex items-center p-4">
                        <h1 className="text-6xl font-bold mr-4 ">Mi Título</h1>
                    </div>
                    <div className="">
                        <div className="flex items-end justify-center">
                            <div className="bg-amber-900 border rounded-4xl">
                                <button
                                    onClick={changeLogin}
                                    className={`w-20 h-10 mx-10  bg-green-400 hover:bg-green-600 hover:cursor-pointer`}>Log in
                                </button>
                                <button
                                    onClick={changeRegister}
                                    className="w-20 h-10 mx-10 bg-green-400 hover:bg-green-600 hover:cursor-pointer">register
                                </button>
                            </div>
                        </div>
                        <Register />
                    </div>
                </div>
            </>
        );
}

export default Login_logic;