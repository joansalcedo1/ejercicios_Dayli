import { useState, useEffect } from "react";
function Login_logic() {
    const [estado, setEstado] = useState("cargando");
    const [typePass, setTypePass] = useState("password");

    function handlePassword() {
        if (typePass == "password") {
            setTypePass("text");
        } else {
            setTypePass("password");
        }
    }
    useEffect(() => {

    }, []);
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
                <div className="grid grid-cols-2 h-screen w-full bg-gray-100">
                    <div className="flex items-center p-4">
                        <h1 className="text-6xl font-bold mr-4 ">Mi Título</h1>
                    </div>
                    
                    <div className="flex flex-row items-center justify-center">
                        <div className="bg-purple-300">
                            <p>Log in</p>
                            <p>register</p>
                        </div>
                        <div id="log_father" className="bg-amber-300 ">
                            <h2 className="text-2xl font-bold">Log in </h2>
                            <span>
                                <p>Email</p>
                                <input type="text" placeholder="Ingresa tu email" className="w-full p-2 mb-3 rounded border border-gray-300" />
                            </span>
                            <span className="">
                                <p>Password</p>
                                <span className="flex items-center gap-3">

                                    <input
                                        type={typePass}
                                        placeholder="Ingresa tu contraseña"
                                        className="w-full p-2 mb-3 rounded border border-gray-300"
                                    />
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        onClick={handlePassword}
                                    >
                                        ver
                                    </button>
                                </span>
                            </span>
                            <span className="mt-5">
                                <button className="bg-red-400 text-white hover:bg-red-600 w-full hover:cursor-pointer">Log in</button>
                            </span>
                            <span className="text-center">
                                <p>or</p>
                                <span className="flex">
                                    <button className="w-full mx-2 bg-green-400 hover:bg-green-600 hover:cursor-pointer">G</button>
                                    <button className="w-full mx-2 bg-yellow-400 hover:bg-yellow-600 hover:cursor-pointer">M</button>
                                    <button className="w-full mx-2 bg-black text-white hover:bg-gray-800 hover:cursor-pointer">A</button>
                                </span>

                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (estado == "register")
        return (
            <>
            </>
        );
}

export default Login_logic;