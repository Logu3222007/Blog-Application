const express=require('express')
const route=express.Router()
const {CommandControllerPost,CommandControllerGet}=require('../Controllers/CommandController')
const authorizeRoles=require('../authenticateToken')
route.post('/commands',authorizeRoles('regular','author'),CommandControllerPost)
route.get('/commands/:id',authorizeRoles('regular','author'),CommandControllerGet)

module.exports=route