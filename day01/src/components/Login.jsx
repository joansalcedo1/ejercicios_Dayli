import { useState } from "react";
import { login } from "../services/services.js"
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import AutohideSnackbar from "../components/SnackBar.jsx";
import SpotlightCard from "./SpotligthCard.jsx";


function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [showSnackbar, setShowSnackBar] = useState(false)
    const [snackMessage, setSnackMessage] = useState(null)
    const [alertSeverity, setAlertSeverity] = useState("success")
    //Ver contraseña 
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
        if (response.status) {
            setShowSnackBar(true);
            setSnackMessage(response.statusText);
            setAlertSeverity("error");
            
        }else{
            if (response.data.mail == email & response.data.password == pass) {
                console.log(`Bienvenido ${response.data.name}`);
                setShowSnackBar(true);
                setSnackMessage(`Bienvenido ${response.data.name}`);
                setAlertSeverity("succes");
                setShowSnackBar(false);
            } else {
                setShowSnackBar(true);
                setSnackMessage(`Contraseña incorrecta`);
                setAlertSeverity("error");
                console.log("contraseña INcorrecta")
                setShowSnackBar(false);
            }
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>

            <div className="flex flex-row items-center text-white justify-center">

                <SpotlightCard id="log_father" className="pt-5 px-15 bg-gray-700 rounded-4xl">
                    <h2 className="text-2xl font-bold pb-10">Log in </h2>
                    <div className="grid">
                        <form onSubmit={handleLogin}>
                            <div className="grid grid-cols-1 py-4">
                                <p>Email</p>
                                <Input
                                    id="standard-textarea"
                                    onChange={(evento) => {
                                        setMail(evento.target.value)
                                        console.log(evento.target.value)
                                    }
                                    }
                                    placeholder="alguien@gmail.com"
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
                                        placeholder="********"
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
                                {
                                    showSnackbar && <AutohideSnackbar text={snackMessage} tryOpen={showSnackbar} severity={alertSeverity} />
                                }
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
                </SpotlightCard>
            </div>

        </>
    );
}

export default Login;