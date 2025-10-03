import { useState } from "react";

function Register() {
    const [typePass, setTypePass] = useState("password");
    const [typePassRepeat, setTypePassRepeat] = useState("password");

    function handlePassword() {
        if (typePass == "password") {
            setTypePass("text");
        } else {
            setTypePass("password");
        }
    }
    function handleRepeatPassword() {
        if (typePass == "password") {
            setTypePassRepeat("text");
        } else {
            setTypePassRepeat("password");
        }
    }
    return (
        <>
            <div className="flex items-end justify-center">
            </div>
            <div className="flex flex-row items-center text-white justify-center">
                <div id="log_father" className="pt-5 px-15 bg-gray-700 rounded-4xl">
                    <h2 className="text-2xl font-bold pb-3">Register </h2>
                    <div className="grid">
                        <form>
                            <div className="">
                                <p className="py-4">Email</p>
                                <input type="text" placeholder="Ingresa tu email" className="w-full p-2 mb-3 rounded border border-gray-300" />
                            </div>
                            <div className="">
                                <p className="py-2"la>Password</p>
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
                                <p className="py-2">Repeat password</p>
                                <span className="flex items-center gap-3">
                                    <input
                                        type={typePassRepeat}
                                        placeholder="Ingresa tu contraseña"
                                        className="w-full p-2 mb-3 rounded border  border-gray-300"
                                    />
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        onClick={handleRepeatPassword}
                                    >
                                        ver
                                    </button>
                                </span>
                            </div>

                            <button type="submit" className="bg-red-400 text-white hover:bg-red-600 w-full h-10 hover:cursor-pointer my-7">Register in</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;