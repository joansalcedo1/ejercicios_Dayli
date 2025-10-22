import { useState, /*useEffect*/ } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import SpotlightCard from "../components/SpotligthCard";
import GlassSurface from "../components/GlassSurface";
import Aurora from '../components/AuroraBG.jsx'
import ShinyText from "../components/TextAnimation/ShinyText.jsx";
function Login_logic() {
    const [estado, setEstado] = useState("cargando");


    /*useEffect(() => {

    }, []);*/

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

            <div className="grid grid-cols-2 h-screen bg-black w-full overflow-x-hidden">

                <div className="flex text-white flex-col justify-center m-10">
                    <h1 className="text-6xl font-bold ">Mi Título</h1>
                    <p id="state message">Hola amigos</p>
                </div>

                <div className="m-5">
                    <div className="flex justify-center pb-7">


                        <GlassSurface
                            width={440}
                            height={50}
                            blur={15}
                            distortionScale={-200}
                            className="rounded-4xl  px-6"
                        >
                            <button
                                onClick={() => {
                                    setEstado("login")
                                }}
                                className={`w-20 h-10 mx-10  hover:bg-gray-950 rounded hover:cursor-pointer`}>
                                <ShinyText
                                    text="Login"
                                    disabled={false}
                                    speed={3}
                                    className='custom-class'
                                />
                            </button>
                            <button
                                onClick={() => {
                                    setEstado("register")
                                }}
                                className="w-20 h-10 mx-10  hover:bg-green-600 hover:cursor-pointer">
                                    <ShinyText
                                    text="Register"
                                    disabled={false}
                                    speed={3}
                                    className=''
                                />
                            </button>
                        </GlassSurface>

                    </div>
                    {estado == "login" ? mostrarLogin() : mostrarRegister()}
                </div>
            </div>
        </>
    )

}

export default Login_logic;