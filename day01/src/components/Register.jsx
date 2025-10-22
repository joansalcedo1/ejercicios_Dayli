import { useState, } from "react";
import { register } from "../services/services";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import AutohideSnackbar from "../components/SnackBar.jsx";
import SpotlightCard from "./SpotligthCard.jsx";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [showSnackbar, setShowSnackBar] = useState(false)
    const [snackMessage, setSnackMessage] = useState(null)
    const [alertSeverity, setAlertSeverity] = useState("success")



    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [repeatPass, setRepeatPass] = useState("");
    const [pass, setPass] = useState("")


    //Ver contraseña 
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownRPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpRPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((showRepeatPassword) => !showRepeatPassword);


    async function handleRegister(e) {
        e.preventDefault();
        if (pass == !repeatPass) {
            //Logica para mostrar error
            console.error("Las contraseñas no coinciden")
        } else {
            const response = await register(name, mail, pass)
            if (response.registroHecho) {
                console.log(`Registro de usuario ${name} completo`)
                setShowSnackBar(true);
                setSnackMessage(`Cuenta de ${name} creada con exito`);
            } else {
                console.log(`Usuario ${name} no se pudo crear con exito`)
                setShowSnackBar(true);
                setSnackMessage(`Hubo un error creando la cuenta`);
                setAlertSeverity("error")
            }
        }
    }

    return (
        <>
            <SpotlightCard id="reg_father" className="me-4 bg-gray-700 rounded-4xl text-white">

                <h2 className="text-2xl font-bold pb-3 text-center"> Register </h2>
                <form className="p-5" onSubmit={handleRegister}>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-white">
                            <p className="py-4">Name</p>
                            <Input
                                id="standard-textarea"
                                onChange={(evento) => {
                                    setName(evento.target.value)
                                    console.log("el nombre es: " + evento.target.value)
                                }
                                }
                                placeholder="Pepito alguien"
                                type="name"
                                sx={{
                                    '& .MuiInputBase-input': { // Selector para el texto de entrada
                                        color: 'white',
                                    }
                                }}
                            />
                            <p className="pt-10 pb-4">Password</p>
                            <Input

                                id="standard-adornment-password"
                                className=""
                                type={showPassword ? 'text' : 'password'}
                                onChange={evento => setPass(evento.target.value)}
                                placeholder="********"
                                sx={{
                                    '& .MuiInputBase-input': { // Selector para el texto de entrada
                                        color: 'white',
                                    }
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className="">
                            <p className="py-4">Email</p>
                            <Input
                                id="standard-textarea"
                                onChange={(evento) => {
                                    setMail(evento.target.value)
                                    console.log(evento.target.value)
                                }
                                }
                                placeholder="alguien@gmail.com"
                                type="email"
                                sx={{
                                    '& .MuiInputBase-input': { // Selector para el texto de entrada
                                        color: 'white',
                                    }
                                }}
                            />
                            <p className="pt-10 pb-4">Repeat password</p>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={evento => setRepeatPass(evento.target.value)}
                                placeholder="********"
                                sx={{
                                    '& .MuiInputBase-input': { // Selector para el texto de entrada
                                        color: 'white',
                                    }
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowRepeatPassword}
                                            onMouseDown={handleMouseDownRPassword}
                                            onMouseUp={handleMouseUpRPassword}
                                        >
                                            {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        {
                            showSnackbar && <AutohideSnackbar text={snackMessage} tryOpen={showSnackbar} severity={alertSeverity} />
                        }
                    </div>
                    <button type="submit" className="bg-red-400 text-white hover:bg-red-600 w-full h-10 hover:cursor-pointer mt-10">Register in</button>
                </form>
                <div className="text-center py-5">
                    <p>or</p>
                    <div className="flex my-2">
                        <button className="w-full mx-2 bg-green-400 hover:bg-green-600 hover:cursor-pointer">G</button>
                        <button className="w-full mx-2 bg-yellow-400 hover:bg-yellow-600 hover:cursor-pointer">M</button>
                        <button className="w-full mx-2 bg-black text-white hover:bg-gray-800 hover:cursor-pointer">A</button>
                    </div>
                </div>
            </SpotlightCard>
        </>
    );
}

export default Register;