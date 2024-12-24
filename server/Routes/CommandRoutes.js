const express=require('express')
const route=express.Router()
const {CommandControllerPost,CommandControllerGet,
    CommandControllerMyCommands,CommandControllerViewCommands,
    CommandControllerViewDelete}=require('../Controllers/CommandController')
const authorizeRoles=require('../authenticateToken')
route.post('/commands',authorizeRoles('regular','author'),CommandControllerPost)
route.get('/commands/:id',authorizeRoles('regular','author'),CommandControllerGet)
route.get('/mycommands/:id',authorizeRoles('regular','author'),CommandControllerMyCommands)
route.get('/viewcommands',authorizeRoles('regular','author'),CommandControllerViewCommands)
route.delete('/commands/delete/:id',authorizeRoles('regular','author'),CommandControllerViewDelete)


module.exports=route