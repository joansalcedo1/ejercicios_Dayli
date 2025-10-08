import { useState } from "react";
import { login } from "../services/services.js"
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setMail] = useState("")
    const [pass, setPass] = useState("")

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    async function handleLogin(e) {
        e.preventDefault();
        console.log(email)
        const response = await login(email, pass)
        console.log(response)
        if (response.data.password == pass) {
            console.log("contraseña correcta")
        } else {
            console.log("contraseña INcorrecta")
        }
        if (response.data.mail == email) {
            console.log("Correo correcto")
        } else {
            console.log("Correo INcorrecto")
        }

    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>

            <div className="flex flex-row items-center text-white justify-center">
                <div id="log_father" className="pt-5 px-15 bg-gray-700 rounded-4xl">
                    <h2 className="text-2xl font-bold pb-10">Log in </h2>
                    <div className="grid">
                        <form onSubmit={handleLogin}>
                            <div className=" py-2">
                                <p>Email</p>
                                <TextField
                                    id="standard-textarea"
                                    label="Multiline Placeholder"
                                    placeholder="Placeholder"
                                    multiline
                                    variant="standard"
                                />

                            </div>
                            <div className="grid grid-cols-1 py-4">
                                <p>Password</p>
                                <span className="flex items-center gap-3 ">
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={evento => setPass(evento.target.value)}
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