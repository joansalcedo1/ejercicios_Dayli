const {Console } = require("console");
const accountModel = require("../schemas/account_Schema");
const userModel = require("../schemas/users_Schema");

exports.mensaje = (req,res)=>{
    console.log("Hola desde el controlador")
    return res.status(200).send("Hola desde el controlador");
}

exports.createUser= async (req,res)=>{
    try {
        const content = req.body;
        const rolesPermitidos = ['admin','usuario'];
        if(!rolesPermitidos.includes(content.role)){
            return res.status(400).json({message:`El rol ingresado no existe. solo existen: ${rolesPermitidos.join(', ')}`});
        }
        const newUser = await userModel.create(content);

        if(content.role=="admin"){
            return res.status(200).json({message:`Admin ${newUser.name} creado sin cuenta con exito`})
        }
        
        const newAccount = await accountModel.create({
            userId: newUser._id,
            userName: newUser.name,
            accountNumber: "ACC-" + Date.now(),
            balance:0
        })
        return res.status(200).json({message:`Usuario ${newUser.name} con cuenta ${newAccount.accountNumber} creado con exito`})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:`No se pudo crear el usuario`})
    }
}

exports.createAccount= async(req,res)=>{
    try {
        const content= req.body;
        await accountModel.create(content);
        return res.status(201).json({message:`Cuenta de usuario ${content.userId} creada con exito`})
    } catch (error) {
        console.error(error);
        return res.status(500).json("Hubo un problema creando la cuenta")
    }
}

exports.getUsers = async(req,res)=>{
    try {
        const usuarios = await userModel.find();
        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Hubo un problema buscando ese usuario"})
    }
}
exports.getUserByMail= async(req,res)=>{
    try {
        console.log("req.body:", req.body);
        
        const {mail} = req.body;
        const usuario = await userModel.findOne({'mail': mail});
        console.log(mail)
        if(!usuario){
            return res.status(404).json({message:"Usuario no existe"});
        }
        return res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Hubo un problema buscando ese usuario"})
    }
}
exports.getAccounts = async(req,res)=>{
    try {
        const usuarios = await accountModel.find();
        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Hubo un problema buscando ese usuario"})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const {id_user} = req.params;
        await userModel.findByIdAndDelete(id_user)
        await accountModel.deleteOne({userId:id_user})
        return res.status(200).json({message:`Usuario con ID ${id_user} borrado de forma correcta`})
    } catch (error) {
        console.error(error);
        res.send(error);
        return res.status(500).json({message: "Error borrando usuario, revisar consola"})
    }
}