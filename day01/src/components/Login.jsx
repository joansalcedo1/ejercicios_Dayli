import { useState } from "react";

function Login() {
    const [typePass, setTypePass] = useState("password");

    function handlePassword() {
        if (typePass == "password") {
            setTypePass("text");
        } else {
            setTypePass("password");
        }
    }
    return (
        <>
            
            <div className="flex flex-row items-center text-white justify-center">
                <div id="log_father" className="pt-5 px-15 bg-gray-700 rounded-4xl">
                    <h2 className="text-2xl font-bold pb-10">Log in </h2>
                    <div className="grid">
                        <form>
                            <div className=" py-2">
                                <p>Email</p>
                                <input type="text" placeholder="Ingresa tu email" className="w-full p-2 mb-3 rounded border border-gray-300" />
                            </div>
                            <div className="grid grid-cols-1 ">
                                <p>Password</p>
                                <span className="flex items-center gap-3">
                                    <input
                                        type={typePass}
                                        placeholder="Ingresa tu contraseña"
                                        className="w-full p-2 mb-3 rounded border border-gray-300"
                                    />
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        onClick={handlePassword}
                                    >
                                        ver
                                    </button>
                                </span>
                            </div>
                            <div>
                                <button type="submit" className="bg-red-400 text-white hover:bg-red-600 w-full h-10 hover:cursor-pointer">Log in</button>
                            </div>
                        </form>
                        <div className="text-center py-5">
                            <p>or</p>
                            <div className="flex my-2">
                                <button className="w-full mx-2 bg-green-400 hover:bg-green-600 hover:cursor-pointer">G</button>
                                <button className="w-full mx-2 bg-yellow-400 hover:bg-yellow-600 hover:cursor-pointer">M</button>
                                <button className="w-full mx-2 bg-black text-white hover:bg-gray-800 hover:cursor-pointer">A</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;