const express = require("express");
const cors= require('cors');
const { default:mongoose } = require("mongoose");

require("dotenv").config()
const routesUsers = require("./routes/routes.js")
const app= express();
const PORT= process.env.PORT;

app.set("port",PORT);
app.use(express.json());
app.use(cors());
app.use("/api/dayli01/",routesUsers)
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log("connect to DB"))
.catch((err)=>console.error(err.message))
app.listen(PORT,()=>{
    console.log(`Escuchando con el puerto ${PORT}`)
})
