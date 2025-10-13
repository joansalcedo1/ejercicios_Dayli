const express = require("express");
const controllerUser= require("../controllers/userController.js");
const router = express.Router();

router.get("/",controllerUser.getUsers);
router.get("/account",controllerUser.getAccounts);
router.post("/user",controllerUser.getUserByMail);
router.post("/createUser", controllerUser.createUser);
router.delete("/:id_user", controllerUser.deleteUser);
module.exports=router;